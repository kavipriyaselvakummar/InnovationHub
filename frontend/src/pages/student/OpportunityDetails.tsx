import React, { useMemo } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';
import { useParams, useNavigate } from 'react-router-dom';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Button } from '../../components/Button';
import { getOpportunities, getUsers, getJoinRequests, saveJoinRequests, getTeams } from '../../services';
import { useAuth } from '../../contexts/AuthContext';

export const OpportunityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const opportunity = useMemo(() => getOpportunities().find(o => o.id === id), [id]);
  const creator = useMemo(() => opportunity ? getUsers().find(u => u.id === opportunity.creatorId) : null, [opportunity]);
  
  const existingRequest = useMemo(() => {
    if (!currentUser || !id) return null;
    return getJoinRequests().find(r => r.requesterId === currentUser.id && r.opportunityId === id);
  }, [currentUser, id]);

  const team = useMemo(() => {
    if (!id) return null;
    return getTeams().find(t => t.opportunityId === id);
  }, [id]);

  if (!opportunity) {
    return (
      <DashboardLayout navItems={studentNavItems}>
        <div className="text-center p-12">
          <h2 className="text-xl font-semibold">Opportunity not found</h2>
          <Button onClick={() => navigate('/student/opportunities')} className="mt-4">Back to Browse</Button>
        </div>
      </DashboardLayout>
    );
  }

  const handleJoin = () => {
    if (!currentUser) return;
    const reqs = getJoinRequests();
    const newReq = {
      id: 'req_' + Date.now(),
      requesterId: currentUser.id,
      opportunityId: opportunity.id,
      status: 'Pending' as const,
      date: new Date().toISOString()
    };
    saveJoinRequests([newReq, ...reqs]);
    alert('Request to join submitted!');
    navigate('/student/requests');
  };

  const isMember = team?.memberIds.includes(currentUser?.id || '');

  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate('/student/opportunities')} className="mb-4">
          &larr; Back to Browse
        </Button>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{opportunity.title}</h1>
            <p className="text-gray-600 mt-1">Created by {creator?.name} on {new Date(opportunity.createdAt).toLocaleDateString()}</p>
          </div>
          <StatusBadge status={opportunity.status} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{opportunity.description}</p>
            </div>
            {opportunity.problemStatement && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem Statement</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{opportunity.problemStatement}</p>
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Required Skills</h3>
              <div className="flex gap-2 flex-wrap">
                {opportunity.requiredSkills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Domain</p>
                <p className="font-medium text-gray-900">{opportunity.domain}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Team Size Required</p>
                <p className="font-medium text-gray-900">{opportunity.teamSize} members</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Members</p>
                <p className="font-medium text-gray-900">{team ? team.memberIds.length : 0} / {opportunity.teamSize}</p>
              </div>
            </div>

            <div className="mt-8">
              {isMember ? (
                <Button fullWidth disabled variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  You are a member
                </Button>
              ) : existingRequest ? (
                <Button fullWidth disabled variant="secondary">
                  Request {existingRequest.status}
                </Button>
              ) : (opportunity.status === 'Open' || opportunity.status === 'Published' || opportunity.status === 'Approved') ? (
                <Button fullWidth onClick={handleJoin}>
                  Request to Join Team
                </Button>
              ) : (
                <Button fullWidth disabled variant="secondary">
                  Not accepting members
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
