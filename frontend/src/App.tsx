import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public
import { LandingPage } from './pages/public/LandingPage';
import { LoginPage } from './pages/public/LoginPage';
import { RegisterPage } from './pages/public/RegisterPage';

// Student
import { StudentDashboard } from './pages/student/StudentDashboard';
import { BrowseOpportunities } from './pages/student/BrowseOpportunities';
import { OpportunityDetails } from './pages/student/OpportunityDetails';
import { SubmitOpportunity } from './pages/student/SubmitOpportunity';
import { MyRequests } from './pages/student/MyRequests';
import { MyTeam } from './pages/student/MyTeam';
import { StudentTasks } from './pages/student/StudentTasks';
import { StudentFeedback } from './pages/student/StudentFeedback';

// Faculty
import { MentorDashboard } from './pages/faculty/MentorDashboard';
import { ReviewOpportunities } from './pages/faculty/ReviewOpportunities';
import { OpportunityReview } from './pages/faculty/OpportunityReview';
import { TeamRequests } from './pages/faculty/TeamRequests';
import { ManageTeams as FacultyManageTeams } from './pages/faculty/ManageTeams';
import { TeamDetails } from './pages/faculty/TeamDetails';
import { AssignTasks } from './pages/faculty/AssignTasks';
import { MentorReports } from './pages/faculty/MentorReports';

// Reviewer
import { ReviewerDashboard } from './pages/reviewer/ReviewerDashboard';
import { AssignedOpportunities } from './pages/reviewer/AssignedOpportunities';
import { EvaluateOpportunity } from './pages/reviewer/EvaluateOpportunity';
import { ReviewHistory } from './pages/reviewer/ReviewHistory';

// Admin
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ManageUsers } from './pages/admin/ManageUsers';
import { ManageOpportunities as AdminManageOpportunities } from './pages/admin/ManageOpportunities';
import { ManageTeams as AdminManageTeams } from './pages/admin/ManageTeams';
import { AdminReports } from './pages/admin/AdminReports';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/opportunities" element={<BrowseOpportunities />} />
        <Route path="/student/opportunities/:id" element={<OpportunityDetails />} />
        <Route path="/student/submit-opportunity" element={<SubmitOpportunity />} />
        <Route path="/student/requests" element={<MyRequests />} />
        <Route path="/student/team" element={<MyTeam />} />
        <Route path="/student/tasks" element={<StudentTasks />} />
        <Route path="/student/feedback" element={<StudentFeedback />} />

        {/* Faculty Routes */}
        <Route path="/faculty" element={<MentorDashboard />} />
        <Route path="/faculty/opportunities" element={<ReviewOpportunities />} />
        <Route path="/faculty/opportunities/:id" element={<OpportunityReview />} />
        <Route path="/faculty/requests" element={<TeamRequests />} />
        <Route path="/faculty/teams" element={<FacultyManageTeams />} />
        <Route path="/faculty/teams/:id" element={<TeamDetails />} />
        <Route path="/faculty/tasks" element={<AssignTasks />} />
        <Route path="/faculty/reports" element={<MentorReports />} />

        {/* Reviewer Routes */}
        <Route path="/reviewer" element={<ReviewerDashboard />} />
        <Route path="/reviewer/opportunities" element={<AssignedOpportunities />} />
        <Route path="/reviewer/opportunities/:id" element={<EvaluateOpportunity />} />
        <Route path="/reviewer/history" element={<ReviewHistory />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/opportunities" element={<AdminManageOpportunities />} />
        <Route path="/admin/teams" element={<AdminManageTeams />} />
        <Route path="/admin/reports" element={<AdminReports />} />
      </Routes>
    </Router>
  );
}

export default App;
