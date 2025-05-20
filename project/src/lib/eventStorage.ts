import type { EventProps } from '../components/EventCard';
import { communityEvents } from '../data/eventData';

let events: EventProps[] = [];
let featuredEventId: string | null = null;

export const getEvents = (): EventProps[] => {
  return [...events].reverse(); // Return events in reverse order so newest appear first
};

export const addEvent = (event: EventProps) => {
  const newEvent = {
    ...event,
    id: Math.random().toString(36).substr(2, 9)
  };
  events.push(newEvent);
  return newEvent;
};

export const toggleEventAttendance = (eventId: string) => {
  const event = events.find(e => e.id === eventId);
  if (event) {
    event.isAttending = !event.isAttending;
  }
};

export const getFeaturedEvent = (): EventProps | null => {
  if (!featuredEventId) return null;
  return events.find(e => e.id === featuredEventId) || null;
};

export const setFeaturedEvent = (eventId: string) => {
  featuredEventId = eventId;
};

export const clearEvents = () => {
  events = [];
  featuredEventId = null;
};

// Host statistics
export interface HostStats {
  id: string;
  name: string;
  eventCount: number;
  badges: string[];
}

export const getHostStats = (userId: string): HostStats => {
  // Find the community event for this host
  const communityEvent = communityEvents.find(e => e.createdBy === userId);
  
  // Get dynamically added events
  const userEvents = events.filter(e => e.createdBy === userId);
  
  // Calculate total events
  const totalEventCount = communityEvent?.hostEventCount || userEvents.length;
  
  // Generate badges
  const badges = [];
  if (totalEventCount >= 5) badges.push('Experienced Host');
  if (totalEventCount >= 10) badges.push('Event Master');
  if (userEvents.some(e => e.id === featuredEventId) || communityEvent?.isFeatured) {
    badges.push('Featured');
  }

  return {
    id: userId,
    name: communityEvent?.hostName || 'Anonymous',
    eventCount: totalEventCount,
    badges
  };
};