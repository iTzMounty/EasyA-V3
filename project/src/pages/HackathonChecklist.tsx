import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, Calendar, Trophy, BookOpen, Laptop, MessageSquare, PenTool, Rocket } from 'lucide-react';

const HackathonChecklist = () => {
  const checklistSections = [
    {
      title: "Before the Event",
      items: [
        "Set clear objectives and theme for your hackathon",
        "Choose a suitable date and venue",
        "Create a detailed schedule including breaks",
        "Prepare registration and attendance tracking system",
        "Set up communication channels (Discord/Slack)",
        "Arrange for necessary equipment and internet connectivity"
      ]
    },
    {
      title: "Participant Experience",
      items: [
        "Create comprehensive participant guidelines",
        "Prepare welcome packets with essential information",
        "Set up a help desk for technical support",
        "Plan ice-breaker activities for team formation",
        "Organize mentorship opportunities",
        "Design engaging side activities or mini-events"
      ]
    },
    {
      title: "Technical Setup",
      items: [
        "Test all technical infrastructure",
        "Prepare backup internet solutions",
        "Set up project submission platform",
        "Create judging criteria and scoring system",
        "Prepare presentation guidelines",
        "Test all presentation equipment"
      ]
    },
    {
      title: "Post-Event",
      items: [
        "Plan award ceremony and prizes",
        "Prepare feedback collection system",
        "Set up project showcase platform",
        "Plan post-event networking opportunities",
        "Prepare certificates for participants",
        "Document success stories and learnings"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/first-time-host" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to First Time Host
        </Link>

        <div className="bg-[#1A1A1A] rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-4">Hackathon Host Checklist</h1>
            <p className="text-lg text-gray-400">
              Everything you need to organize a successful hackathon. Use this checklist to ensure you've covered all the essentials.
            </p>
          </div>

          <div className="grid gap-8">
            {checklistSections.map((section, index) => (
              <div key={index} className="bg-[#2A2A2A] rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#4D61FC] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/create-event?step=1"
              className="inline-flex items-center justify-center bg-[#4D61FC] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#3D4FE7] transition-colors"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Creating Your Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonChecklist;