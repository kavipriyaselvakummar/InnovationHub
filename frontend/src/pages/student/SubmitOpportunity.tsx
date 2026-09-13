import React, { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Textarea } from '../../components/ui/Textarea';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export const SubmitOpportunity: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    domain: '',
    teamSize: '3',
    requiredSkills: '',
    description: '',
    additionalReqs: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Opportunity submitted for review!');
    navigate('/student');
  };

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Submit an Opportunity</h1>
        <p className="text-gray-600 mt-1">Have a project idea? Submit it here to find teammates and mentors.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            label="Project Title" 
            placeholder="e.g. AI-Powered Study Assistant" 
            required 
            value={formData.title}
            onChange={e => setFormData({...formData, title: e.target.value})}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select 
              label="Domain"
              required
              value={formData.domain}
              onChange={e => setFormData({...formData, domain: e.target.value})}
              options={[
                { value: '', label: 'Select Domain' },
                { value: 'Artificial Intelligence', label: 'Artificial Intelligence' },
                { value: 'Web Development', label: 'Web Development' },
                { value: 'Data Science', label: 'Data Science' },
                { value: 'IoT & Electronics', label: 'IoT & Electronics' }
              ]}
            />
            <Input 
              label="Team Size" 
              type="number" 
              min="1" 
              max="10" 
              required 
              value={formData.teamSize}
              onChange={e => setFormData({...formData, teamSize: e.target.value})}
            />
          </div>

          <Input 
            label="Required Skills (comma separated)" 
            placeholder="e.g. React, Python, UI/UX" 
            required 
            value={formData.requiredSkills}
            onChange={e => setFormData({...formData, requiredSkills: e.target.value})}
          />

          <Textarea 
            label="Project Description" 
            placeholder="Describe your project, goals, and what you aim to achieve..." 
            rows={5} 
            required 
            value={formData.description}
            onChange={e => setFormData({...formData, description: e.target.value})}
          />

          <Textarea 
            label="Additional Requirements" 
            placeholder="Any specific commitments, lab access, etc." 
            rows={3} 
            value={formData.additionalReqs}
            onChange={e => setFormData({...formData, additionalReqs: e.target.value})}
          />

          <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
            <Button type="button" variant="outline" onClick={() => navigate('/student')}>Cancel</Button>
            <Button type="submit">Submit for Review</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};
