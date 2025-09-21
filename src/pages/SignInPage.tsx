import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const SignInPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'learner' | 'instructor'>('learner');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', { ...formData, userType: activeTab });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <i className="bi bi-car-front text-white text-2xl"></i>
            </div>
            <span className="text-2xl font-bold text-primary-900">DriveConnect UK</span>
          </Link>
          <h2 className="text-3xl font-bold text-primary-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Tab Selection */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setActiveTab('learner')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'learner'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <i className="bi bi-person mr-2"></i>
              Learner Driver
            </button>
            <button
              onClick={() => setActiveTab('instructor')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'instructor'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <i className="bi bi-person-badge mr-2"></i>
              Instructor
            </button>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-primary-600 hover:text-primary-500">
                Forgot password?
              </a>
            </div>

            <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:bg-gradient-primary-hover">
              <i className="bi bi-box-arrow-in-right mr-2"></i>
              Sign In as {activeTab === 'learner' ? 'Learner' : 'Instructor'}
            </Button>
          </form>

          {/* Sign Up Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              {activeTab === 'learner' ? (
                <Link to="/learner-signup" className="text-primary-600 hover:text-primary-500 font-medium">
                  Sign up as Learner
                </Link>
              ) : (
                <Link to="/instructor-signup" className="text-primary-600 hover:text-primary-500 font-medium">
                  Sign up as Instructor
                </Link>
              )}
            </p>
          </div>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Sign In */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <i className="bi bi-google text-lg"></i>
            </button>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <i className="bi bi-facebook text-lg"></i>
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/" className="text-primary-600 hover:text-primary-500 font-medium">
            <i className="bi bi-arrow-left mr-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
