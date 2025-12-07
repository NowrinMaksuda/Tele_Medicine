import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';


const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dbUser } = useAuth();

  const axiosSecure = useAxiosSecure();
  const [doctor, setDoctor] = useState({});
  const [loading, setLoading] = useState(true);
  const [appointmentDate, setAppointmentDate] = useState('');

  useEffect(() => {
    const loadDoctor = async () => {
      try {
        const res = await axiosSecure.get(`/doctor/${id}`);
        setDoctor(res.data);
      } catch (err) {
        console.error('Failed to fetch doctor details:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) loadDoctor();
  }, [id, axiosSecure]);

  const handleAppointment = async () => {
    if (!appointmentDate) {
      alert('Please select a date first!');
      return;
    }

    if (!dbUser?._id) {
      alert('You must be logged in to book an appointment.');
      return;
    }

    const appointmentData = {
      userId: dbUser._id,
      doctorId: doctor._id,
      doctorName: doctor.name,
      doctorSpecialization: doctor.specialization,
      appointmentDate,
      status: 'pending',
    };

    try {
      const res = await axiosSecure.post('/appointments', appointmentData);
      if (res.data.success) {
        alert('Appointment booked successfully!');
        navigate('/dashboard/my-appointments');
      } else {
        alert(res.data.message || 'Failed to book appointment. Try again!');
      }
    } catch (err) {
      console.error('Error booking appointment:', err);
      alert('Something went wrong!');
    }
  };

  if (loading)
    return <p className="text-center mt-6">Loading doctor details...</p>;

  if (!doctor?._id) {
    return (
      <p className="text-center mt-6 text-red-500">
        Doctor not found or failed to load.
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-6">
      {doctor.image ? (
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      <h2 className="text-3xl font-bold text-primary mb-4 text-center">
        {doctor.name}
      </h2>

      <div className="text-gray-700 space-y-2 text-center mb-4">
        <p>Specialization: {doctor.specialization}</p>
        <p>Degree: {doctor.degree}</p>
        <p>Phone: {doctor.phone}</p>
        <p>Email: {doctor.email}</p>
      </div>

      <div className="text-center mb-4">
        <label className="mr-2 font-medium">Select Appointment Date:</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={e => setAppointmentDate(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>

      <div className="text-center">
        <button
          onClick={handleAppointment}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
