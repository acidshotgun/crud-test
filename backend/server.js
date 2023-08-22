import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import postRoutes from "./routes/post-routes.js";

const app = express();

// Connect to Mongo DB.
mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log("Connected to DataBase"))
  .catch((error) => console.log(error));

// Listen to server.
app.listen(process.env.PORT, "localhost", (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at ${process.env.PORT} port...`);
});

// ПОДРОБНЕЕ - НЕ ЯСНО ;(
app.use(express.urlencoded({ extended: false }));
// Для запросов между локальными доменами CORS - политика...
app.use(cors());

// В req.body попадал пустой объект
// Этот middleware преобразует полученные данный в JSON
// анализирует строку JSON, поступающую в теле запроса, и преобразует ее в объект JavaScrip
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

// Middleware обработки постов
app.use(postRoutes);

// Middleware отлавливает ошибки
app.use((req, res) => {
  res.status(400);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
