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

const resultSchema = new mongoose.Schema({
  score: Number,
  total: Number,
  breakdown: {
    correct: Number,
    wrong: Number,
    notAttempted: Number,
  },
  status: {
    type: String,
    enum: ["evaluated", "not_evaluated"],
    default: "not_evaluated"
  }
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
        status: {
            type: String,
            enum: ["attempting", "completed"],
            default: "attempting"
        },
        answers:[answerSchema],
        result: {
      type: resultSchema,
      default: undefined, 
    },

    },
    {timestamps:true}
);


const Submit = mongoose.models.Submit || mongoose.model("Submit", submitSchema);
export default Submit;