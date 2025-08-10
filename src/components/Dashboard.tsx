import React from 'react';
import { TrendingUp, Users, DollarSign, Award, Coins } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Members', value: '1,234', icon: Users, change: '+12%' },
    { label: 'Active Proposals', value: '23', icon: TrendingUp, change: '+5%' },
    { label: 'Treasury Balance', value: '$45,678', icon: DollarSign, change: '+18%' },
    { label: 'Total EMP Tokens', value: '2,456,789', icon: Coins, change: '+22%' },
  ];

  const empInfo = {
    totalTokens: 2456789,
    totalContributions: 2456789,
    activeVoters: 892,
    averageTokensPerVoter: 2754,
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Welcome to Empower-Pool DAO
        </h2>
        <p className="text-gray-600">
          Democratizing micro-grants through community governance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-500 text-sm font-semibold">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* EMP Token System Info */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
        <h3 className="text-xl font-bold text-purple-700 mb-4">EMP Token System</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{empInfo.totalTokens.toLocaleString()}</div>
            <p className="text-sm text-purple-600">Total EMP Tokens</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">${empInfo.totalContributions.toLocaleString()}</div>
            <p className="text-sm text-green-600">Total Contributions</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{empInfo.activeVoters}</div>
            <p className="text-sm text-blue-600">Active Voters</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{empInfo.averageTokensPerVoter.toLocaleString()}</div>
            <p className="text-sm text-purple-600">Avg. Tokens/Voter</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white/50 rounded-lg">
          <p className="text-sm text-gray-700 text-center">
            <strong>1 USD = 1 EMP Token</strong> • Your contribution directly translates to voting power in the DAO
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">New proposal: "Fund STEM Education Program" - 15,000 EMPs FOR</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">User contributed $500 - Earned 500 EMP tokens</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Proposal "Art Workshop Initiative" is now live for voting</span>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
              View Active Proposals
            </button>
            <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:shadow-lg transition-all">
              Contribute & Earn EMP
            </button>
            <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:shadow-lg transition-all">
              Check Your Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
