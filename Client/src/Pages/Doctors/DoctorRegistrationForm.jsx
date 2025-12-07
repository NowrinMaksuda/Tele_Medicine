import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const DoctorRegistrationForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [imagePreview, setImagePreview] = useState(null);

  // Convert image to base64
  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const onSubmit = async data => {
    try {
      let imageBase64 = '';
      if (data.image[0]) {
        imageBase64 = await toBase64(data.image[0]);
      }

      const doctorData = {
        name: data.name,
        email: data.email,
        specialization: data.specialization,
        phone: data.phone || '',
        degree: data.degree || '',
        status: 'pending',
        image: imageBase64,
      };

      const res = await axiosSecure.post('/doctors', doctorData);
      console.log(res.data);
      reset();
      setImagePreview(null);
      alert('Successfully Submitted! Wait for Admin Approval');
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Doctor Registration
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name"
          defaultValue={user.displayName}
          className="input input-bordered w-full"
          {...register('name', { required: true })}
        />
        <input
          type="email"
          placeholder="Email"
          defaultValue={user.email}
          className="input input-bordered w-full"
          {...register('email', { required: true })}
        />
        <input
          type="text"
          placeholder="Specialization"
          className="input input-bordered w-full"
          {...register('specialization', { required: true })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full"
          {...register('phone')}
        />
        <input
          type="text"
          placeholder="Degree / Qualification"
          className="input input-bordered w-full"
          {...register('degree')}
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          className="input w-full border"
          {...register('image')}
          onChange={e => {
            if (e.target.files[0])
              setImagePreview(URL.createObjectURL(e.target.files[0]));
          }}
        />

        {/* Image Preview */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
        )}

        <button className="btn bg-primary text-white hover:bg-blue-700 mt-2">
          Submit for Approval
        </button>
      </form>
    </div>
  );
};

export default DoctorRegistrationForm;
