import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { blogSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const BlogCommentForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '' },
    validationSchema: blogSchema,
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
        <div className="col-md-6 input_group">
          <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" 
          placeholder="Your Name*" name='name' />
          {touched.name && <ErrorMsg error={errors.name} />}
        </div>
        <div className="col-md-6 input_group">
          <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" 
          placeholder="Your Email*" name='email' />
          {touched.email && <ErrorMsg error={errors.email} />}
        </div>
        <div className="col-12 input_group">
          <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur} 
           placeholder="Your Comment*" name='msg'></textarea>
           {touched.msg && <ErrorMsg error={errors.msg} />}
        </div>
      </div>
      <button type='submit' className="theme-button-two">Post Comment</button>
    </form>
  );
};

export default BlogCommentForm;