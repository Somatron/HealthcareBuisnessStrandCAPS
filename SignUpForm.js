import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const formik = useFormik({
  initialValues:{
    username:"",
    firstname:"",
    lastname:"",
    email:"",
  }, //basically all of these variables are set to whatever the user imports it

  onSubmit:(values)=> { //we see the values we have assigned
  //http request
  console.log(values); //and this will display when he look at console log
  },
  //validations
  validationSchema: Yup.object({
    username: Yup.string()
    .max(20, "Should be 20 characters or less")
    .required("Username is required"),
    firstname: Yup.string()
    .min(3, "Should be 3 characters or more")
    .required("First Name is required"),
    lastname: Yup.string()
    .required("Last Name is required"),
    email: Yup.string()
    .min(8, "Should be 8 characters or more")
    .required("Email is required"),
  })
});

  return (
    <div className="form-container">
      <h1 className="form-heading">Sign Up</h1>
      <p className="form-description">
        Please create an account to start applying forms for your vaccination profile. 
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-field">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input 
          name="username"
          onChange={formik.handleChange} //looks for user ids attribute
          value={formik.values.username} //we need username the user must provide
          onBlue={formik.handleBlur} //css style
          type="text" 
          className="form-input" />
          {/* Error Message */}
          {formik.touched.username && formik.errors.username ? (
          <div className="Form-error">{formik.errors.username}</div>
        ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
          name="firstname" 
          onChange={formik.handleChange} //does the same crap as the other input above
          value={formik.values.firstname}
          onBlue={formik.handleBlur}
          id="firstName" 
          type="text" 
          className="form-input" />
          {/* Error Message */}
          {formik.touched.firstname && formik.errors.firstname ? (
          <div className="Form-error">{formik.errors.firstname}</div>
        ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input 
          name="lastname" 
          onChange={formik.handleChange} //does the same crap as the other input above
          value={formik.values.lastname}
          onBlue={formik.handleBlur}
          id="lastName" 
          type="text" 
          className="form-input" />
          {/* Error Message */}
          {formik.touched.lastname && formik.errors.lastname ? (
          <div className="Form-error">{formik.errors.lastname}</div>
        ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input 
            name="email" 
            onChange={formik.handleChange} //does the same crap as the other input above
            value={formik.values.email}
            onBlue={formik.handleBlur}
            id="email" 
            type="email" 
            className="form-input" />
            {/* Error Message */}
            {formik.touched.email && formik.errors.email ? (
            <div className="Form-error">{formik.errors.email}</div>
        ) : null}
        </div>

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;