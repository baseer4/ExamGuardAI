import React from 'react';
import coding from "../assets/images/coding.svg";
import mcq from "../assets/images/mcq.svg"
import writing from "../assets/images/writing.svg"
import { useNavigate } from 'react-router-dom';


const CreatePage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-6rem)] gap-6 animate-fade-in">
        <div className="card bg-base-100 w-80 shadow-sm border-2 h-[400px]">
            <figure className="px-10 pt-10">
            <img
                src={mcq}
                alt="multiple choice questions"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">MCQ's</h2>
            <p>Create or take timed multiple-choice quizzes with automatic evaluation and AI proctoring.</p>
            <div className="card-actions">
                <button className="btn btn-primary hover:animate-fade-in-scale " onClick={() => navigate("/create/mcq")}>Select</button>
            </div>
            </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm border-2 h-[400px]">
            <figure className="px-10 pt-10">
            <img
                src={writing}
                alt="Writing"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Assignment</h2>
            <p>Create essay-style questions or written tasks where students can explain concepts in detail and upload answers.</p>
            <div className="card-actions">
                <button className="btn btn-primary hover:animate-fade-in-scale" onClick={() => navigate("/create/assignment")}>Select</button>
            </div>
            </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm border-2 h-[400px] ">
            <figure className="px-10 pt-10">
            <img
                src={coding}
                alt="Coding"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center ">
            <h2 className="card-title mt-5">Coding</h2>
            <p>Launch hands-on coding tests with real-time tracking, auto-evaluation, and support for multiple languages.</p>
            <div className="card-actions">
                <button className="btn btn-primary hover:animate-fade-in-scale" onClick={() => navigate("/create/code")}>Select</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePage