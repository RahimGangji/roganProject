import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { portfolioSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const PortfolioForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', subject: '', msg: '' },
    validationSchema: portfolioSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(`Hi ${values.name} your message sent successfully`, {
        position: 'top-left'
      })
      resetForm()
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group">
            <input value={values.name} onChange={handleChange}
              onBlur={handleBlur} name="name" type="text" required />
            <label>Your Name</label>
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-group">
            <input value={values.email} onChange={handleChange}
              onBlur={handleBlur} type="email" name='email' required />
            <label>Your Email Address</label>
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-12">
          <div className="input-group">
            <input value={values.subject} onChange={handleChange}
              onBlur={handleBlur} type="text" name='subject' required />
            <label>Your Subject</label>
            {touched.subject && <ErrorMsg error={errors.subject} />}
          </div>
        </div>
        <div className="col-12">
          <div className="input-group">
            <textarea value={values.msg} onChange={handleChange}
              onBlur={handleBlur} name="msg" required></textarea>
            <label>Your Message</label>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-12">
          <div className="clearfix">
            <button type='submit' className="send-button">Send Message</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PortfolioForm;