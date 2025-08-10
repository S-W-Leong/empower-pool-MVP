import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProposalManagement from './components/ProposalManagement';
import Treasury from './components/Treasury';
import { User } from 'lucide-react'; // Added import for User icon

type TabType = 'home' | 'proposals' | 'treasury' | 'profile' | 'about';

// User Profile component
const UserProfile: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [userData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    walletAddress: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
    empTokens: 2500,
    totalContributed: 2500,
    votingHistory: [
      {
        proposalId: 1,
        proposalTitle: 'Fund STEM Education Program',
        vote: 'for',
        empTokens: 500,
        date: '2024-01-20',
      },
      {
        proposalId: 3,
        proposalTitle: 'Environmental Science Research Grant',
        vote: 'for',
        empTokens: 300,
        date: '2024-01-18',
      },
      {
        proposalId: 2,
        proposalTitle: 'Art Workshop Initiative',
        vote: 'against',
        empTokens: 200,
        date: '2024-01-22',
      },
    ],
    contributionHistory: [
      {
        amount: 1000,
        date: '2024-01-15',
        empTokensEarned: 1000,
      },
      {
        amount: 1500,
        date: '2024-01-10',
        empTokensEarned: 1500,
      },
    ],
  });

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
    // In a real implementation, this would connect to the user's wallet
    // and fetch their actual data
  };

  const handleDisconnectWallet = () => {
    setIsWalletConnected(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          User Profile
        </h2>
        {!isWalletConnected ? (
          <button 
            onClick={handleConnectWallet}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            Connect Wallet
          </button>
        ) : (
          <button 
            onClick={handleDisconnectWallet}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            Disconnect Wallet
          </button>
        )}
      </div>

      {!isWalletConnected ? (
        <div className="bg-white/70 backdrop-blur-xl rounded-xl p-12 shadow-lg border border-white/20 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect Your Wallet</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Connect your wallet to view your profile, EMP tokens, voting history, and contribution details.
          </p>
          <button 
            onClick={handleConnectWallet}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{userData.name}</h3>
                <p className="text-gray-600">{userData.email}</p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 mb-2">Wallet Address</h4>
                  <p className="text-sm text-gray-600 font-mono break-all">{userData.walletAddress}</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-700 mb-2">EMP Tokens</h4>
                  <div className="text-2xl font-bold text-purple-600">{userData.empTokens.toLocaleString()} EMP</div>
                  <p className="text-sm text-purple-600">Voting Power</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">Total Contributed</h4>
                  <div className="text-xl font-bold text-green-600">${userData.totalContributed.toLocaleString()}</div>
                  <p className="text-sm text-green-600">1 USD = 1 EMP Token</p>
                </div>
              </div>
            </div>
          </div>

          {/* Voting History */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Voting History</h3>
              <div className="space-y-4">
                {userData.votingHistory.map((vote, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{vote.proposalTitle}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        vote.vote === 'for' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {vote.vote === 'for' ? 'Voted For' : 'Voted Against'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>{vote.empTokens.toLocaleString()} EMP tokens</span>
                      <span>{vote.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution History */}
            <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contribution History</h3>
              <div className="space-y-4">
                {userData.contributionHistory.map((contribution, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-800">${contribution.amount.toLocaleString()}</h4>
                        <p className="text-sm text-gray-600">{contribution.empTokensEarned.toLocaleString()} EMP tokens earned</p>
                      </div>
                      <span className="text-sm text-gray-600">{contribution.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple About component
const About: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        About Empower-Pool
      </h2>
      <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20">
        <p className="text-gray-700 leading-relaxed">
          Empower-Pool is a decentralized micro-scholarship platform that enables community-driven funding 
          for educational initiatives. Our platform connects donors with promising projects and students, 
          creating a transparent and efficient ecosystem for educational funding.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <h3 className="font-bold text-purple-600 mb-2">Transparent</h3>
            <p className="text-sm text-gray-600">All transactions and votes are publicly verifiable</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-600 mb-2">Community-Driven</h3>
            <p className="text-sm text-gray-600">Decisions made by the community through voting</p>
          </div>
          <div className="text-center p-4 bg-pink-50 rounded-lg">
            <h3 className="font-bold text-pink-600 mb-2">Accessible</h3>
            <p className="text-sm text-gray-600">Open to anyone who wants to contribute to education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'proposals':
        return <ProposalManagement />;
      case 'treasury':
        return <Treasury />;
      case 'profile':
        return <UserProfile />;
      case 'about':
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="container mx-auto px-4 py-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
