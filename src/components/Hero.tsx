import React, { useState, useEffect } from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Find Your Perfect Driving Instructor in the UK',
    'Pass Your Test with Expert Guidance',
    'Learn to Drive with Confidence'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout: number;
    
    timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          window.setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 sm:pt-20 md:pt-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          <div className="text-center lg:text-left flex flex-col justify-center h-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 leading-tight mb-6 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[240px] flex items-center">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Connect with qualified, experienced driving instructors in your area. Pass your test faster with personalized lessons tailored to your learning style.
            </p>
            
            {/* Stats positioned above buttons */}
            <div className="mb-8 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">2,500+</div>
                <div className="text-xs text-gray-600">Qualified Instructors</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">95%</div>
                <div className="text-xs text-gray-600">Pass Rate</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">50,000+</div>
                <div className="text-xs text-gray-600">Happy Students</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:bg-gradient-primary-hover" onClick={() => scrollToSection('instructors')}>
                <i className="bi bi-search mr-2"></i>
                Find Instructors
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => scrollToSection('courses')}>
                <i className="bi bi-calendar-check mr-2"></i>
                Book Lessons
              </Button>
            </div>
          </div>
          
          {/* Realistic Road Scene Animation */}
          <div className="relative flex items-center justify-center h-full min-h-[500px]">
            <div className="relative z-10 bg-gradient-to-b from-blue-200 to-green-200 rounded-2xl shadow-2xl overflow-hidden w-full max-w-md" style={{ height: '450px' }}>
              {/* Sky and background */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-green-100"></div>
              
              {/* Sun */}
              <div className="absolute top-6 right-8 w-8 h-8 bg-yellow-400 rounded-full animate-pulse-gentle shadow-lg"></div>
              
              {/* Clouds */}
              <div className="absolute top-4 left-8 animate-float-slow">
                <div className="flex items-center">
                  <div className="w-6 h-4 bg-white rounded-full opacity-80"></div>
                  <div className="w-8 h-6 bg-white rounded-full opacity-80 -ml-2"></div>
                  <div className="w-6 h-4 bg-white rounded-full opacity-80 -ml-2"></div>
                </div>
              </div>
              <div className="absolute top-8 right-12 animate-float-slow-delay">
                <div className="flex items-center">
                  <div className="w-4 h-3 bg-white rounded-full opacity-60"></div>
                  <div className="w-6 h-4 bg-white rounded-full opacity-60 -ml-1"></div>
                  <div className="w-4 h-3 bg-white rounded-full opacity-60 -ml-1"></div>
                </div>
              </div>
              
              {/* Buildings in background */}
              <div className="absolute bottom-40 left-6">
                <div className="w-8 h-12 bg-gray-500 relative">
                  <div className="w-1 h-1 bg-yellow-300 absolute top-2 left-1"></div>
                  <div className="w-1 h-1 bg-yellow-300 absolute top-2 right-1"></div>
                  <div className="w-1 h-1 bg-yellow-300 absolute top-5 left-1"></div>
                  <div className="w-1 h-1 bg-yellow-300 absolute top-8 right-1"></div>
                </div>
              </div>
              <div className="absolute bottom-36 right-8">
                <div className="w-6 h-16 bg-gray-600 relative">
                  <div className="w-1 h-1 bg-yellow-300 absolute top-2 left-1"></div>
                  <div className="w-1 h-1 bg-yellow-300 absolute top-5 right-1"></div>
                  <div className="w-1 h-1 bg-yellow-300 absolute top-8 left-1"></div>
                </div>
              </div>
              
              {/* Trees */}
              <div className="absolute bottom-32 left-4 animate-sway">
                <div className="w-2 h-8 bg-amber-800"></div>
                <div className="w-6 h-6 bg-green-600 rounded-full -mt-2 -ml-2"></div>
              </div>
              <div className="absolute bottom-32 right-4 animate-sway-delay">
                <div className="w-2 h-6 bg-amber-800"></div>
                <div className="w-5 h-5 bg-green-600 rounded-full -mt-2 -ml-1.5"></div>
              </div>
              
              {/* Traffic Lights */}
              <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-8 bg-gray-800"></div>
                <div className="w-4 h-10 bg-gray-900 rounded -mt-1 -ml-1 relative">
                  <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 left-1 animate-traffic-red"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full absolute top-4 left-1 animate-traffic-yellow"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-7 left-1 animate-traffic-green"></div>
                </div>
              </div>
              
              {/* Street Sign */}
              <div className="absolute bottom-36 left-12">
                <div className="w-1 h-6 bg-gray-700"></div>
                <div className="w-6 h-3 bg-blue-600 -mt-1 -ml-2.5 rounded text-white text-xs flex items-center justify-center font-bold">30</div>
              </div>
              
              {/* Pedestrian Crossing */}
              <div className="absolute bottom-16 left-0 right-0">
                <div className="flex justify-center space-x-1">
                  <div className="w-2 h-1 bg-white"></div>
                  <div className="w-2 h-1 bg-white"></div>
                  <div className="w-2 h-1 bg-white"></div>
                  <div className="w-2 h-1 bg-white"></div>
                  <div className="w-2 h-1 bg-white"></div>
                </div>
              </div>
              
              {/* Road */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-600 road-perspective">
                {/* Road markings */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-white road-lines"></div>
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-300 road-center-line"></div>
              </div>
              
              {/* Realistic Moving Learner Cars */}
              <div className="absolute bottom-8 left-0 w-full">
                {/* Car 1 - Blue Learner Car */}
                <div className="animate-road-car-1 absolute">
                  <div className="relative">
                    {/* L Plate */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white border-2 border-red-500 w-4 h-3 flex items-center justify-center text-red-500 font-bold text-xs rounded">L</div>
                    {/* Car Body */}
                    <div className="relative">
                      {/* Main car body */}
                      <div className="w-8 h-4 bg-blue-500 rounded-lg relative shadow-md">
                        {/* Windshield */}
                        <div className="w-6 h-2 bg-blue-300 rounded-t-lg absolute top-0 left-1"></div>
                        {/* Windows */}
                        <div className="w-1 h-1 bg-blue-300 absolute top-1 left-0.5 rounded"></div>
                        <div className="w-1 h-1 bg-blue-300 absolute top-1 right-0.5 rounded"></div>
                        {/* Headlights */}
                        <div className="w-1 h-1 bg-yellow-200 absolute top-2 left-0 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-200 absolute bottom-2 left-0 rounded-full"></div>
                      </div>
                      {/* Wheels */}
                      <div className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full">
                        <div className="w-1 h-1 bg-gray-600 rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
                      <div className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full">
                        <div className="w-1 h-1 bg-gray-600 rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Car 2 - Red Learner Car */}
                <div className="animate-road-car-2 absolute">
                  <div className="relative">
                    {/* L Plate */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white border-2 border-red-500 w-4 h-3 flex items-center justify-center text-red-500 font-bold text-xs rounded">L</div>
                    {/* Car Body */}
                    <div className="relative">
                      {/* Main car body */}
                      <div className="w-7 h-3 bg-red-500 rounded-lg relative shadow-md">
                        {/* Windshield */}
                        <div className="w-5 h-1.5 bg-red-300 rounded-t-lg absolute top-0 left-1"></div>
                        {/* Windows */}
                        <div className="w-1 h-0.5 bg-red-300 absolute top-0.5 left-0.5 rounded"></div>
                        <div className="w-1 h-0.5 bg-red-300 absolute top-0.5 right-0.5 rounded"></div>
                        {/* Headlights */}
                        <div className="w-0.5 h-0.5 bg-yellow-200 absolute top-1 left-0 rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-yellow-200 absolute bottom-1 left-0 rounded-full"></div>
                      </div>
                      {/* Wheels */}
                      <div className="absolute -bottom-0.5 left-0.5 w-1.5 h-1.5 bg-gray-800 rounded-full">
                        <div className="w-0.5 h-0.5 bg-gray-600 rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
                      <div className="absolute -bottom-0.5 right-0.5 w-1.5 h-1.5 bg-gray-800 rounded-full">
                        <div className="w-0.5 h-0.5 bg-gray-600 rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Car 3 - Green Learner Car */}
                <div className="animate-road-car-3 absolute">
                  <div className="relative">
                    {/* L Plate */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white border-2 border-red-500 w-4 h-3 flex items-center justify-center text-red-500 font-bold text-xs rounded">L</div>
                    {/* Car Body */}
                    <div className="relative">
                      {/* Main car body */}
                      <div className="w-8 h-4 bg-green-500 rounded-lg relative shadow-md">
                        {/* Windshield */}
                        <div className="w-6 h-2 bg-green-300 rounded-t-lg absolute top-0 left-1"></div>
                        {/* Windows */}
                        <div className="w-1 h-1 bg-green-300 absolute top-1 left-0.5 rounded"></div>
                        <div className="w-1 h-1 bg-green-300 absolute top-1 right-0.5 rounded"></div>
                        {/* Headlights */}
                        <div className="w-1 h-1 bg-yellow-200 absolute top-2 left-0 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-200 absolute bottom-2 left-0 rounded-full"></div>
                      </div>
                      {/* Wheels */}
                      <div className="absolute -bottom-1 left-1 w-2 h-2 bg-gray-800 rounded-full">
                        <div className="w-1 h-1 bg-gray-600 rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
                      <div className="absolute -bottom-1 right-1 w-2 h-2 bg-gray-800 rounded-full">
                        <div className="w-1 h-1 bg-gray-600 rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-secondary-500 rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary-500 rounded-full opacity-10 blur-3xl animate-pulse-slow-delay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
