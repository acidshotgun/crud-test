import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { string, object } from "yup";
import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
// Тип
import IPost from "../../types/post";
// Хук (достаем отправка)
import usePostServices from "../../services/PostService";
// Стили
import styles from "./post-form.module.scss";

const PostForm = () => {
  const { postId } = useParams();
  const { addPost, getOnePost, editPost } = usePostServices();

  const [initialValues, setInitialValues] = useState<IPost>({
    author: "",
    title: "",
    text: "",
  });

  useEffect(() => {
    if (postId) {
      getOnePost(postId).then((res) => {
        setInitialValues(res);
      });
    }
  }, [postId]);

  const handleSubmit = (value: IPost, { resetForm }: FormikHelpers<IPost>) => {
    if (postId) {
      editPost(postId, value);
      setInitialValues(value);
    } else {
      addPost(value);
    }
    resetForm();
  };

  return (
    <Formik
      // enableReinitialize={true} - ппозволит компоненту Formik переинициализировать значения,
      // когда initialValues изменяются, включая асинхронные изменения, вызванные получением данных из getOnePost
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={
        !postId
          ? object({
              author: string()
                .max(15, "Максимум 15 символов")
                .required("Поле обязательно"),
              title: string()
                .max(25, "Максимум 25 символов")
                .required("Поле обязательно"),
              text: string()
                .min(1, "Нужно хоть что-то написать")
                .required("Поле обязательно"),
            })
          : object({
              author: string(),
              title: string(),
              text: string(),
            })
      }
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
              required
            />
            <ErrorMessage name="text" component="div" />
          </div>

          <button type="submit">
            {postId ? "Сохранить изменения" : "Создать пост"}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default PostForm;
