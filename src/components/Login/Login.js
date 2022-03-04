import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();

  const handleValidation = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email can't be empty";
    }

    if (values.password.length < 8) {
      errors.password = "Password should be at least 8 characters";
    }
    return errors;
  };

  const handleSubmit = (values, actions) => {
    setUser(values.email);
    navigate("/");
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={handleValidation}
        onSubmit={handleSubmit}
      >
        {() => (
          <>
            <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div
                      className="card shadow-2-strong"
                      style={{ borderRadius: "1rem" }}
                    >
                      <div className="card-body p-5 text-center">
                        <h3 className="mb-5">Sign in</h3>

                        <Form>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="typeEmailX-2"
                            >
                              Email
                            </label>
                            <Field
                              name="email"
                              type="email"
                              id="typeEmailX-2"
                              className="form-control form-control-lg"
                            />

                            <ErrorMessage name="email">
                              {(error) => (
                                <label className="error">{error}</label>
                              )}
                            </ErrorMessage>
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="typePasswordX-2"
                            >
                              Password
                            </label>
                            <Field
                              name="password"
                              id="typePasswordX-2"
                              type="password"
                              className="form-control form-control-lg"
                            />

                            <ErrorMessage name="password">
                              {(error) => (
                                <label className="error">{error}</label>
                              )}
                            </ErrorMessage>
                          </div>
                          <button
                            className="btn btn-primary btn-lg btn-block"
                            type="submit"
                          >
                            {" "}
                            Log in{" "}
                          </button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </Formik>
    </>
  );
};

export default Login;
