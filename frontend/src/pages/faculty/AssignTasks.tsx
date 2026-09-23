import React, { useState, useMemo } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { facultyNavItems } from './navConfig';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Textarea } from '../../components/ui/Textarea';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { getTeams, getUsers, getTasks, saveTasks } from '../../services';
import { useAuth } from '../../contexts/AuthContext';

export const AssignTasks: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [teamId, setTeamId] = useState('');
  const [title, setTitle] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  
  const myTeams = useMemo(() => getTeams().filter(t => t.mentorId === currentUser?.id), [currentUser]);
  
  const selectedTeam = myTeams.find(t => t.id === teamId);
  const teamMembers = useMemo(() => {
    if (!selectedTeam) return [];
    return getUsers().filter(u => selectedTeam.memberIds.includes(u.id));
  }, [selectedTeam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tasks = getTasks();
    saveTasks([{
      id: 'task_' + Date.now(),
      title,
      description,
      teamId,
      assigneeId,
      deadline,
      status: 'To Do'
    }, ...tasks]);
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
          <Input label="Task Title" placeholder="e.g. Develop backend API" required value={title} onChange={(e: any) => setTitle(e.target.value)} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select 
              label="Select Team"
              required
              value={teamId}
              onChange={(e: any) => setTeamId(e.target.value)}
              options={[{ value: '', label: 'Select a Team' }, ...myTeams.map(t => ({ value: t.id, label: t.name }))]}
            />
            <Select 
              label="Assign To"
              required
              disabled={!teamId}
              value={assigneeId}
              onChange={(e: any) => setAssigneeId(e.target.value)}
              options={[{ value: '', label: 'Select a Member' }, ...teamMembers.map(u => ({ value: u.id, label: u.name }))]}
            />
          </div>

          <Input label="Deadline" type="date" required value={deadline} onChange={(e: any) => setDeadline(e.target.value)} />

          <Textarea label="Task Description" placeholder="Provide clear instructions and expectations..." rows={4} required value={description} onChange={(e: any) => setDescription(e.target.value)} />

          <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
            <Button type="button" variant="outline" onClick={() => navigate('/faculty')}>Cancel</Button>
            <Button type="submit">Create Task</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};
