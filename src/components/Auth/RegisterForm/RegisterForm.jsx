import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { useEffect } from 'react';
import { useFormik, FormikContext } from 'formik';
import { register } from '../../../redux/auth/operations';
import { FormTextField } from '../common/FormFields/FormTextField';
import { FormPasswordField } from '../common/FormFields/FormPasswordField';
import { AuthFormBtn } from '../common/AuthFormBtn/AuthFormBtn';
import {
  FormLink,
  FormText,
} from '../common/AuthFormContainer/AuthFormContainer.styled';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterSchema } from './RegisterSchema';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async ({ name, email, password }) => {
      const errors = await formik.validateForm();
      // if (Object.keys(errors).length) {
      //   toast.error('Please enter valid values in all the fields', {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      // }
      if (Object.keys(errors).length === 0) {
        const newUser = { name, email, password };
        dispatch(register(newUser));
      }
    },
  });

  return (
    <FormikContext.Provider value={formik}>
      <form onSubmit={formik.handleSubmit} noValidate>
        <FormTextField
          name="name"
          type="text"
          label="Name"
          placeholder="Name"
          {...formik.getFieldProps('name')}
        />
        <FormTextField
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          {...formik.getFieldProps('email')}
        />
        <FormPasswordField
          name="password"
          label="Password"
          placeholder="Password"
          successMessage="Password is secure"
          {...formik.getFieldProps('password')}
        />
        <FormPasswordField
          name="confirmPassword"
          label="Confirm password"
          placeholder="Confirm password"
          successMessage="Password confirmed"
          {...formik.getFieldProps('confirmPassword')}
        />
        <AuthFormBtn btnText="Registration" />
        <FormText>
          Already have an account? <FormLink to="/login">Login</FormLink>
        </FormText>
      </form>
    </FormikContext.Provider>
  );
};