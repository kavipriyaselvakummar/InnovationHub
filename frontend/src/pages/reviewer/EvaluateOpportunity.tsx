import React, { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { reviewerNavItems } from './navConfig';
import { useParams, useNavigate } from 'react-router-dom';
import { mockOpportunities, mockUsers } from '../../data/mockData';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/ui/Textarea';
import { Select } from '../../components/ui/Select';

export const EvaluateOpportunity: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [rating, setRating] = useState('3');
  const [comments, setComments] = useState('');
  
  const opportunity = mockOpportunities.find(o => o.id === id);

  if (!opportunity) {
    return (
      <DashboardLayout navItems={reviewerNavItems}>
        <div className="text-center p-12">
          <h2 className="text-xl font-semibold">Opportunity not found</h2>
          <Button onClick={() => navigate('/reviewer/opportunities')} className="mt-4">Back</Button>
        </div>
      </DashboardLayout>
    );
  }

  const creator = mockUsers.find(u => u.id === opportunity.creatorId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Evaluation submitted successfully!');
    navigate('/reviewer/opportunities');
  };

  return (
    <DashboardLayout navItems={reviewerNavItems}>
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate('/reviewer/opportunities')} className="mb-4">
          &larr; Back
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Evaluate: {opportunity.title}</h1>
        <p className="text-gray-600 mt-1">Submitted by {creator?.name}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{opportunity.description}</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Evaluation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Select 
                label="Overall Rating (1-5)"
                value={rating}
                onChange={e => setRating(e.target.value)}
                options={[
                  { value: '1', label: '1 - Poor' },
                  { value: '2', label: '2 - Fair' },
                  { value: '3', label: '3 - Average' },
                  { value: '4', label: '4 - Good' },
                  { value: '5', label: '5 - Excellent' },
                ]}
              />
              <Textarea 
                label="Comments" 
                placeholder="Provide constructive feedback for the student..." 
                rows={5} 
                required
                value={comments}
                onChange={e => setComments(e.target.value)}
              />
              <Button type="submit" fullWidth>Submit Evaluation</Button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
