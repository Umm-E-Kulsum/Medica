import Express from "express";
import http from "http";
import cors from "cors";
import { Server, Socket } from "socket.io";
import dotenv from "dotenv";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import authRoute from "./Routes/Forum/auth.js";
import userRoute from "./Routes/Forum/users.js";
import postRoute from "./Routes/Forum/posts.js";
import categoryRoute from "./Routes/Forum/categories.js";

const app = Express();
const server = http.createServer(app);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Environment variables
const PORT = process.env.PORT || 5000;

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

dotenv.config();
app.use(Express.json());
app.use("/images", Express.static(path.join(__dirname, "/images")));

mongoose
  .connect(
    process.env.MONGO_URL ||
      "mongodb+srv://daku:12345@cluster0.h5teq.mongodb.net/daku?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  )
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

app.get("/", (req, res) => {
  res.send("Running");
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

server.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
});
