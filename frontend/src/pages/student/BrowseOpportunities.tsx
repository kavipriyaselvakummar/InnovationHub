import React, { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';
import { OpportunityCard } from '../../components/ui/OpportunityCard';
import { Input } from '../../components/ui/Input';
import { getOpportunities } from '../../services';

export const BrowseOpportunities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Show approved or published ops
  const allOpps = getOpportunities().filter(o => o.status === 'Approved' || o.status === 'Published');

  const filteredOpps = allOpps.filter(opp => 
    opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opp.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Browse Opportunities</h1>
        <p className="text-gray-600 mt-1">Discover projects and find your next team.</p>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="w-full md:w-1/3">
          <Input 
            label="Search" placeholder="Search by title or domain..." 
            value={searchTerm}
            onChange={(e: any) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredOpps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpps.map(opp => (
            <OpportunityCard key={opp.id} opportunity={opp}  />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
          <p className="text-gray-500">No opportunities found matching your search.</p>
        </div>
      )}
    </DashboardLayout>
  );
};
