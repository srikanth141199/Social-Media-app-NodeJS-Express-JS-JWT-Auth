import express from 'express';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import multer from "multer";
import methodOverride from 'method-override';

import loggerMiddleware from './src/middlewares/logger.middleware.js';

import userRouter from './src/routes/user.routes.js';
import postsRouter from './src/routes/posts.routes.js';
import commentsRouter from './src/routes/comments.routes.js';
import likesRouter from './src/routes/likes.routes.js';
import { ApplicationError } from './src/error-handler/applicationError.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import UserController from './src/controllers/user.controller.js';



const app = express();
app.use(methodOverride('_method'));
app.use(loggerMiddleware)
//Controllers

const userController = new UserController();
//in-built middlewares

app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(cookieParser());
app.use(
  session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set(
  'views',
  path.join(path.resolve(), 'src', 'views')
);

app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.get("/", userController.getHome);
app.use("/api/user", userRouter);
app.use("/api/posts",jwtAuth, postsRouter);
app.use("/api/comments",jwtAuth, commentsRouter);
app.use("/api/likes",jwtAuth, likesRouter);

// Error handler middleware
app.use((err, req, res, next)=>{
  console.log(err);
  if (err instanceof ApplicationError){
    res.status(err.code).send(err.message);
  }

  // server errors.
  res
  .status(500)
  .send(
    'Something went wrong, please try later'
    );
});

// 4. Middleware to handle 404 requests.
app.use((req, res)=>{
  res.status(404).send("API not found")
});


//Server
app.listen(5100, () => {
    console.log('Server is running on port 5100');
  });