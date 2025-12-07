import React, { useEffect, useState } from 'react';
import { useOutletContext, Navigate } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PendingDoctors = () => {
  const { dbUser } = useOutletContext();
  const axiosSecure = useAxiosSecure();
  const [pendingDoctors, setPendingDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not admin
  if (dbUser && dbUser.role !== 'admin') return <Navigate to="/" replace />;

  const fetchPendingDoctors = async () => {
    if (dbUser?.role !== 'admin') return;
    try {
      setLoading(true);
      const res = await axiosSecure.get('/doctors/pending', {
        headers: { role: dbUser.role },
      });
      setPendingDoctors(res.data);
    } catch (err) {
      console.error('Failed to fetch pending doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dbUser?.role === 'admin') fetchPendingDoctors();
  }, [dbUser]);

  const approveDoctor = async id => {
    try {
      const res = await axiosSecure.patch(`/doctors/${id}/approve`, null, {
        headers: { role: dbUser.role },
      });
      if (res.data.success) {
        alert('Doctor Approved!');
        setPendingDoctors(prev => prev.filter(doc => doc._id !== id));
      }
    } catch (err) {
      console.error('Failed to approve doctor:', err);
      alert('Failed to approve doctor');
    }
  };

  if (loading)
    return <p className="p-6 text-gray-500">Loading pending doctors...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pending Doctors</h2>
      {pendingDoctors.length === 0 ? (
        <p className="text-gray-500">No pending doctors to approve.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pendingDoctors.map(doc => (
            <div key={doc._id} className="bg-white p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold">{doc.name}</h3>
              <p>{doc.email}</p>
              <p className="text-gray-700">{doc.specialization}</p>
              <button
                onClick={() => approveDoctor(doc._id)}
                className="btn btn-success mt-3"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingDoctors;
