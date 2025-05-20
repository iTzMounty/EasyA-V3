import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Host {
  id: string;
  name: string;
  eventCount: number;
  badges: string[];
}

interface LeaderboardProps {
  hosts: Host[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ hosts }) => {
  const sortedHosts = [...hosts].sort((a, b) => b.eventCount - a.eventCount);
  const topHosts = sortedHosts.slice(0, 5);

  const getBadgeIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Award className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Event Hosts</h2>
      <div className="space-y-4">
        {topHosts.map((host, index) => (
          <div
            key={host.id}
            className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              {getBadgeIcon(index)}
              <div>
                <h3 className="font-medium text-gray-900">{host.name}</h3>
                <p className="text-sm text-gray-500">{host.eventCount} events hosted</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {host.badges.map((badge, badgeIndex) => (
                <span
                  key={badgeIndex}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/leaderboard"
        className="inline-block mt-6 text-[#4D61FC] hover:text-[#3D4FE7] font-medium"
      >
        View full leaderboard →
      </Link>
    </div>
  );
};

export default Leaderboard;