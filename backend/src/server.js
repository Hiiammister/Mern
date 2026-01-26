import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();


const app=express();
const PORT=process.env.PORT || 5001
connectDB();
//middleware
app.use(express.json());
app.use("/api/notes/", notesRoutes);

app.listen(PORT,()=> {
    console.log("server started on port:", PORT);
} );

//dkdFp0kLBP1b8XHA
//mongodb+srv://adityaanother1_db_user:dkdFp0kLBP1b8XHA@cluster0.lzbe8be.mongodb.net/?appName=Cluster0