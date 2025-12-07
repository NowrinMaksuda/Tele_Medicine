import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({ baseURL: 'http://localhost:3000' });

const useAxiosSecure = () => {
  const { user, dbUser } = useAuth();
 

  useEffect(() => {
    // Request interceptor
    const reqInterceptor = axiosSecure.interceptors.request.use(config => {
      if (user?.accessToken)
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      if (dbUser?.role) config.headers.role = dbUser.role;
      return config;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      res => res,
      err => Promise.reject(err)
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, dbUser]);

  return axiosSecure;
};

export default useAxiosSecure;
