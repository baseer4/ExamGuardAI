import { React, useState } from 'react';
import { GoEye } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import { useAuthStore } from '../store/useAuthStore';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200/10 px-4 pt-18">
      <div className="w-full max-w-[440px]">
        <div className="bg-base-100 border border-base-300 rounded-3xl shadow-xl p-8 md:p-10">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-base-content tracking-tight">
              Welcome Back
            </h1>
            <p className="text-base-content/60 mt-2 font-medium">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text font-bold text-xs uppercase tracking-widest text-base-content/70">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                className="input input-bordered w-full bg-base-200/50 border-base-300 focus:border-primary focus:ring-0 transition-all duration-200"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control w-full">
              <div className="flex justify-between items-end mb-1">
                <label className="label py-0">
                  <span className="label-text font-bold text-xs uppercase tracking-widest text-base-content/70">
                    Password
                  </span>
                </label>
                <Link to="/forgot-password" size="sm" className="text-xs text-primary hover:underline font-semibold">
                  Forgot?
                </Link>
              </div>
              
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-base-200/50 border-base-300 focus:border-primary focus:ring-0 transition-all duration-200 pr-12"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-base-content/40 hover:text-primary transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash size={20} /> : <GoEye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full h-12 normal-case text-base font-bold shadow-md hover:shadow-lg transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-base-300"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-tighter">
              <span className="px-4 bg-base-100 text-base-content/40 font-bold">Or continue with</span>
            </div>
          </div>

          {/* Footer Link */}
          <p className="text-center text-sm text-base-content/60 font-medium">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary font-bold hover:text-primary-focus transition-colors">
              Create an account
            </Link>
          </p>
        </div>

        <p className="text-center mt-8 text-xs text-base-content/40">
          © 2026 Proctoring Systems. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;