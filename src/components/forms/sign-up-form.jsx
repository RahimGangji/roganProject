import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { signUpSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';


const countries = ['Country*', 'Afghanistan', 'Algeria', 'America', 'Bangladesh', 'France', 'Italy', 'India', 'Pakistan', 'Turki', 'United State', 'Japan']
const accountTypes = ['Business', 'Personal', 'Corporate'];


const SignUpForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', password: '', country: '', type: '', terms: false },
    validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(`Sign up successfully`, {
        position: 'top-left'
      })
      resetForm()
    }
  })
  return (
    <form id="signUp-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="input-group">
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} name="name" type="text" required />
            <label>Username</label>
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <input value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" type="email" required />
            <label>Email</label>
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <input value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" type="password" required />
            <label>Password</label>
            {touched.password && <ErrorMsg error={errors.password} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <select value={values.country} onChange={handleChange} onBlur={handleBlur} name="country" className="theme-select-menu">
              {countries.map((country, i) => <option key={i}>{country}</option>)}
            </select>
            {touched.country && <ErrorMsg error={errors.country} />}
          </div>
        </div>
      </div>

      <div className="acType-content">
        <h4>Account type.</h4>
        <p>Select the type of your account below</p>
        <ul className="acType-list">
          {accountTypes.map((type, i) => (
            <li key={i}>
              <div>
                <input type="radio" name="acType" value={type.toLowerCase()} placeholder="" />
                <label htmlFor={type.toLowerCase()}>{type}</label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="agreement-checkbox">
        <input value={values.terms} onChange={handleChange} onBlur={handleBlur} 
        type="checkbox" name='terms' id='terms' />
        <label htmlFor="terms">I agree to the terms and policy from the rogan inc.</label>
        {touched.terms && <ErrorMsg error={errors.terms?.split('true,')[1]} />}
      </div>
      <button className="solid-button-one">Signup</button>
    </form>
  );
};

export default SignUpForm;