import { Formik } from "formik";
import React from "react";

function ContactForm() {
  const initialValues = { name: "", phoneNumber: "", email: "", birthday: "" };
  const handelSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handelSubmit}></Formik>
  );
}

export default ContactForm;
