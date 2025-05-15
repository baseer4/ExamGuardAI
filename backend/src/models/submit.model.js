import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    questionId:mongoose.Schema.Types.ObjectId,
    // type:{
    //     type:String,
    //     enum:["MCQ","Assignment"],
    //     required:true,
    // },
    selectedIndex:Number,
    writtenAnswer:String,
});

const submitSchema = new mongoose.Schema(
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


const Submit = mongoose.model("submit",submitSchema);
export default Submit;