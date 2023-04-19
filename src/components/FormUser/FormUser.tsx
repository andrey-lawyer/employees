import { Formik, Form, Field, ErrorMessage } from "formik";

import "./formUser.scss";

import { schema } from "../../services/validation";
import { onSubmitUser } from "../../services/submitForm";
import { onChangeUser } from "../../services/uploadImageForm";
import { ListPositions } from "./ListPositions";

import { IActions, IValue } from "../../types/typesForForm";
import { IFormProps } from "../../types/typesProps";
import { useForm } from "../../hooks/useForm";

export const FormUser: React.FC<IFormProps> = ({
  toggleUser,
  setPage,
  setLoading,
}) => {
  const {
    setNameImage,
    setSuccessSignUp,
    successSignUp,
    inputBase,
    uploadFile,
    nameFile,
    nameImage,
    buttonBase,
  } = useForm();
  return (
    <section id="registration" className="section-task section-form">
      <h2 className="title-form">Working with POST request</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          position_id: "1",
          photo: null,
        }}
        validationSchema={schema}
        onSubmit={(values: IValue, actions: IActions) =>
          onSubmitUser(
            values,
            toggleUser,
            setPage,
            setNameImage,
            setSuccessSignUp,
            actions,
            setLoading
          )
        }
      >
        {({ values, errors, touched, setFieldValue }) => {
          const { email, name, phone, photo } = values;
          const notEmpty = email || name || phone || photo;
          const isError =
            errors.name || errors.email || errors.photo || errors.phone;

          const onEnabled = email && name && phone && photo && !isError;
          return (
            <>
              <Form className="block-form ">
                <label className="block-form_label">
                  <Field
                    className={
                      errors.name && touched.name
                        ? inputBase + " error"
                        : inputBase + " success"
                    }
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                  {(!errors.name || !touched.name) && (
                    <span className="message message_success ">John</span>
                  )}
                  <ErrorMessage
                    className="message message_error"
                    name="name"
                    component="div"
                  />
                </label>
                <label className="block-form_label">
                  <Field
                    className={
                      errors.email && touched.email
                        ? inputBase + " error"
                        : inputBase + " success"
                    }
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  {(!errors.email || !touched.email) && (
                    <span className="message message_success">
                      jhon@example.com
                    </span>
                  )}
                  <ErrorMessage
                    className="message message_error"
                    name="email"
                    component="div"
                  />
                </label>
                <label className="block-form_label">
                  <Field
                    className={
                      errors.phone && touched.phone
                        ? inputBase + " error"
                        : inputBase + " success"
                    }
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                  />
                  {(!errors.phone || !touched.phone) && (
                    <span className="message message_success">
                      +38 (XXX) XXX - XX - XX
                    </span>
                  )}
                  <ErrorMessage
                    className="message message_error"
                    name="phone"
                    component="div"
                  />
                </label>
                <div id="my-radio-group" aria-labelledby="my-radio-group">
                  <ListPositions setLoading={setLoading} />
                </div>
                <label
                  htmlFor="photo"
                  className="label-file paragraph block-form_label "
                >
                  <span
                    className={
                      errors.photo && nameImage
                        ? uploadFile + " error-one"
                        : uploadFile + " success-one"
                    }
                  >
                    Upload
                  </span>
                  <span
                    className={
                      errors.photo && nameImage
                        ? nameFile + " error-two"
                        : nameFile + " success-two"
                    }
                  >
                    {nameImage ? nameImage : "Upload your photo"}
                  </span>
                  {errors.photo && nameImage && (
                    <div className="message_photo message_error">
                      {errors.photo}
                    </div>
                  )}
                </label>
                <input
                  className="input-file"
                  id="photo"
                  name="photo"
                  type="file"
                  onChange={(event): void => {
                    onChangeUser(event, setFieldValue, setNameImage);
                  }}
                />
                <button
                  disabled={!onEnabled}
                  className={
                    onEnabled ? buttonBase + " enable" : buttonBase + " disable"
                  }
                  type="submit"
                >
                  Sign Up
                </button>
              </Form>
              {successSignUp && !notEmpty && !isError && (
                <div className="success-field">
                  <p className="title">User successfully registered</p>
                  <div className="success-field_image"> </div>
                </div>
              )}
            </>
          );
        }}
      </Formik>
    </section>
  );
};
