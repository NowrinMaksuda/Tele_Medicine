//a
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleRegister = data => {
    // 1️⃣ Firebase authentication
    registerUser(data.email, data.password)
      .then(result => {
        const profileImg = data.photo[0];
        const formData = new FormData();
        formData.append('image', profileImg);

        // 2️⃣ Upload profile image to imgbb
        const image_api_url =
          'https://api.imgbb.com/1/upload?key=3b5f429460eb98f68a788baad91b9b83';

        axios
          .post(image_api_url, formData)
          .then(res => {
            const photoURL = res.data.data.url;

            // 3️⃣ Prepare user info to save in MongoDB
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: photoURL,
              role: 'user', // normal user
            };

            // 4️⃣ Save user in MongoDB
            axios
              .post('http://localhost:3000/users', userInfo)
              .then(res => {
                if (res.data.success) {
                  console.log('User added to DB');
                  toast.success('Registration successful!');
                  navigate('/');
                }
              })
              .catch(err => console.log(err));

            // 5️⃣ Update Firebase user profile
            const userProfile = {
              displayName: data.name,
              photoURL: photoURL,
            };
            updateUserProfile(userProfile);
          })
          .catch(err => console.log(err));
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
            {...register('name', { required: true })}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full text-gray-800"
            {...register('email', { required: true })}
          />

          {/* Image */}
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            {...register('photo', { required: true })}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full text-gray-800"
            {...register('password', { required: true })}
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
