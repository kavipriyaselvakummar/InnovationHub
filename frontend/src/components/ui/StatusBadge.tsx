import React from 'react';

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'open':
      case 'approved':
      case 'active':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'under review':
      case 'pending':
      case 'in progress':
      case 'forming':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor()}`}>
      {status}
    </span>
  );
};
