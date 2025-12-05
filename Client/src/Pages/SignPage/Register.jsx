import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  // const axiosSecure = useAxiosSecure();

  const handleRegister = data => {
    registerUser(data.email, data.password)
      .then(result => {
        const profileImg = data.photo[0];
        const formData = new FormData();
        formData.append('image', profileImg);

        const image_api_url =
          'https://api.imgbb.com/1/upload?key=3b5f429460eb98f68a788baad91b9b83';

        axios.post(image_api_url, formData).then(res => {
          const photoURL = res.data.data.url;

          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
          };

          // axiosSecure.post('/users', userInfo).then(res => {
          //   if (res.data.insertedId) {
          //     console.log('User added to DB');
          //   }
          // });

          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };

          updateUserProfile(userProfile);
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Create an Account
        </h2>

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full text-gray-800"
            {...register('name')}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full text-gray-800"
            {...register('email')}
          />

          {/* Image */}
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            {...register('photo')}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full text-gray-800"
            {...register('password')}
          />

          {/* Register Button */}
          <button className="btn bg-primary text-white hover:bg-blue-700 w-full">
            Register
          </button>

          <p className="w-full text-center text-gray-600">Or</p>

          {/* Social Login */}
          <SocialLogin />
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
