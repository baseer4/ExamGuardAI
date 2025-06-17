import Exam from "../models/exam.model.js";
import Submit from "../models/submit.model.js"

export const submitAssignment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { testId, answers } = req.body;

    if (!testId || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Missing or invalid fields" });
    }

    const existingSubmission = await Submit.findOne({
      testId: testId.toString(),
      userId: userId.toString(),
    });
    if (!existingSubmission) {
        return res.status(400).json({ message: "You must start the test before submitting." });
      }

      if (existingSubmission.status === "completed") {
        return res.status(400).json({ message: "You have already submitted this test." });
      }

      existingSubmission.answers = answers;
      existingSubmission.status = "completed";
      await existingSubmission.save();

    res.status(201).json({ message: "Test submitted successfully", submission: existingSubmission  });
  } catch (err) {
    console.error("Submission error:", err);
    res.status(500).json({ message: "Server error while submitting test"  });
  }
};


export const submitMCQ = async (req, res) => {
  try {
    const userId = req.user.id;
    const { testId, answers } = req.body;

    if (!testId || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Missing or invalid fields" });
    }

    const existingSubmission = await Submit.findOne({
      testId: testId.toString(),
      userId: userId.toString(),
    });
   if (!existingSubmission) {
  return res.status(400).json({ message: "You must start the test before submitting." });
}

if (existingSubmission.status === "completed") {
  return res.status(400).json({ message: "You have already submitted this test." });
}

const exam = await Exam.findById(testId);
if (!exam) {
  return res.status(404).json({ message: "Exam not found." });
}

let correct = 0;
let wrong = 0;
let notAttempted = 0;

const detailedResults = [];

for (const ans of answers) {
  const question = exam.questions.find(q => q._id.toString() === ans.questionId);
  if (!question) continue;
  
  const selected = ans.selectedIndex;
  
  if (selected === null || selected === undefined) {
    notAttempted++;
    detailedResults.push({
      questionId: ans.questionId,
      result: "not_attempted",
    });
  } else if (String(selected) === question.correctAnsIndex) {
    correct++;
    detailedResults.push({
      questionId: ans.questionId,
      result: "correct",
    });
  } else {
    wrong++;
    detailedResults.push({
      questionId: ans.questionId,
      result: "wrong",
    });
  }
}


  existingSubmission.answers = answers;
  existingSubmission.status = "completed";
  existingSubmission.result = {
    score: correct,
    total: exam.questions.length,
    breakdown: { correct, wrong, notAttempted },
    status: "evaluated",
  };

  await existingSubmission.save();
  res.status(201).json({
      message: "MCQ Test submitted successfully.",
      score: correct,
      total: exam.questions.length,
      breakdown: { correct, wrong, notAttempted },
    });

  } catch (err) {
    console.error("MCQ submission error:", err);
    res.status(500).json({ message: "Server error while submitting MCQ test." });
  }
};

