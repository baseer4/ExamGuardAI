import Exam from "../models/exam.model.js"
import User from "../models/users.model.js";
import Submit from "../models/submit.model.js"

export const test =async (req,res) => {
    try {
        const creatorId = req.user._id;
        const {testTitle,type,duration,questions} =req.body;
    
        if(!Array.isArray(questions) || questions.length ===0){
            return res.status(400).json({message:"Test must have atleast one Question"});
        }
    
        const user = await User.findById(creatorId);
        if(!user) {
            return res.status(404).json({message:"user not found"});
    
        }
        const exam = new Exam({
            testTitle,
            type,
            creator:creatorId,
            duration,
            questions,
        });
    
        await exam.save();
    
        const joinLink = `http://localhost:3000/join/${exam._id}`;
    
        res.status(201).json({message:"Test created succesfully", joinLink})
    } catch (error) {
        console.log(error)
    }
}  

export const isTestValid = async (req, res) => {
  try {
    const testId = req.params.id;
    const userId = req.user.id;

    const existingSubmission = await Submit.findOne({
      userId: userId.toString(),
      testId: testId.toString(),

    });

    if (existingSubmission && existingSubmission.status === "completed") {
  return res.status(400).json({ message: "You have already submitted this test." });
}

    const test = await Exam.findById(testId);
    if (!test) {
      return res.status(404).json({ message: "Oops! We couldn’t find that test. Make sure you have the correct link. :(" });
    }

    const expiresAt = new Date(test.createdAt.getTime() + test.duration * 60 * 1000);
    if (new Date() > expiresAt) {
      return res.status(403).json({ message: "Time's up! The test has expired." });
    }
    if (!existingSubmission) {
      const attempt = new Submit({
        userId,
        testId,
        status: "attempting",
        answers: [], // initially empty
      });
      await attempt.save();
    }

    res.status(200).json(test);
  } catch (error) {
    console.error("Validation error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getTestQuestions = async(req,res) =>{
    try {
        const {id} =req.params;
        const test = await Exam.findById(id);

        if(!test){
            return res.status(404).json({message:"test not found"})
        }

        res.status(200).json(test)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}