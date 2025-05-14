import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    questionId:mongoose.Schema.Types.ObjectId,
    type:{
        type:"String",
        enum:["MCQ","Assignment"],
        required:true,
    },
    selectedIndex:Number,
    writtenAnswer:String,
});

const submissionScehma = new mongoose.Schema(
    {
        testId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"exam",
            required:true,
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
        answers:[answerSchema],
    },
    {timestamps:true}
);


const Submission = mongoose.model("submission",submissionScehma);
export default Submission;