import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { contactSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const ContactAgencyForm = ({ style_3, contact_standard }) => {
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
    <form onSubmit={handleSubmit} className={`form ${contact_standard ? '' :
      `form-style-${style_3 ? 'three' : 'two'}`} `}
      id="contact-form">
      <div className="messages"></div>
      <div className="controls">
        <div className="form-group">
          <input value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" type="email" name="email" placeholder="Email Address*" required="required" />
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>

        <div className="form-group">
          <input value={values.subject} onChange={handleChange} onBlur={handleBlur} id="subject" type="text" name="subject" placeholder="Subject*" required="required" />
          {touched.subject && <ErrorMsg error={errors.subject} />}
        </div>

        <div className="form-group">
          <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur} id="msg" name="msg" className="form_message" placeholder="Your Message*" required="required"></textarea>
          {touched.msg && <ErrorMsg error={errors.msg} />}
        </div>
        <button type='submit' className="theme-button-two">Send Message</button>
      </div>
    </form>
  );
};

export default ContactAgencyForm;