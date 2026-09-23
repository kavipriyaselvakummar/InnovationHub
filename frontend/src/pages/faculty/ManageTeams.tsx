import React, { useMemo } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { getTeams, getOpportunities } from '../../services';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const ManageTeams: React.FC = () => {
  const { currentUser } = useAuth();
  const mentoredTeams = useMemo(() => {
    if (!currentUser) return [];
    const allTeams = getTeams().filter(t => t.mentorId === currentUser.id);
    const opps = getOpportunities();
    return allTeams.map(team => {
      const opp = opps.find(o => o.id === team.opportunityId);
      return { ...team, opportunity: opp };
    });
  }, [currentUser]);

  const columns: Column<any>[] = [
    { header: 'Team Name', accessor: 'name' },
    { header: 'Project', accessor: (team) => team.opportunity?.title },
    { header: 'Members', accessor: (team) => `${team.memberIds.length} / ${team.opportunity?.teamSize || 0}` },
    { header: 'Progress', accessor: (team) => <div className="w-32"><ProgressBar progress={team.progress} /></div> },
    { header: 'Action', accessor: (team) => <Link to={`/faculty/teams/${team.id}`}><Button variant="outline" className="py-1 px-3 text-xs">View Team</Button></Link> }
  ];

  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Teams</h1>
        <p className="text-gray-600 mt-1">Oversee teams and monitor their overall project progress.</p>
      </div>

      <DataTable 
        data={mentoredTeams} 
        columns={columns} 
        keyExtractor={(item) => item.id} 
        emptyMessage="You are not mentoring any teams yet."
      />
    </DashboardLayout>
  );
};
