import React from 'react';
import EventCard, { EventProps } from './EventCard';
import NewEventCard from './NewEventCard';
import FeaturedEvent from './FeaturedEvent';
import Leaderboard from './Leaderboard';
import { getHostStats } from '../lib/eventStorage';

interface EventSectionProps {
  events: EventProps[];
  isEasyAHosted?: boolean;
  showLeaderboard?: boolean;
}

const EventSection: React.FC<EventSectionProps> = ({ 
  events, 
  isEasyAHosted = false,
  showLeaderboard = false
}) => {
  const featuredEvent = events.find(event => event.isFeatured);
  const hosts = events
    .filter(event => event.createdBy)
    .map(event => event.createdBy!)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(hostId => getHostStats(hostId));

  return (
    <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
      {featuredEvent && <FeaturedEvent event={featuredEvent} />}
      
      {showLeaderboard && hosts.length > 0 && (
        <Leaderboard hosts={hosts} />
      )}

      {events.map((event, index) => {
        if (event.title === "EasyA x Ripple Apex Hackathon") {
          return (
            <NewEventCard 
              key={index}
              eventKey="apex"
              title={event.title}
              date={event.date}
              location={event.location}
            />
          );
        }
        if (event.title === "EasyA x XRP Las Vegas Shark Tank") {
          return (
            <NewEventCard 
              key={index}
              eventKey="vegas"
              title={event.title}
              date={event.date}
              location={event.location}
            />
          );
        }
        if (event.title === "EasyA Consensus Toronto Hackathon") {
          return (
            <NewEventCard 
              key={index}
              eventKey="toronto"
              title={event.title}
              date={event.date}
              location={event.location}
            />
          );
        }
        return (
          <EventCard 
            key={index} 
            {...event} 
            isEasyAHosted={isEasyAHosted}
          />
        );
      })}
    </div>
  );
};

export default EventSection;