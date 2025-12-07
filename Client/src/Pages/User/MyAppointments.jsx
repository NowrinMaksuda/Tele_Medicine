// src/pages/dashboard/MyAppointments.jsx
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const MyAppointments = () => {
  const { dbUser } = useOutletContext() || {};

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    if (!dbUser?._id) {
      setLoading(false);
      return;
    }

    const loadAppointments = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/appointments/user/${dbUser._id}`
        );
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAppointments();
  }, [dbUser?._id]);

  if (loading) {
    return <p className="text-center mt-6">Loading...</p>;
  }

  if (!dbUser?._id) {
    return (
      <p className="text-center mt-6 text-red-500">
        Please log in to see your appointments.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>

      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-2 px-4 text-left">Doctor Name</th>
                <th className="py-2 px-4 text-left">Specialization</th>
                <th className="py-2 px-4 text-left">Appointment Date</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appt => (
                <tr key={appt._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{appt.doctorName}</td>
                  <td className="py-2 px-4">
                    {appt.doctorSpecialization || 'N/A'}
                  </td>
                  <td className="py-2 px-4">
                    {appt.appointmentDate
                      ? new Date(appt.appointmentDate).toLocaleDateString()
                      : 'N/A'}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        appt.status === 'pending'
                          ? 'bg-yellow-500'
                          : appt.status === 'approved'
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      }`}
                    >
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
