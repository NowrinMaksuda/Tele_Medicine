// Doctors List
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:3000/doctors/approved');
        const data = await res.json();
        setDoctors(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      } 
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading doctors...</p>
      </div>
    );
  }

  if (doctors.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">No doctors approved yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {doctors.map(doc => (
        <div
          key={doc._id}
          className="bg-white p-4 rounded-xl shadow text-center"
        >
          <img
            src={doc.image || 'https://via.placeholder.com/150'} // default image
            alt={doc.name}
            className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
          />
          <h3 className="text-xl font-semibold text-primary">{doc.name}</h3>
          <p className="text-gray-700">{doc.specialization}</p>
          <Link
            to={`/doctor-details/${doc._id}`}
            className="btn btn-sm mt-2 bg-primary text-white hover:bg-blue-700"
          >
            View Profile
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
