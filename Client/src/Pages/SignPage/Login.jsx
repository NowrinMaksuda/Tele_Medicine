//a
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import { toast } from 'react-toastify';


const Login = () => {
  const { register, handleSubmit } = useForm();
  const { logIn } = useAuth();
const navigate=useNavigate()
  const handleLogin = data => {
    logIn(data.email, data.password)
      .then(res => {
        console.log(res.user);
        navigate('/')
        toast.success('login successfully')
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-primary text-center">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Login to your TeleMed account
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-4"
        >
          {/* Email */}
          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              className="input input-bordered w-full mt-1"
              {...register('email')}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold text-gray-700">Password</label>
            <input
              type="password"
              className="input input-bordered w-full mt-1"
              {...register('password')}
              placeholder="Enter your password"
            />
          </div>

          <p className="text-primary underline text-sm cursor-pointer">
            Forgot Password?
          </p>

          {/* Login Button */}
          <button className="btn bg-primary text-white hover:bg-blue-700 w-full mt-1">
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-2">
            Don’t have an account?
            <Link
              to="/Register"
              className="text-primary font-semibold underline ml-1"
            >
              Register
            </Link>
          </p>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Social Login */}
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
