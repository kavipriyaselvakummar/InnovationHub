import React, { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';

import { Button } from '../../components/Button';
import { getJoinRequests, updateJoinRequest, getOpportunities, getUsers, getTeams, saveTeams, updateTeam } from '../../services';
import { useAuth } from '../../contexts/AuthContext';

export const TeamRequests: React.FC = () => {
  const { currentUser } = useAuth();
  const [requests, setRequests] = useState(() => {
    const allReqs = getJoinRequests().filter(r => r.status === 'Pending');
    const opps = getOpportunities();
    const users = getUsers();
    return allReqs.map(req => {
      const opp = opps.find(o => o.id === req.opportunityId);
      const student = users.find(u => u.id === req.requesterId);
      return { ...req, opportunity: opp, student };
    }).filter(r => r.opportunity?.creatorId === currentUser?.id);
  });

  const handleAccept = (reqId: string) => {
    const reqIndex = requests.findIndex(r => r.id === reqId);
    if (reqIndex === -1) return;
    const req = requests[reqIndex];
    
    // Update request status
    const updatedReq = { ...req, status: 'Approved' as const };
    updateJoinRequest(updatedReq);

    // Add to team or create team
    const teams = getTeams();
    let team = teams.find(t => t.opportunityId === req.opportunityId);
    if (team) {
      if (!team.memberIds.includes(req.requesterId)) {
        updateTeam({ ...team, memberIds: [...team.memberIds, req.requesterId] });
      }
    } else {
      saveTeams([{
        id: 't_' + Date.now(),
        name: req.opportunity?.title + ' Team',
        opportunityId: req.opportunityId,
        mentorId: currentUser?.id || '',
        memberIds: [req.requesterId],
        status: 'Active',
        progress: 0
      }, ...teams]);
    }
    
    setRequests(requests.filter(r => r.id !== reqId));
    alert('Request accepted!');
  };

  const handleReject = (reqId: string) => {
    const req = requests.find(r => r.id === reqId);
    if (!req) return;
    updateJoinRequest({ ...req, status: 'Rejected' as const });
    setRequests(requests.filter(r => r.id !== reqId));
  };

  const columns: Column<any>[] = [
    { header: 'Student', accessor: (req) => req.student?.name || 'Unknown' },
    { header: 'Project', accessor: (req) => req.opportunity?.title || 'Unknown' },
    { header: 'Date', accessor: (req) => new Date(req.date).toLocaleDateString() },
    {
      header: 'Action',
      accessor: (req) => (
        <div className="flex gap-2">
          <Button onClick={() => handleAccept(req.id)} className="py-1 px-3 text-xs bg-green-600 hover:bg-green-700">Approve</Button>
          <Button onClick={() => handleReject(req.id)} variant="outline" className="py-1 px-3 text-xs text-red-600 border-red-200 hover:bg-red-50">Reject</Button>
        </div>
      ),
    }
  ];

  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Team Requests</h1>
        <p className="text-gray-600 mt-1">Manage student requests to join active project teams.</p>
      </div>

      <DataTable 
        data={requests} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="No pending team requests for your opportunities."
      />
    </DashboardLayout>
  );
};
