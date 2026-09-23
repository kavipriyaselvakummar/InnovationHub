import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './contexts/AuthContext';

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
  const { loggedIn, role } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={loggedIn ? <Navigate to={`/${role}`} replace /> : <LandingPage />} />
        <Route path="/login" element={loggedIn ? <Navigate to={`/${role}`} replace /> : <LoginPage />} />
        <Route path="/register" element={loggedIn ? <Navigate to={`/${role}`} replace /> : <RegisterPage />} />

        {/* Student Routes */}
        <Route path="/student" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
        <Route path="/student/opportunities" element={<ProtectedRoute allowedRoles={['student']}><BrowseOpportunities /></ProtectedRoute>} />
        <Route path="/student/opportunities/:id" element={<ProtectedRoute allowedRoles={['student']}><OpportunityDetails /></ProtectedRoute>} />
        <Route path="/student/submit-opportunity" element={<ProtectedRoute allowedRoles={['student']}><SubmitOpportunity /></ProtectedRoute>} />
        <Route path="/student/requests" element={<ProtectedRoute allowedRoles={['student']}><MyRequests /></ProtectedRoute>} />
        <Route path="/student/team" element={<ProtectedRoute allowedRoles={['student']}><MyTeam /></ProtectedRoute>} />
        <Route path="/student/tasks" element={<ProtectedRoute allowedRoles={['student']}><StudentTasks /></ProtectedRoute>} />
        <Route path="/student/feedback" element={<ProtectedRoute allowedRoles={['student']}><StudentFeedback /></ProtectedRoute>} />

        {/* Faculty Routes */}
        <Route path="/faculty" element={<ProtectedRoute allowedRoles={['faculty']}><MentorDashboard /></ProtectedRoute>} />
        <Route path="/faculty/opportunities" element={<ProtectedRoute allowedRoles={['faculty']}><ReviewOpportunities /></ProtectedRoute>} />
        <Route path="/faculty/opportunities/:id" element={<ProtectedRoute allowedRoles={['faculty']}><OpportunityReview /></ProtectedRoute>} />
        <Route path="/faculty/requests" element={<ProtectedRoute allowedRoles={['faculty']}><TeamRequests /></ProtectedRoute>} />
        <Route path="/faculty/teams" element={<ProtectedRoute allowedRoles={['faculty']}><FacultyManageTeams /></ProtectedRoute>} />
        <Route path="/faculty/teams/:id" element={<ProtectedRoute allowedRoles={['faculty']}><TeamDetails /></ProtectedRoute>} />
        <Route path="/faculty/tasks" element={<ProtectedRoute allowedRoles={['faculty']}><AssignTasks /></ProtectedRoute>} />
        <Route path="/faculty/reports" element={<ProtectedRoute allowedRoles={['faculty']}><MentorReports /></ProtectedRoute>} />

        {/* Reviewer Routes */}
        <Route path="/reviewer" element={<ProtectedRoute allowedRoles={['reviewer']}><ReviewerDashboard /></ProtectedRoute>} />
        <Route path="/reviewer/opportunities" element={<ProtectedRoute allowedRoles={['reviewer']}><AssignedOpportunities /></ProtectedRoute>} />
        <Route path="/reviewer/opportunities/:id" element={<ProtectedRoute allowedRoles={['reviewer']}><EvaluateOpportunity /></ProtectedRoute>} />
        <Route path="/reviewer/history" element={<ProtectedRoute allowedRoles={['reviewer']}><ReviewHistory /></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute allowedRoles={['admin']}><ManageUsers /></ProtectedRoute>} />
        <Route path="/admin/opportunities" element={<ProtectedRoute allowedRoles={['admin']}><AdminManageOpportunities /></ProtectedRoute>} />
        <Route path="/admin/teams" element={<ProtectedRoute allowedRoles={['admin']}><AdminManageTeams /></ProtectedRoute>} />
        <Route path="/admin/reports" element={<ProtectedRoute allowedRoles={['admin']}><AdminReports /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
