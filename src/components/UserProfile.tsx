import React from 'react';
import { Award, Activity, Calendar } from 'lucide-react';

const UserProfile: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Profile
      </h2>

      <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full"></div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Active Member</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-purple-600">Voting Power</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">1,250</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-blue-600">Proposals Created</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">8</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-600">Member Since</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
