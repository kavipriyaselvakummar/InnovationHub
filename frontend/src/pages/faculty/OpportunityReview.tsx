import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { useParams, useNavigate } from 'react-router-dom';
import { mockOpportunities, mockUsers } from '../../data/mockData';
import { Button } from '../../components/Button';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Textarea } from '../../components/ui/Textarea';

export const OpportunityReview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const opportunity = mockOpportunities.find(o => o.id === id);

  if (!opportunity) {
    return (
      <DashboardLayout navItems={facultyNavItems}>
        <div className="text-center p-12">
          <h2 className="text-xl font-semibold">Opportunity not found</h2>
          <Button onClick={() => navigate('/faculty/opportunities')} className="mt-4">Back</Button>
        </div>
      </DashboardLayout>
    );
  }

  const creator = mockUsers.find(u => u.id === opportunity.creatorId);

  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate('/faculty/opportunities')} className="mb-4">
          &larr; Back to List
        </Button>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Review: {opportunity.title}</h1>
            <p className="text-gray-600 mt-1">Submitted by {creator?.name}</p>
          </div>
          <StatusBadge status={opportunity.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{opportunity.description}</p>
            
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Required Skills</h3>
            <div className="flex gap-2 flex-wrap">
              {opportunity.requiredSkills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentor Actions</h3>
            <Textarea label="Add Feedback" placeholder="Provide feedback before approving/rejecting..." rows={4} />
            <div className="flex flex-col gap-3 mt-4">
              <Button onClick={() => { alert('Approved'); navigate('/faculty/opportunities'); }} className="bg-green-600 hover:bg-green-700">Approve Proposal</Button>
              <Button onClick={() => { alert('Rejected'); navigate('/faculty/opportunities'); }} variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Reject</Button>
              <Button onClick={() => { alert('Feedback Sent'); }} variant="outline">Request Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
