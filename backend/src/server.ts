import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import routes from "@/routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
  app.use("/api/v1", routes);
  app.listen(process.env.PORT || 5000, () => {
    console.log(
      `Server listening on port ${
        process.env.PORT || 5000
      }...  http://localhost:${process.env.PORT || 5000}`
    );
  });
} else {
  app.use("/api/v1", routes);
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}...`);
  });
}