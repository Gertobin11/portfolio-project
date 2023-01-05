import React from "react";
import styles from "../styles/ContactForm.module.css";
import Spinner from "./Spinner";
import { Button} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "*Names must have at least 2 characters")
      .max(100, "*Names can't be longer than 100 characters")
      .required("*Name is required"),
    email: Yup.string()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required"),
    message: Yup.string()
      .min(30, "*Messages must be at least 30 characters long")
      .required("*Message required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        emailjs
          .send(
            process.env.REACT_APP_EMAIL_SERVICE,
            process.env.REACT_APP_EMAIL_TEMPLATE,
            { name: values.name, email: values.email, message: values.message },
            process.env.REACT_APP_EMAIL_USER
          )
          .then(
            (result) => {
              resetForm();
              setSubmitting(false);
              toast.success(`${values.name} your message has been successfully sent`);
              console.log(result);
            },
            (error) => {
                toast.error(`{${values.name}, sorry but an error occurred, please try again}`)
              console.log(error.text);
            }
          );
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} className={styles.form}>
          {isSubmitting ? (
            <h3 className={styles["title-text"]}>Form is sending...</h3>
          ) : (
            <h3 className={styles["title-text"]}>
              Please fill in the form below
            </h3>
          )}
          {isSubmitting ? (
            <Spinner />
          ) : (
            <>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label visuallyHidden>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={touched.name && errors.name ? styles.error : null}
                />
                {touched.name && errors.name ? (
                  <div className={styles["error-message"]}>{errors.name}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label visuallyHidden>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.name && errors.email ? styles.error : null}
                />
                <div className={styles["error-message"]}>{errors.email}</div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label visuallyHidden>Your Message</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  className={
                    touched.name && errors.message ? styles.error : null
                  }
                />
                <div className={styles["error-message"]}>{errors.message}</div>
              </Form.Group>
              <Button
                className={styles.submit}
                type="submit"
                disabled={isSubmitting}
              >
                Submit message
              </Button>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
