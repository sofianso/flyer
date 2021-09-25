import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 420,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    padding: theme.spacing(3, 2),
    backgroundColor: "#fafafa",
    borderRadius: 10,
    boxShadow: "0px 0px 10px #00000029",
  },
  container: {
    display: "Flex",
    justifyContent: "center",
  },
  label: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    height: "3rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "0.5rem",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  submitButton: {
    width: "50%",
    height: "3rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "0.5rem",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    backgroundColor: "green",
    color: "white",
  },
  resetButton: {
    width: "50%",
    height: "3rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "0.5rem",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    backgroundColor: "red",
    color: "white",
  },
}));

export const Signup = (props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      // form validation
      let errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords must match";
      }
      return errors;
    },
  });

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            className={classes.input}
            type="text"
            id="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}{" "}
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            className={classes.input}
            type="text"
            id="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            className={classes.input}
            type="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            className={classes.input}
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        <div className="form-control">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className={classes.input}
            type="password"
            id="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
        </div>

        <button className={classes.submitButton} type="submit">
          Signup
        </button>
        <button
          className={classes.resetButton}
          type="reset"
          onClick={formik.handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
};
