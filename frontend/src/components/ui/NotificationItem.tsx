import React from 'react';

interface NotificationItemProps {
  title: string;
  time: string;
  isRead?: boolean;
  type?: 'info' | 'success' | 'warning' | 'error';
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ 
  title, 
  time, 
  isRead = false,
  type = 'info' 
}) => {
  const getDotColor = () => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className={`flex gap-4 items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0 ${isRead ? 'opacity-70' : ''}`}>
      <div className={`w-2 h-2 mt-2 rounded-full ${getDotColor()}`}></div>
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5">{time}</p>
      </div>
    </div>
  );
};
