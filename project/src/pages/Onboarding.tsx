import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, BookOpen } from 'lucide-react';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Events
        </Link>

        <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-white mb-6">Welcome to Event Hosting!</h1>
          <p className="text-lg text-gray-400 mb-8">Have you hosted an event before?</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              onClick={() => navigate('/create-event?step=1')}
              className="flex items-center justify-center p-6 border-2 border-[#4D61FC] rounded-xl hover:bg-[#4D61FC] text-white transition-colors group"
            >
              <Trophy className="w-6 h-6 mr-3" />
              <span className="text-lg font-medium">I've hosted before</span>
            </button>

            <button
              onClick={() => navigate('/first-time-host')}
              className="flex items-center justify-center p-6 border-2 border-[#4D61FC] rounded-xl hover:bg-[#4D61FC] text-white transition-colors group"
            >
              <BookOpen className="w-6 h-6 mr-3" />
              <span className="text-lg font-medium">This is my first time</span>
            </button>
          </div>

          <div className="mt-8 p-6 bg-[#2A2A2A] rounded-xl">
            <h2 className="text-xl font-semibold text-white mb-4">Why Host with EasyA?</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4D61FC] text-white text-sm mr-3">1</span>
                Build your reputation in the community
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4D61FC] text-white text-sm mr-3">2</span>
                Access comprehensive hosting resources
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4D61FC] text-white text-sm mr-3">3</span>
                Get featured on our platform
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4D61FC] text-white text-sm mr-3">4</span>
                Connect with passionate learners
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;