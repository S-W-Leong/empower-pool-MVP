import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Treasury: React.FC = () => {
  const transactions = [
    { id: 1, type: 'in', amount: '+$5,000', description: 'Monthly contribution', date: '2024-01-15' },
    { id: 2, type: 'out', amount: '-$2,500', description: 'Scholarship payout', date: '2024-01-14' },
    { id: 3, type: 'in', amount: '+$1,000', description: 'Individual donation', date: '2024-01-13' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Treasury
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Balance Overview</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm">Total Balance</p>
              <p className="text-3xl font-bold text-gray-800">$45,678</p>
            </div>
            <div className="flex space-x-4">
              <div>
                <p className="text-gray-600 text-sm">Monthly Income</p>
                <p className="text-xl font-bold text-green-500">+$12,000</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Monthly Expenses</p>
                <p className="text-xl font-bold text-red-500">-$8,500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    tx.type === 'in' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {tx.type === 'in' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{tx.description}</p>
                    <p className="text-xs text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <span className={`font-bold ${
                  tx.type === 'in' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treasury;
