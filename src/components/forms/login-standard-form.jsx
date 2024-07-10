import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { loginSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const LoginStandardForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(`Login successfully`, {
        position: 'top-left'
      })
      resetForm()
    }
  })
  
  return (
    <form onSubmit={handleSubmit} id="login-form">
      <div className="row">
        <div className="col-12">
          <div className="input-group">
            <input value={values.email} onChange={handleChange} onBlur={handleBlur} 
            type="email" name="email" required />
            <label>Email</label>
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-12">
          <div className="input-group">
            <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password"
            name="password" required />
            <label>Password</label>
            {touched.password && <ErrorMsg error={errors.password} />}
          </div>
        </div>
      </div>
      <div className="agreement-checkbox d-flex justify-content-between align-items-center">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <a href="#">Forget Password?</a>
      </div>
      <button type="submit" className="solid-button-one">Login</button>
    </form>
  );
};

export default LoginStandardForm;