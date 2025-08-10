import React, { useState } from 'react';
import { Plus, Clock, CheckCircle, XCircle, X, Calendar, DollarSign, Users } from 'lucide-react';

interface Proposal {
  id: number;
  title: string;
  description: string;
  amount: string;
  status: string;
  votes: { for: number; against: number };
  empVotes: { for: number; against: number };
  author: string;
  createdAt: string;
  deadline: string;
  category: string;
  fullDescription: string;
}

const ProposalManagement: React.FC = () => {
  const [proposals] = useState<Proposal[]>([
    {
      id: 1,
      title: 'Fund STEM Education Program',
      description: 'Provide scholarships for underprivileged students in STEM fields',
      amount: '$10,000',
      status: 'active',
      votes: { for: 234, against: 56 },
      empVotes: { for: 15000, against: 3200 },
      author: 'Dr. Sarah Johnson',
      createdAt: '2024-01-15',
      deadline: '2024-02-15',
      category: 'Education',
      fullDescription: 'This initiative aims to provide comprehensive STEM education scholarships for 50 underprivileged high school students. The program will cover tuition, books, and lab materials for advanced science and mathematics courses. Students will also receive mentorship from industry professionals and participate in hands-on research projects.',
    },
    {
      id: 2,
      title: 'Art Workshop Initiative',
      description: 'Support local artists with micro-grants for community workshops',
      amount: '$5,000',
      status: 'pending',
      votes: { for: 0, against: 0 },
      empVotes: { for: 0, against: 0 },
      author: 'Maria Rodriguez',
      createdAt: '2024-01-20',
      deadline: '2024-03-01',
      category: 'Arts & Culture',
      fullDescription: 'This project will fund 10 local artists to conduct community art workshops in underserved neighborhoods. Each artist will receive $500 to cover materials and venue costs. The workshops will focus on traditional and digital art forms, providing free creative outlets for community members of all ages.',
    },
    {
      id: 3,
      title: 'Environmental Science Research Grant',
      description: 'Support research on sustainable urban farming techniques',
      amount: '$15,000',
      status: 'active',
      votes: { for: 189, against: 23 },
      empVotes: { for: 12500, against: 1800 },
      author: 'Prof. Michael Chen',
      createdAt: '2024-01-10',
      deadline: '2024-02-28',
      category: 'Research',
      fullDescription: 'This research project will investigate innovative urban farming techniques that can be implemented in densely populated areas. The study will focus on vertical farming, hydroponics, and community garden models that maximize food production while minimizing environmental impact.',
    },
  ]);

  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-600';
      case 'pending':
        return 'bg-yellow-100 text-yellow-600';
      case 'completed':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Proposals
        </h2>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Proposal</span>
        </button>
      </div>

      <div className="space-y-4">
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20 cursor-pointer hover:shadow-xl transition-all duration-200"
            onClick={() => setSelectedProposal(proposal)}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{proposal.title}</h3>
                <p className="text-gray-600 mt-1">{proposal.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{proposal.author}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Deadline: {proposal.deadline}</span>
                  </span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${getStatusColor(proposal.status)}`}>
                {getStatusIcon(proposal.status)}
                <span>{proposal.status}</span>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">{proposal.empVotes.for.toLocaleString()} EMPs FOR</span>
                </div>
                <div className="flex items-center space-x-1">
                  <XCircle className="w-4 h-4 text-red-500" />
                  <span className="text-sm">{proposal.empVotes.against.toLocaleString()} EMPs AGAINST</span>
                </div>
              </div>
              <span className="font-bold text-gray-800 flex items-center space-x-1">
                <DollarSign className="w-4 h-4" />
                <span>{proposal.amount}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Proposal Detail Modal */}
      {selectedProposal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProposal.title}</h2>
                <button
                  onClick={() => setSelectedProposal(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Proposal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Project Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Author:</span>
                        <span className="font-medium">{selectedProposal.author}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{selectedProposal.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Created:</span>
                        <span className="font-medium">{selectedProposal.createdAt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Deadline:</span>
                        <span className="font-medium">{selectedProposal.deadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Funding & Votes</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Requested Amount:</span>
                        <span className="font-medium text-green-600">{selectedProposal.amount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Votes For:</span>
                        <span className="font-medium text-green-600">{selectedProposal.empVotes.for.toLocaleString()} EMPs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Votes Against:</span>
                        <span className="font-medium text-red-600">{selectedProposal.empVotes.against.toLocaleString()} EMPs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedProposal.status)}`}>
                          {selectedProposal.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Project Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProposal.fullDescription}</p>
                </div>

                {/* Voting Actions */}
                <div className="flex space-x-4 pt-4 border-t">
                  <button className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Vote For</span>
                  </button>
                  <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2">
                    <XCircle className="w-4 h-4" />
                    <span>Vote Against</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalManagement;
