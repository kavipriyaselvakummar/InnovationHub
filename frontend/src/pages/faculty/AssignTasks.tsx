import React, { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Textarea } from '../../components/ui/Textarea';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { mockTeams, mockUsers } from '../../data/mockData';

export const AssignTasks: React.FC = () => {
  const navigate = useNavigate();
  const [teamId, setTeamId] = useState('');
  
  // We mock fetching members based on the selected team
  const selectedTeam = mockTeams.find(t => t.id === teamId);
  const teamMembers = selectedTeam 
    ? mockUsers.filter(u => selectedTeam.memberIds.includes(u.id)) 
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Task assigned successfully!');
    navigate('/faculty/teams');
  };

  return (
    <DashboardLayout navItems={facultyNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Assign Tasks</h1>
        <p className="text-gray-600 mt-1">Create and assign deliverables to your team members.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="Task Title" placeholder="e.g. Develop backend API" required />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select 
              label="Select Team"
              required
              value={teamId}
              onChange={e => setTeamId(e.target.value)}
              options={[
                { value: '', label: 'Select a Team' },
                ...mockTeams.map(t => ({ value: t.id, label: t.name }))
              ]}
            />
            <Select 
              label="Assign To"
              required
              disabled={!teamId}
              options={[
                { value: '', label: 'Select a Member' },
                ...teamMembers.map(u => ({ value: u.id, label: u.name }))
              ]}
            />
          </div>

          <Input label="Deadline" type="date" required />

          <Textarea 
            label="Task Description" 
            placeholder="Provide clear instructions and expectations..." 
            rows={4} 
            required 
          />

          <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
            <Button type="button" variant="outline" onClick={() => navigate('/faculty')}>Cancel</Button>
            <Button type="submit">Create Task</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};
