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
    console.log("user submitted", formData);
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

  console.log("Submitted formData:", formData);
  return (
    <div className="flex px-30 mt-20 animate-fade-in">
      <form onSubmit={handleSubmit}>
        {formData.map((item, index) => (
          <div key={index} className="mb-4 w-[50vw]">
            <div
              tabIndex={-1}
              className="collapse collapse-open collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-lg flex  flex-col justify-between gap-5">
                <h3 className="font-bold">Question {index + 1}</h3>
                <div className="flex flex-col">
                  <label className="font-semibold mb-1">Title:</label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                    className="input mb-4"
                  />

                  <label className="font-semibold mb-1">Question:</label>
                  <textarea
                    value={item.question}
                    onChange={(e) =>
                      handleChange(index, "question", e.target.value)
                    }
                    className="resize-none textarea"
                  />

                  <div>
                    <p>Options:</p>
                    {item.options.map((opt, optIndex) => (
                      <div key={optIndex} className="text-md font-semibold">
                        <input
                          type="text"
                          placeholder={`Option ${optIndex + 1}`}
                          value={opt}
                          onChange={(e) =>
                            handleOptionChange(index, optIndex, e.target.value)
                          }
                        />
                      </div>
                    ))}
                    <label className="text-md">
                      Correct Answer:
                      <select
                        value={item.correctAnsIndex}
                        onChange={(e) => handleCorrectAnsChange(index, e.target.value)}
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

            <button 
              type="submit"
              className="btn btn-neutral mb-5">
              Submit
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
};

export default CreateMcqPage;
