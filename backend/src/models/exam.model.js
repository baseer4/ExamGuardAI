import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
        question:String,
        options:[String], // MCQ only
        correctAnsIndex:String, //MCQ only
    }
);


const examSchema = new mongoose.Schema(
    {
        testTitle:{
            type:String,
            required:true,
        },
        creator:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
        duration:{
            type:Number,
            required:true,
        },
        type:{
            type:String,
            required:true,
            enum:["MCQ" ,"Assignment"],
        },
        questions:[questionSchema],
    },
    {timestamps:true}
)


const Exam =mongoose.model("exam",examSchema);

export default Exam;