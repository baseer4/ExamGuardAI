import { React, useState } from "react";
import { IoAdd } from "react-icons/io5";

const CreateMcqPage = () => {
  const [formData, setFormData] = useState([
    {
      title: "",
      question: "",
      options: ["", "", "", ""],
      correctAnsIndex: 0,
    },
  ]);

  const [testConfig, setTestConfig] = useState({
    testTitle: "",
    duration: "",
  });

  const handleConfigChange = (field, value) => {
    setTestConfig((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleChange = (index, field, value) => {
    const tempFormData = [...formData];
    tempFormData[index][field] = value;
    setFormData(tempFormData);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const tempFormData = [...formData];
    tempFormData[qIndex].options[optIndex] = value;
    setFormData(tempFormData);
  };

  const handleCorrectAnsChange = (qIndex, value) => {
    const tempFormData = [...formData];
    tempFormData[qIndex].correctAnsIndex = parseInt(value);
    setFormData(tempFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalTestData = {
      testTitle: testConfig.testTitle,
      duration:testConfig.duration,

      questions: formData.map((question) => ({
        type: question.type,
        title: question.title,
        question: question.question,
        options: question.options,
        correctAnsIndex: question.correctAnsIndex,
      })),
    };
    console.log("Final test data:", finalTestData);
  };

  const handleAddQuestion = () => {
    setFormData((prev) => [
      ...prev,
      {
        title: "",
        question: "",
        options: ["", "", "", ""],
        correctAnsIndex: 0,
      },
    ]);
  };

  return (
    <div className="flex px-30 mt-20 animate-fade-in">
      <form onSubmit={handleSubmit}>
        {formData.map((item, index) => (
          <div key={index} className="mb-4 w-[50vw]">
            <div
              tabIndex={-1}
              className="collapse collapse-open collapse-arrow border border-base-300 bg-base-100 rounded-box overflow-x-auto"
            >
              <div className="collapse-title text-lg flex  flex-col justify-between gap-5">
                <h3 className="font-bold">Question {index + 1}</h3>
                <div className="flex flex-col">
                  {/* <label className="font-semibold mb-1">Title:</label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                    className="input mb-4"
                  /> */}

                  <label className="font-semibold mb-1">Question:</label>
                  <textarea
                    value={item.question}
                    onChange={(e) =>
                      handleChange(index, "question", e.target.value)
                    }
                    className="resize-none textarea w-3xl h-40"
                  />

                  <div className="mt-2">
                    <label className="font-medium mb-3 block">Options:</label>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {item.options.map((opt, optIndex) => (
                        <div key={optIndex} className="flex items-center gap-2">
                          <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
                            {optIndex + 1}
                          </div>
                          <input
                            type="text"
                            placeholder={`Option ${optIndex + 1}`}
                            value={opt}
                            onChange={(e) =>
                              handleOptionChange(
                                index,
                                optIndex,
                                e.target.value
                              )
                            }
                            className="input input-bordered flex-1"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-2">
                      <label className="text-md">
                        Correct Answer:
                        <select
                          value={item.correctAnsIndex}
                          onChange={(e) =>
                            handleCorrectAnsChange(index, e.target.value)
                          }
                          className="select select-md select-ghost"
                        >
                          {item.options.map((_, i) => (
                            <option key={i} value={i} className="p-4">
                              Option {i + 1}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-end space-y-4 mt-4">
          <button
            type="button"
            onClick={handleAddQuestion}
            className="btn btn-secondary flex items-center gap-2"
          >
            <IoAdd />
            Add Another Question
          </button>

          <button type="submit" className="btn btn-neutral mb-5">
            Submit
          </button>
        </div>
      </form>
      <div className="flex flex-col mt-5 gap-4 mx-[5rem]">
        <p className="text-xl font-semibold underline underline-offset-2">
          Configuration:
        </p>

        <div className="flex flex-col">
          <label className="font-semibold">Test Title:</label>
          <input
            type="text"
            value={testConfig.testTitle}
            onChange={(e) => handleConfigChange("testTitle", e.target.value)}
            className="input input-bordered w-sm sm:w-[15vw]"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Test Duration:</label>
          <select
            value={testConfig.duration}
            onChange={(e) => handleConfigChange("duration", e.target.value)}
            className="select select-md mt-2 w-sm sm:w-[15vw]"
          >
            <option value="">Select duration</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1 hour 30 minutes</option>
            <option value="120">2 hours</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CreateMcqPage;
