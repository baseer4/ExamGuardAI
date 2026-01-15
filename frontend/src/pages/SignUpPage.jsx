import { React, useState } from "react";
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore.js";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 8)
      return toast.error("Password must be at least 8 characters");
    return true;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) signup(formData)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200/10 px-4 pt-16">
      <div className="w-full max-w-[480px]">
        <div className="bg-base-100 border border-base-300 rounded-3xl shadow-xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-base-content tracking-tight">
              Create Account
            </h1>
            <p className="text-base-content/60 mt-2 font-medium">
              Join us. It only takes a moment.{" "}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-bold text-xs uppercase tracking-widest text-base-content/70">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                className="input input-bordered w-full bg-base-200/50 border-base-300 focus:border-primary focus:ring-0 transition-all"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-bold text-xs uppercase tracking-widest text-base-content/70">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full bg-base-200/50 border-base-300 focus:border-primary focus:ring-0 transition-all"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-bold text-xs uppercase tracking-widest text-base-content/70">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-base-200/50 border-base-300 focus:border-primary focus:ring-0 transition-all pr-12"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-base-content/40 hover:text-primary transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={20} />
                  ) : (
                    <GoEye size={20} />
                  )}
                </button>
              </div>
              <label className="label">
                <span className="label-text-alt text-base-content/50 font-medium">
                  Must be at least 8 characters
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full h-12 mt-2 normal-case text-base font-bold shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-base-300"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-tighter">
              <span className="px-4 bg-base-100 text-base-content/40 font-bold">
                Or
              </span>
            </div>
          </div>

          <p className="text-center text-sm text-base-content/60 font-medium">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-bold hover:text-primary-focus transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
