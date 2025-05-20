import React from 'react';
import { Star, Users, Calendar } from 'lucide-react';
import type { EventProps } from './EventCard';

interface FeaturedEventProps {
  event: EventProps;
}

const FeaturedEvent: React.FC<FeaturedEventProps> = ({ event }) => {
  return (
    <div className="bg-gradient-to-r from-[#4D61FC] to-[#3D4FE7] rounded-2xl overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-64 object-cover opacity-90"
        />
        <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-sm font-medium flex items-center">
          <Star className="w-4 h-4 mr-1" />
          Featured Event
        </div>
      </div>
      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 opacity-75" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2 opacity-75" />
            <span>Limited spots available</span>
          </div>
        </div>
        <button className="w-full bg-white text-[#4D61FC] px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default FeaturedEvent;