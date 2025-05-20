import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, BookOpen, Users } from 'lucide-react';

const FirstTimeHost = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4D61FC] rounded-full mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Welcome to the Community!</h1>
            <p className="text-xl text-gray-400">
              You're about to join an amazing group of community leaders. Let's make your first event incredible!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-[#2A2A2A] rounded-xl">
              <BookOpen className="w-8 h-8 text-[#4D61FC] mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Learn from the Best</h2>
              <p className="text-gray-400 mb-4">
                Access our comprehensive hosting guides and learn from experienced community leaders.
              </p>
              <Link
                to="/resources"
                className="text-[#4D61FC] hover:text-[#3D4FE7] font-medium"
              >
                View Resources →
              </Link>
            </div>

            <div className="p-6 bg-[#2A2A2A] rounded-xl">
              <BookOpen className="w-8 h-8 text-[#4D61FC] mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Check out the checklist before</h2>
              <p className="text-gray-400 mb-4">
                Make sure you're prepared for your hackathon with this checklist.
              </p>
              <Link
                to="/hackathon-checklist"
                className="text-[#4D61FC] hover:text-[#3D4FE7] font-medium"
              >
                View Checklist →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/create-event?step=1"
              className="inline-flex items-center justify-center bg-[#4D61FC] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#3D4FE7] transition-colors"
            >
              <Users className="w-5 h-5 mr-2" />
              Create Your First Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTimeHost;