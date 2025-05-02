import {React,useState} from "react";
import ListQuestions from "../components/ListQuestions";


const AssignmentPage = () => {

    const [questions, setQuestions] = useState([0])
  
    const [formData, setFormData] = useState([{
      title:"",
      question:"",
      testcasefile:null,
    },
    ])//array cos multiple questions
  
    const handleChanges =(e) =>{
      const{name,value} =e.target;
      setFormData((prevData)=> ({
        ...prevData,[name]:value,
      }))
    }
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const data =new FormData();
      data.append("title",formData.title);
      data.append("question",formData.question);
      data.append("testcasefile",formData.testcasefile);
      console.log(formData)
    };
  
    const handleAddQuestions=(e)=>{
      //handle sidebar right
      setQuestions((prev)=>[...prev,prev.length]);
      //handle form
      const{name,value} = e.target;
      setFormData((prevData)=> ({
        ...prevData,[name]:value,
      }))

    }
  
    const handleRemoveQuestions = (idToRemove) => {
      setQuestions((prev) => prev.filter((id) => id !== idToRemove));
    }
  
  
  return (
     
    <div className="flex px-35 mt-20">
      <form onSubmit={handleSubmit} encType="multipart/form-data" >
        <p className="text-lg font-bold">Title:</p>
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChanges}
          placeholder="Enter a title"
          className="input input-md w-[30vw] mt-2"
        />

        <p className="text-lg font-bold mt-4">Enter the question:</p>
        <textarea
          name="question"
          value={formData.question}
          onChange={handleChanges}
          placeholder="..."
          className="textarea textarea-md w-[45vw] h-[30vh] resize-none mt-2"
        ></textarea>

       <div className="flex justify-end">
            <button type="submit" className="btn btn-primary mt-4 px-4 ">submit</button>
       </div>
        
      </form>


      <div className="mx-10 mt-10 ">
        <div className="flex justify-end">
        <button onClick={handleAddQuestions} className="btn btn-primary mb-5 p-5">Add</button>
      </div>

          <div className="flex flex-col gap-2">
          {questions.map((id) =>(
          <ListQuestions key={id} index={id} onRemove={()=>handleRemoveQuestions(id)}/>

        ))}
          </div>
        
      </div>

    </div>
    
  )
}

export default AssignmentPage