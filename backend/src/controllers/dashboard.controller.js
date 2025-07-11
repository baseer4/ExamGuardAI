import Exam from "../models/exam.model.js";
import Submit from "../models/submit.model.js";

export const dashboard = async (req, res) => {
  try {
    const userId = req.user._id;

    const exams = await Exam.find({ creator: userId }).lean();

    const dashboardData = await Promise.all(
      exams.map(async (exam) => {
        const submissions = await Submit.find({ testId: exam._id }).populate("userId", "email");

        const completedSubs = submissions.filter((s) => s.status === "completed"); 


        const attempting = submissions
        .filter((s) => s.status === "attempting")
        .map((s) => s.userId?.email)
        .filter(Boolean); // removes any null/undefined in case populate fails

        const completed = completedSubs.map((s) => ({
          email: s.userId?.email,
          breakdown: s.result?.breakdown || {},
        }));

          
        return {
          name: exam.testTitle,
          createdAt: exam.createdAt.toISOString().split("T")[0],
          duration: `${exam.duration} mins`,
          total: exam.questions.length,
          completed,
          attempting,
          link: `https://securetest.app/join/${exam._id}`
        };
      })
    );
    console.log('Total exams for user:', exams.length);

    res.status(200).json(dashboardData);
  } catch (err) {
    console.error("Dashboard fetch error:", err);
    res.status(500).json({ message: "Error fetching dashboard data" });
  }
};
