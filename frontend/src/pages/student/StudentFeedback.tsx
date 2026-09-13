import React from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { studentNavItems } from './navConfig';


export const StudentFeedback: React.FC = () => {
  return (
    <DashboardLayout navItems={studentNavItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Feedback & Evaluations</h1>
        <p className="text-gray-600 mt-1">Review feedback from mentors and peer reviewers.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Feedback</h2>
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">Project Proposal Review</h3>
              <span className="text-xs text-gray-500">Oct 12, 2026</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              "Great proposal overall. The AI vision aspect is solid, but please elaborate more on the dataset you plan to use for training. Consider privacy implications."
            </p>
            <p className="text-xs text-blue-600 font-medium">- Dr. Alan Turing (Faculty Mentor)</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">UI Prototype Review</h3>
              <span className="text-xs text-gray-500">Oct 05, 2026</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              "The screens look clean and accessible. Make sure the color contrast meets WCAG AAA standards since this is an accessibility app."
            </p>
            <p className="text-xs text-blue-600 font-medium">- Dr. Ada Lovelace (Reviewer)</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
