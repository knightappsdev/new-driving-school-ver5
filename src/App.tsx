import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InstructorSignupPage from './pages/InstructorSignupPage';
import SignInPage from './pages/SignInPage';
import LearnerSignupPage from './pages/LearnerSignupPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-primary">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instructor-signup" element={<InstructorSignupPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/learner-signup" element={<LearnerSignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
