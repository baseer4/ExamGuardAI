import Exam from "../models/exam.model.js"
import User from "../models/users.model.js";

export const mcq =async (req,res) => {
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

export const isTestValid = async(req,res)=>{
   try {
    const {id}  = req.params;

    const test = await Exam.findById(id);
    if(!test) {
        return res.status(404).json({message: "test not found"});
    }

    const expiresAt = new Date(test.createdAt.getTime()+test.duration * 60 *1000);
    if(new Date() > expiresAt) {
        return res.status(403).json({message:"Times up! the created has been expired :("});
    }  

    res.status(200).json(test);
   } catch (error) {
        console.log(error);
        res.status(500).json({message:"server error"});
   }
};