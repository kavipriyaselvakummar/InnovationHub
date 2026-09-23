import React, { useMemo } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getJoinRequests, getOpportunities } from '../../services';

export const MyRequests: React.FC = () => {
  const { currentUser } = useAuth();
  
  const requestsWithDetails = useMemo(() => {
    if (!currentUser) return [];
    const myReqs = getJoinRequests().filter(r => r.requesterId === currentUser.id);
    const opps = getOpportunities();
    return myReqs.map(req => {
      const opp = opps.find(o => o.id === req.opportunityId);
      return { ...req, opportunity: opp };
    }).filter(r => r.opportunity);
  }, [currentUser]);

  const columns: Column<any>[] = [
    { header: 'Type', accessor: () => 'Team Join Request' },
    { header: 'Opportunity/Project', accessor: (req) => req.opportunity?.title || 'Unknown' },
    { header: 'Date Submitted', accessor: (req) => new Date(req.date).toLocaleDateString() },
    { header: 'Status', accessor: (req) => <StatusBadge status={req.status} /> },
    { header: 'Action', accessor: (req) => (
        <Link to={`/student/opportunities/${req.opportunity?.id}`}>
          <Button variant="outline" className="py-1 px-3 text-xs">View</Button>
        </Link>
      )
    }
  ];

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Requests</h1>
        <p className="text-gray-600 mt-1">Track the status of your submitted team requests.</p>
      </div>

      <DataTable 
        data={requestsWithDetails} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="You have no pending requests."
      />
    </DashboardLayout>
  );
};
