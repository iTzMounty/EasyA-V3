import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, signOut } from '../lib/userStorage';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  return (
    <header className="bg-[#0A0A0A] py-4 px-6 sticky top-0 z-10 border-b border-[#1A1A1A]">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://cdn.prod.website-files.com/642ed403044d8378fabb82a6/643699d539b2cc1412cae15a_Vector.svg" 
            alt="EasyA Events" 
            className="h-6" 
          />
        </Link>
        
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">{user.email}</span>
            <button 
              onClick={() => signOut()}
              className="text-gray-400 hover:text-white text-sm"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate('/signin')}
            className="bg-[#4D61FC] text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#3D4FE7] transition-colors"
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;