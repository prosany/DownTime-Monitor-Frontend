import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email address is not valid')
    .required('Email address is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^_])[A-Za-z\d@$!%*?&#^_]{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character (e.g., @, $, !, %, *, ?, &, #, ^, _)'
    )
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters.'),
});

export const registrationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string()
    .email('Email address is not valid')
    .required('Email address is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^_])[A-Za-z\d@$!%*?&#^_]{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character (e.g., @, $, !, %, *, ?, &, #, ^, _)'
    )
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});
