import React from 'react';
import { MapPin, Calendar, Check, Trophy } from 'lucide-react';
import { toggleEventAttendance } from '../lib/eventStorage';

export interface EventProps {
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  isEasyAHosted?: boolean;
  id?: string;
  isAttending?: boolean;
  createdBy?: string;
  hostName?: string;
  hostEventCount?: number;
  isFeatured?: boolean;
  isCommunityEvent?: boolean;
}

const EventCard: React.FC<EventProps> = ({ 
  title, 
  date, 
  location, 
  imageUrl, 
  isEasyAHosted = false,
  id,
  isAttending = false,
  hostName,
  hostEventCount,
  isFeatured = false,
  isCommunityEvent = false
}) => {
  const handleAttendClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (id) {
      toggleEventAttendance(id);
    }
  };

  return (
    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative h-56 sm:h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {isEasyAHosted && (
          <div className="absolute top-4 left-4 bg-[#4D61FC] text-white px-3 py-1.5 rounded-full text-sm font-medium">
            EasyA Hosted
          </div>
        )}
        {isFeatured && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-sm font-medium flex items-center">
            <Trophy className="w-4 h-4 mr-1" />
            Featured by EasyA
          </div>
        )}
        {!isEasyAHosted && id && (
          <button
            onClick={handleAttendClick}
            className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2
              ${isAttending 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'}`}
          >
            {isAttending && <Check size={16} />}
            {isAttending ? 'Attending' : 'Attend'}
          </button>
        )}
        {isCommunityEvent && (
          <div className="absolute bottom-4 left-4 bg-[#2A2A2A]/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white">
            Community Event
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-xl text-white mb-3">{title}</h3>
        {hostName && (
          <div className="flex items-center mb-3 text-sm text-gray-400">
            <span className="font-medium">{hostName}</span>
            {hostEventCount !== undefined && hostEventCount > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-[#2A2A2A] rounded-full">
                {hostEventCount} events hosted
              </span>
            )}
          </div>
        )}
        <div className="flex items-center text-gray-400 text-base mb-2">
          <Calendar size={18} className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-400 text-base">
          <MapPin size={18} className="mr-2" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;