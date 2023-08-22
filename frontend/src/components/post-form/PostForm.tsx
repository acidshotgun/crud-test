import { Formik, Form, Field, ErrorMessage } from "formik";
import { string, object } from "yup";

import usePostServices from "../../services/PostService";

const PostForm = () => {
  const { addPost } = usePostServices();

  return (
    <Formik
      initialValues={{
        author: "",
        title: "",
        text: "",
      }}
      validationSchema={object({
        author: string()
          .max(7, "Максимум 7 символов")
          .required("Поле обязательно"),
        title: string()
          .max(7, "Максимум 7 символов")
          .required("Поле обязательно"),
        text: string()
          .min(1, "Нужно хоть что-то написать")
          .required("Поле обязательно"),
      })}
      onSubmit={(value) => addPost(value)}
    >
      <Form>
        <label htmlFor="author">Автор</label>
        <Field id="author" name="author" type="text" />
        <ErrorMessage name="author" component="div" />

        <label htmlFor="title">Заголовок</label>
        <Field id="title" name="title" type="text" />
        <ErrorMessage name="title" component="div" />

        <label htmlFor="text">Текст</label>
        <Field id="text" name="text" type="text" />
        <ErrorMessage name="text" component="div" />

        <button type="submit">Создать пост</button>
      </Form>
    </Formik>
  );
};

export default PostForm;
