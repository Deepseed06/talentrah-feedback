import React, { useState } from 'react';
import { Bell, ChevronDown, Globe, Plus, Search, Settings, Sliders } from 'lucide-react';
import { JobCard } from './components/JobCard';
import { ProfileCard } from './components/ProfileCard';
import { Sidebar } from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import CompletedModal from './components/CompletedModal'

function App() {
  const [selectedFilters] = useState([
    'UI/UX Designer',
    'Product Designer',
    'Hybrid',
    'Full-time',
    'Lagos, Nigeria',
    'Senior',
  ]);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
     <Routes>
      <Route path="/completed" element={<CompletedModal/>} />
    </Routes>
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button 
                className="lg:hidden mr-2"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-blue-600 text-2xl font-bold">Talentrah</h1>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Create job loop
              </button>
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">English</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
              <button className="text-blue-600 border border-blue-600 px-4 py-1.5 rounded-lg">
                Premium
              </button>
            </div>
            <div className="flex lg:hidden items-center space-x-3">
              <Bell className="w-6 h-6 text-gray-600" />
              <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded-lg text-sm">
                Premium
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="lg:hidden bg-white border-b">
        <div className="flex overflow-x-auto p-2 space-x-2 whitespace-nowrap">
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm">
            Recommended
          </button>
          <button className="text-gray-600 px-4 py-1.5 rounded-lg text-sm">
            Top matched
          </button>
          <button className="text-gray-600 px-4 py-1.5 rounded-lg text-sm">
            Most recent
          </button>
          <button className="text-gray-600 px-4 py-1.5 rounded-lg text-sm">
            Saved jobs
          </button>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className={`${showMobileMenu ? 'block' : 'hidden'} lg:block lg:col-span-2`}>
          <Sidebar />
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="hidden lg:flex items-center space-x-4 mb-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Recommended
              </button>
              <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center">
                Top matched
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
              <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                Most recent
              </button>
              <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg">
                Saved jobs
              </button>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
                {selectedFilters.map((filter) => (
                  <span
                    key={filter}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full flex items-center text-sm"
                  >
                    {filter}
                    <button className="ml-2 text-gray-500 hover:text-gray-700">×</button>
                  </span>
                ))}
                <button className="bg-gray-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  +5
                </button>
              </div>
              <button className="flex items-center text-gray-700">
                <Sliders className="w-4 h-4 mr-2" />
                Advance filters
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <JobCard
              company="Company 1"
              logo="/company1.png"
              title="Senior UI/UX Designer"
              location="Lagos, Nigeria"
              type="Full-time"
              remote={true}
              level="Senior"
              experience="2+ years Experience"
              match={82}
              applicants={200}
              postedAgo="4 days ago"
            />
            <JobCard
              company="Company 2"
              logo="/company2.png"
              title="Senior UI/UX Designer"
              location="Lagos, Nigeria"
              type="Full-time"
              remote={true}
              level="Senior"
              experience="2+ years Experience"
              match={60}
              applicants={200}
              postedAgo="4 days ago"
            />
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-3">
          <ProfileCard />
        </div>
      </main>
    </div>
    </>

  );
}

export default App;