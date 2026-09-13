import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { BookOpen, Users, Star, TrendingUp } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="text-2xl font-bold text-blue-600">Innovation Collaboration Hub</div>
        <div className="space-x-4">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="bg-white py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Empowering Innovation <br/>
              <span className="text-blue-600">Through Collaboration</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              A centralized platform connecting students, faculty mentors, and reviewers to discover opportunities, build multi-disciplinary teams, and drive groundbreaking projects.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/register">
                <Button className="px-8 py-4 text-lg shadow-lg">Get Started</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Find Opportunities</h3>
              <p className="text-gray-600">Browse a wide range of academic and research projects tailored to your skills and interests.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Teams</h3>
              <p className="text-gray-600">Connect with peers across departments to form complementary, high-performing teams.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Mentorship</h3>
              <p className="text-gray-600">Collaborate with experienced faculty mentors who guide your project to success.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600">Use our integrated task tracking and milestone systems to ensure steady progress.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Innovation Collaboration Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};
