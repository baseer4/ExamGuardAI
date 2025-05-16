import Submit from "../models/submit.model.js";

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
    });

    await submission.save();

    res.status(201).json({ message: "Test submitted successfully", submission });
  } catch (err) {
    console.error("Submission error:", err);
    res.status(500).json({ message: "Server error while submitting test"  });
  }
};

export const submitMCQ = (req, res) => {
  // You can implement MCQ-specific submission logic here
};
