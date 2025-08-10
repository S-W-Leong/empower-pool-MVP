import React from 'react';
import { ThumbsUp, ThumbsDown, Clock } from 'lucide-react';

const VotingInterface: React.FC = () => {
  const activeVotes = [
    {
      id: 1,
      title: 'Increase Treasury Allocation',
      description: 'Proposal to increase monthly treasury allocation by 20%',
      endTime: '2 days',
      participation: 67,
    },
    {
      id: 2,
      title: 'New Partnership with EdTech Platform',
      description: 'Strategic partnership for educational content delivery',
      endTime: '5 days',
      participation: 45,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Active Votes
      </h2>

      <div className="space-y-4">
        {activeVotes.map((vote) => (
          <div
            key={vote.id}
            className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800">{vote.title}</h3>
              <p className="text-gray-600 mt-1">{vote.description}</p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Participation</span>
                <span>{vote.participation}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                  style={{ width: `${vote.participation}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Ends in {vote.endTime}</span>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all flex items-center space-x-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>For</span>
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all flex items-center space-x-1">
                  <ThumbsDown className="w-4 h-4" />
                  <span>Against</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingInterface;
