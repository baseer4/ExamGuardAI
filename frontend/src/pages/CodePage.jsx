import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";

function QuestionForm() {
  const [formData, setFormData] = useState([
    {
      title: "",
      question: "",
      testcasefile: null,
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value, files } = e.target;
    setFormData((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [name]: name === "testcasefile" ? files[0] : value,
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
        testcasefile: null,
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setFormData((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    formData.forEach((entry, index) => {
      data.append(`title_${index}`, entry.title);
      data.append(`question_${index}`, entry.question);
      data.append(`testcasefile_${index}`, entry.testcasefile);
    });

    console.log("Submitted formData:", formData);
  };

  return (
    <div className="flex px-30 mt-20">
      <form onSubmit={handleSubmit}>
        {formData.map((item, index) => (
          <div key={index} className="mb-4 w-[50vw]">
            <div tabIndex={-1} className="collapse collapse-open collapse-arrow border border-base-300 bg-base-100 rounded-box">
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
                <div>
                  <p>Upload testcases</p>
                  <input
                    type="file"
                    name="testcasefile"
                    onChange={(e) => handleChange(index, e)}
                    className="file-input mt-2"
                  />
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
            🚀 Submit
          </button>
        </div>
      </form>

      <div className="flex flex-col mt-5 gap-2 mx-[5rem] ">
        <p className="text-xl font-semibold underline underline-offset-2 ">Configuration:</p>
        <p>Select Type of Test</p>
        <select className="select select-md w-sm sm:w-[15vw]">
          <option value="">Select an option</option>
          <option value="1">Coding problem</option>
        </select>
        <div>
    
          <p>Test duration:</p>
          <select className="select select-md mt-2 w-sm sm:w-[15vw]">
          <option value="">Select an option</option>
          <option value="1">30 min</option>
          <option value="1">1 hour</option>
          <option value="1">1:30 hour</option>
          <option value="1">2:00 hours</option>

        </select>
        {/* can add marks section */}
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
