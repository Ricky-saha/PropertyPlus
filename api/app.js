import express from 'express';
import cors from 'cors';
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from 'cookie-parser';
import 'dotenv/config';

//----------- calling an express app------
const app = express();

console.log(process.env) // for testing purpose
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());  // Parses JSON bodies

app.use(cookieParser()); // for parsing the cookies

//----------- for testing purpose----------
console.log("testinggg");




//------------- End Points -------------
app.use("/api/auth/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/auth/test", testRoute);
app.use("/api/auth/users", userRoute);
app.use("/api/auth/chats", chatRoute);
app.use("/api/auth/messages", messageRoute);



// --------------------server startup--------------------
app.listen(8800, ()=>{
    console.log("Server is running...");
});


