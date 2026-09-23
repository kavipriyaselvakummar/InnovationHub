import React from 'react';
import type { Opportunity } from '../../types';
import { StatusBadge } from './StatusBadge';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

interface OpportunityCardProps {
  opportunity: Opportunity;
  viewPath?: string;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity, viewPath }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{opportunity.title}</h3>
        <StatusBadge status={opportunity.status} />
      </div>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">{opportunity.description}</p>
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center text-sm">
          <span className="font-medium text-gray-700 w-24">Domain:</span>
          <span className="text-gray-600 truncate">{opportunity.domain}</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="font-medium text-gray-700 w-24">Team Size:</span>
          <span className="text-gray-600">{opportunity.teamSize} members</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="font-medium text-gray-700 w-24">Skills:</span>
          <div className="flex gap-1 flex-wrap">
            {opportunity.requiredSkills.map((skill: string) => (
              <span key={skill} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">{skill}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-500">Created: {new Date(opportunity.createdAt).toLocaleDateString()}</span>
        {viewPath && (
          <Link to={`${viewPath}/${opportunity.id}`}>
            <Button variant="outline" className="py-1 px-3 text-sm">View Details</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
