import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject:Yup.string().required().min(20).label("Subject"),
  msg: Yup.string().required().min(20).label("Message"),
  password: Yup.string().required().min(6).label("Password"),
  terms:Yup.bool().oneOf([true,'You need to accept the terms and conditions']),
  number: Yup.string().required().min(11).label("Number"),
});

export const blogSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  msg: Yup.string().required().min(20).label("Message"),
})

export const loginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
})

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  country:Yup.string().required("Please Chose a country"),
  terms:Yup.bool().oneOf([true,'You need to accept the terms and conditions']),
})

export const contactSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  subject:Yup.string().required().min(20).label("Subject"),
  msg: Yup.string().required().min(20).label("Message"),
})

export const portfolioSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject:Yup.string().required().min(20).label("Subject"),
  msg: Yup.string().required().min(20).label("Message"),
})
