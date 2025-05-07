import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";

function CreateAssignmentPage() {
  const [formData, setFormData] = useState([
    {
      title: "",
      question: "",
    },
  ]);

  const [testConfig, setTestConfig] = useState({
    testTitle: "",
    duration: "",
  })


  const handleConfigChange =(field,value) =>{
    setTestConfig((prev)=>({
      ...prev,[field]:value,
    }));
  }
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [name]: value,  
            }
          : item
      )
    );
  };

  const handleAddQuestion = () => {
    setFormData((prev) => [
      ...prev,
      {
        title: "",
        question: "",
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setFormData((prev) => prev.filter((_, i) => i !== index));
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
      })),
    };
    console.log("Final test data:", finalTestData);
  };

  return (
    <div className="flex px-30 mt-20 animate-fade-in">
      <form onSubmit={handleSubmit}>
        {formData.map((item, index) => (
          <div key={index} className="mb-4 w-[50vw]">
            <div tabIndex={0} className="collapse collapse-open collapse-arrow border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-lg font-bold flex justify-between items-center">
                <span>Question {index + 1}</span>
                {/* Remove Button */}
                {formData.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveQuestion(index)}
                    className="btn btn-sm btn-error"
                  >
                    <IoTrash />
                    Remove
                  </button>
                )}
              </div>
              <div className="collapse-content flex flex-col">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={item.title}
                  onChange={(e) => handleChange(index, e)}
                  className="input input-md w-[30vw] mb-2"
                />
                <textarea
                  name="question"
                  placeholder="Question"
                  value={item.question}
                  onChange={(e) => handleChange(index, e)}
                  className="textarea textarea-md w-[45vw] h-[30vh] resize-none mb-2"
                />
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
            🚀 Submit
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
}

export default CreateAssignmentPage;
