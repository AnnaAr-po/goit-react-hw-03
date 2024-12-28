import css from './ContactForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 20 символів')
      .required("Це поле обов'язкове!"),
    number: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЄєІіЇїҐґ]+$/, 'Це поле може містити тільки літери')
      .required("Це поле обов'язкове!"),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      {() => (
        <Form className={css.form}>
          <label>
            Name
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
          <label>
            Number
            <Field type="text" name="number" className={css.input} />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>
          <button type="submit" className={css.button}>Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;