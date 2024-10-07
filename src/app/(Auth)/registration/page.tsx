'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdLogIn } from 'react-icons/io';
import { BiSolidLock, BiSolidLockOpen } from 'react-icons/bi';
import { useFormik } from 'formik';
import { registrationSchema } from '@/models/authModels';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Registration = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1 className='flex items-center gap-2 text-2xl font-semibold text-gray-200'>
        <span>
          <IoMdLogIn />
        </span>
        Registration
      </h1>
      <p className='text-gray-400 font-light text-sm mt-2'>
        Become a user - You're Just One Step Away from Unlocking the Power of
        Monitoring!
      </p>
      <p className='h-[1px] bg-dark-600 my-5'></p>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col my-1.5'>
          <label
            htmlFor='fullName'
            className='text-dark-100 font-medium mb-2 flex items-center gap-1.5'
          >
            Full Name
            <span className='text-red-700 font-normal text-xl'>*</span>
          </label>
          <input
            autoComplete='off'
            type='fullName'
            id='fullName'
            name='fullName'
            placeholder='Help Desk'
            className='bg-dark-800 border border-dark-600 px-3 py-2 rounded-lg text-base font-asap text-gray-400 placeholder:text-dark-600 outline-none'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik?.touched?.fullName && formik?.errors?.fullName && (
            <p className='text-red-600 text-xs mt-2'>
              {formik?.errors?.fullName}
            </p>
          )}
        </div>
        <div className='flex flex-col my-1.5'>
          <label
            htmlFor='email'
            className='text-dark-100 font-medium mb-2 flex items-center gap-1.5'
          >
            Email
            <span className='text-red-700 font-normal text-xl'>*</span>
          </label>
          <input
            autoComplete='off'
            type='email'
            id='email'
            name='email'
            placeholder='helpdesk@mahabubsany.com'
            className='bg-dark-800 border border-dark-600 px-3 py-2 rounded-lg text-base font-asap text-gray-400 placeholder:text-dark-600 outline-none'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik?.touched?.email && formik?.errors?.email && (
            <p className='text-red-600 text-xs mt-2'>{formik?.errors?.email}</p>
          )}
        </div>
        <div className='flex flex-col my-1.5'>
          <label
            htmlFor='password'
            className='text-dark-100 font-medium mb-2 flex items-center gap-1.5'
          >
            Password
            <span className='text-red-700 font-normal text-xl'>*</span>
          </label>
          <div className='relative w-full'>
            <input
              autoComplete='off'
              type={visiblePassword ? 'text' : 'password'}
              id='password'
              name='password'
              placeholder='********'
              className='bg-dark-800 border border-dark-600 px-3 py-2 rounded-lg text-base font-asap text-gray-400 placeholder:text-dark-600 outline-none flex items-center w-full'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <button
              type='button'
              className='text-base text-dark-100 absolute top-3 right-2'
              onClick={handleVisiblePassword}
            >
              {visiblePassword ? <BiSolidLockOpen /> : <BiSolidLock />}
            </button>
          </div>
          {formik?.touched?.password && formik?.errors?.password && (
            <p className='text-red-600 text-xs mt-2'>
              {formik?.errors?.password}
            </p>
          )}
        </div>
        <div className='flex flex-col my-1.5'>
          <label
            htmlFor='confirmPassword'
            className='text-dark-100 font-medium mb-2 flex items-center gap-1.5'
          >
            Confirm Password
            <span className='text-red-700 font-normal text-xl'>*</span>
          </label>
          <div className='relative w-full'>
            <input
              autoComplete='off'
              type={visiblePassword ? 'text' : 'password'}
              id='confirmPassword'
              name='confirmPassword'
              placeholder='********'
              className='bg-dark-800 border border-dark-600 px-3 py-2 rounded-lg text-base font-asap text-gray-400 placeholder:text-dark-600 outline-none flex items-center w-full'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            <button
              type='button'
              className='text-base text-dark-100 absolute top-3 right-2'
              onClick={handleVisiblePassword}
            >
              {visiblePassword ? <BiSolidLockOpen /> : <BiSolidLock />}
            </button>
          </div>
          {formik?.touched?.confirmPassword &&
            formik?.errors?.confirmPassword && (
              <p className='text-red-600 text-xs mt-2'>
                {formik?.errors?.confirmPassword}
              </p>
            )}
        </div>
        <button
          type='submit'
          className='mt-2 w-full p-2.5 bg-blue-600 rounded-lg text-gray-200 hover:bg-blue-700'
        >
          Sign Up
        </button>
      </form>
      <p className='h-[1px] bg-dark-600 my-5'></p>
      <div className='text-base flex items-center justify-center gap-2'>
        <p className='text-gray-400 font-light'>Already have an account?</p>
        <Link href='/login' className='text-blue-600 font-normal'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Registration;
