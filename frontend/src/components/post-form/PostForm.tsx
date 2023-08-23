import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { string, object } from "yup";
// Тип
import IPost from "../../types/post";
// Хук (достаем отправка)
import usePostServices from "../../services/PostService";
// Стили
import styles from "./post-form.module.scss";

const PostForm = () => {
  const { addPost } = usePostServices();

  const handleSubmit = (value: IPost, { resetForm }: FormikHelpers<IPost>) => {
    addPost(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        author: "",
        title: "",
        text: "",
      }}
      validationSchema={object({
        author: string()
          .max(15, "Максимум 15 символов")
          .required("Поле обязательно"),
        title: string()
          .max(25, "Максимум 25 символов")
          .required("Поле обязательно"),
        text: string()
          .min(1, "Нужно хоть что-то написать")
          .required("Поле обязательно"),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.container}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="author">Автор</label>
              <Field
                className={styles.input}
                id="author"
                name="author"
                type="text"
                required
              />
              <ErrorMessage name="author" component="div" />
            </div>

            <div className={styles.field}>
              <label htmlFor="title">Заголовок</label>
              <Field
                className={styles.input}
                id="title"
                name="title"
                type="text"
                required
              />
              <ErrorMessage name="title" component="div" />
            </div>
          </div>

          <div className={styles.text}>
            <label htmlFor="text">Текст</label>
            <Field
              className={styles.textInput}
              id="text"
              name="text"
              type="text"
              component="textarea"
            />
            <ErrorMessage name="text" component="div" />
          </div>

          <button type="submit">Создать пост</button>
        </div>
      </Form>
    </Formik>
  );
};

export default PostForm;
