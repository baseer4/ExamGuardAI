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
    if (existingSubmission) {
      return res.status(400).json({ message: "You have already submitted this test." });
    }
    const submission = new Submit({
      testId,
      userId,
      answers,
      status:"completed"
    });

    await submission.save();

    res.status(201).json({ message: "Test submitted successfully", submission });
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
    if (existingSubmission) {
      return res.status(400).json({ message: "You have already submitted this test." });
    }

    // ✅ Fetch the exam to get questions and correct answers
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

    const submission = new Submit({
      testId,
      userId,
      answers,
      status: "completed",
    });

    await submission.save();

    const resultData = {
      message: "MCQ Test submitted successfully.",
      score: correct,
      total: exam.questions.length,
      breakdown: { correct, wrong, notAttempted },
      detailedResults,
    };

    console.log("Result JSON Response:", resultData);
    res.status(201).json(resultData);

  } catch (err) {
    console.error("MCQ submission error:", err);
    res.status(500).json({ message: "Server error while submitting MCQ test." });
  }
};

