import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { mockTeams, mockOpportunities } from '../../data/mockData';
import { DataTable } from '../../components/ui/DataTable';
import type { Column } from '../../components/ui/DataTable';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export const ManageTeams: React.FC = () => {
  const mentoredTeams = mockTeams.map(team => {
    const opportunity = mockOpportunities.find(o => o.id === team.opportunityId);
    return { ...team, opportunity };
  });

  const columns: Column<typeof mentoredTeams[0]>[] = [
    {
      header: 'Team Name',
      accessor: 'name',
    },
    {
      header: 'Project',
      accessor: (team) => team.opportunity?.title,
    },
    {
      header: 'Members',
      accessor: (team) => `${team.memberIds.length} / ${team.opportunity?.teamSize || 0}`,
    },
    {
      header: 'Progress',
      accessor: (team) => (
        <div className="w-32">
          <ProgressBar progress={team.progress} />
        </div>
      ),
    },
    {
      header: 'Action',
      accessor: (team) => (
        <Link to={`/faculty/teams/${team.id}`}>
          <Button variant="outline" className="py-1 px-3 text-xs">View Team</Button>
        </Link>
      ),
    }
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
