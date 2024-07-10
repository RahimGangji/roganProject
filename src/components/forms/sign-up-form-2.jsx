import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { signUpSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const countries = ['Country*', 'Afghanistan', 'Algeria', 'America', 'Bangladesh', 'France', 'Italy', 'India', 'Pakistan', 'Turki', 'United State', 'Japan']

const SignUpFormTwo = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', password: '', country: '', terms: false },
    validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(`Hi ${values.name} Sign up successfully`, {
        position: 'top-left'
      })
      resetForm()
    }
  })
  return (
    <form id="signUp-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="input-group">
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} name="name" type="text" required />
            <label>Username</label>
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-12">
          <div className="input-group">
            <input value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" type="email" required />
            <label>Email</label>
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-12">
          <div className="input-group">
          <input value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" type="password" required />
            <label>Password</label>
            {touched.password && <ErrorMsg error={errors.password} />}
          </div>
        </div>
        <div className="col-12">
          <div className="input-group">
            <select className="theme-select-menu" value={values.country} onChange={handleChange} onBlur={handleBlur} name="country">
              {countries.map((country, i) => <option key={i}>{country}</option>)}
            </select>
            {touched.country && <ErrorMsg error={errors.country} />}
          </div>
        </div>
      </div>
      <div className="agreement-checkbox">
      <input value={values.terms} onChange={handleChange} onBlur={handleBlur} 
        type="checkbox" name='terms' id='terms' />
        <label htmlFor="terms">I agree to the terms and policy from the rogan inc.</label>
        {touched.terms && <ErrorMsg error={errors.terms?.split('true,')[1]} />}
      </div>
      <button type='submit' className="line-button-one">Sign up</button>
    </form>
  );
};

export default SignUpFormTwo;