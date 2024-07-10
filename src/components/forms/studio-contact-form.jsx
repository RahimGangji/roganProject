import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { contactSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const StudioContactForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { email: '', subject: '', msg: '' },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(` your message sent successfully`, {
        position: 'top-left'
      })
      resetForm()
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <div className='s-input-group'>
        <input value={values.email} onChange={handleChange} onBlur={handleBlur} 
          placeholder="Your Email*" type="email" name='email' required />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className='s-input-group'>
        <input value={values.subject} onChange={handleChange} placeholder="Subject*"
          onBlur={handleBlur} type="text" name='subject' required />
        {touched.subject && <ErrorMsg error={errors.subject} />}
      </div>
      <div className='s-input-group'>
        <textarea value={values.msg} onChange={handleChange} name="msg"
          onBlur={handleBlur} placeholder="Message"></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>
      <button type='submit' className="theme-button-two">Send Request</button>
    </form>
  );
};

export default StudioContactForm;