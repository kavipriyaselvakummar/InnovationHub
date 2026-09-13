import React, { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';
import { mockOpportunities } from '../../data/mockData';
import { OpportunityCard } from '../../components/ui/OpportunityCard';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';

export const BrowseOpportunities: React.FC = () => {
  const [search, setSearch] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredOpportunities = mockOpportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(search.toLowerCase()) || 
                          opp.description.toLowerCase().includes(search.toLowerCase());
    const matchesDomain = domainFilter ? opp.domain === domainFilter : true;
    const matchesStatus = statusFilter ? opp.status === statusFilter : true;
    return matchesSearch && matchesDomain && matchesStatus;
  });

  const domains = Array.from(new Set(mockOpportunities.map(o => o.domain))).map(d => ({ value: d, label: d }));

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Browse Opportunities</h1>
        <p className="text-gray-600 mt-1">Discover projects and find your next team.</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input 
            label="Search" 
            placeholder="Search by title or keyword..." 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
          />
        </div>
        <div className="w-full md:w-48">
          <Select 
            label="Domain"
            value={domainFilter}
            onChange={e => setDomainFilter(e.target.value)}
            options={[{ value: '', label: 'All Domains' }, ...domains]}
          />
        </div>
        <div className="w-full md:w-48">
          <Select 
            label="Status"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            options={[
              { value: '', label: 'All Statuses' },
              { value: 'Open', label: 'Open' },
              { value: 'Approved', label: 'Approved' }
            ]}
          />
        </div>
      </div>

      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map(opp => (
            <OpportunityCard key={opp.id} opportunity={opp} viewPath="/student/opportunities" />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center text-gray-500">
          No opportunities found matching your filters.
        </div>
      )}
    </DashboardLayout>
  );
};
