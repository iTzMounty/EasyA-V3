import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

interface NewEventCardProps {
  title: string;
  date: string;
  location: string;
  eventKey: 'apex' | 'vegas' | 'toronto';
}

const NewEventCard: React.FC<NewEventCardProps> = ({
  title,
  date,
  location,
  eventKey
}) => {
  const [countdown, setCountdown] = useState<string>('');

  const eventConfig = {
    apex: {
      image: "https://cdn.prod.website-files.com/643fbce861d40854d9afefc2/66a310ebef16e674e8195da9_DSC05657%20Large.jpeg",
      targetDate: 'June 7, 2025',
      dateDisplay: (
        <>
          <span className="font-bold">7</span>
          <span className="mx-1">Jun</span>
          <span>-</span>
          <span className="mx-1">8</span>
          <span>Jun 2025</span>
        </>
      ),
      duration: '36 hours',
      link: '/events/easya-ripple-apex-hackathon',
      logo: "https://cdn.prod.website-files.com/643fbce861d40854d9afefc2/66017e79cd4332053faf6754_XRP%20Ledger%20-%20Horizontal%20-%20White%202.png",
      prize: "$25,000",
      showCountdown: true
    },
    vegas: {
      image: "https://cdn.prod.website-files.com/643fbce861d40854d9afefc2/67fbacab5a499bbe52e2c3a5_Screenshot%202025-04-13%20at%2014.22.41.jpg",
      targetDate: 'May 30, 2025',
      dateDisplay: (
        <>
          <span className="font-bold">30</span>
          <span className="mx-1">May</span>
          <span>-</span>
          <span className="mx-1">31</span>
          <span>May 2025</span>
        </>
      ),
      duration: '2 hours',
      link: '/events/easya-x-xrp-vegas-shark-tank',
      logo: "https://cdn.prod.website-files.com/643fbce861d40854d9afefc2/66017e79cd4332053faf6754_XRP%20Ledger%20-%20Horizontal%20-%20White%202.png",
      prize: "$25,000",
      showCountdown: true
    },
    toronto: {
      image: "https://cdn.prod.website-files.com/643fbce861d40854d9afefc2/67d73386a11c9b84e1d49693_to.jpg",
      targetDate: 'May 14, 2025',
      dateDisplay: (
        <>
          <span className="font-bold">14</span>
          <span className="mx-1">May</span>
          <span>-</span>
          <span className="mx-1">16</span>
          <span>May 2025</span>
        </>
      ),
      duration: '72 hours',
      link: '/events/easya-consensus-toronto-hackathon',
      logo: "https://cdn.prod.website-files.com/643fbce861d40854d9afefc2/663acb1870d16ce181f56245_CoinDeskLogo_Landscape_Light%201.png",
      prize: "$250,000",
      showCountdown: false
    }
  };

  const config = eventConfig[eventKey];

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date(config.targetDate);
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setCountdown(`${days} days`);
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(timer);
  }, [config.targetDate]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1A1A1A]">
      <div className="relative h-[300px]">
        <img 
          alt="Event cover" 
          loading="lazy" 
          src={config.image}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Event Logo - Top Left */}
        <img 
          alt="Event Logo" 
          loading="lazy" 
          src={config.logo}
          className="absolute top-6 left-6 h-8 object-contain z-10"
        />

        {/* Prize Text - Top Right */}
        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 z-10">
          <span className="text-white font-semibold">{config.prize} USD in Total Prizes</span>
        </div>

        <div className="absolute top-4 left-4">
          <img 
            alt="Upcoming Event" 
            loading="lazy" 
            src="https://cdn.prod.website-files.com/642ed403044d8378fabb82a6/643fd5a1a7aa4ee53da3c05a_Frame%201597879572.svg" 
            className="w-8 h-8"
          />
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

        <div className="flex items-center text-gray-300 mb-4">
          <div className="flex items-center">
            {config.dateDisplay}
          </div>
          <span className="mx-3">|</span>
          <span>{config.duration}</span>
        </div>

        <div className="flex items-center text-gray-300 mb-6">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{location}</span>
        </div>

        <a 
          href={config.link}
          className="inline-block w-full bg-[#4D61FC] text-white text-center py-3 px-6 rounded-xl font-medium hover:bg-[#3D4FE7] transition-colors mb-4"
        >
          View Details
        </a>

        {config.showCountdown && (
          <div className="text-yellow-500 text-sm text-center">
            Closes in {countdown}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewEventCard;