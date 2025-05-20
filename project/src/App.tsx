import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EventSection from './components/EventSection';
import Resources from './pages/Resources';
import CreateEvent from './pages/CreateEvent';
import SignIn from './pages/SignIn';
import Onboarding from './pages/Onboarding';
import FirstTimeHost from './pages/FirstTimeHost';
import HackathonChecklist from './pages/HackathonChecklist';
import { easyAEvents } from './data/eventData';
import { ChevronDown, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLumaEvents } from './hooks/useLumaEvents';

function EventsPage() {
  const [activeTab, setActiveTab] = useState<'easya' | 'community'>('easya');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { events: communityEvents, isLoading, isError } = useLumaEvents();

  return (
    <div>
      <Header />
      <main className="flex-1 pt-8 pb-12 w-full px-4 bg-[#0A0A0A]">
        <h1 className="text-2xl font-semibold text-center text-white mb-8">Events</h1>
        
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('easya')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'easya'
                ? 'bg-[#4D61FC] text-white'
                : 'bg-[#1A1A1A] text-gray-400 hover:bg-[#2A2A2A]'
            }`}
          >
            EasyA Events
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'community'
                ? 'bg-[#4D61FC] text-white'
                : 'bg-[#1A1A1A] text-gray-400 hover:bg-[#2A2A2A]'
            }`}
          >
            Community Events
          </button>
        </div>

        {activeTab === 'community' && (
          <div className="text-center mb-8 relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center justify-center space-x-2 bg-[#4D61FC] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#3D4FE7] transition-colors"
            >
              <span>Host to build your reputation. Be seen. Be respected.</span>
              <ChevronDown size={20} className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-72 bg-[#1A1A1A] rounded-xl shadow-lg py-2 left-1/2 transform -translate-x-1/2">
                <Link
                  to="/resources"
                  className="flex items-center px-4 py-3 hover:bg-[#2A2A2A] transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-[#4D61FC] mr-3" />
                  <span className="text-gray-300">Event Hosting Resources</span>
                </Link>
                <Link
                  to="/onboarding"
                  className="w-full text-left flex items-center px-4 py-3 hover:bg-[#2A2A2A] transition-colors text-[#4D61FC] font-medium"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Host Event
                </Link>
              </div>
            )}
          </div>
        )}
        
        {isLoading ? (
          <div className="text-center py-8 text-gray-300">Loading events...</div>
        ) : isError ? (
          <div className="text-center py-8 text-red-400">Error loading events. Please try again later.</div>
        ) : (
          activeTab === 'easya' ? (
            <EventSection 
              events={easyAEvents}
              isEasyAHosted={true}
            />
          ) : (
            <EventSection 
              events={communityEvents}
              showLeaderboard={true}
            />
          )
        )}
      </main>
      
      <footer className="relative">
        <img 
          src="https://cdn.prod.website-files.com/642ed403044d8378fabb82a6/64677cff44aa621a04918609_Footer%20Section-min-p-2000.webp"
          alt="Footer background"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <p className="text-gray-400 text-xs">© 2025 EasyA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
        <Routes>
          <Route path="/" element={<EventsPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/first-time-host" element={<FirstTimeHost />} />
          <Route path="/hackathon-checklist" element={<HackathonChecklist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;