import { useState } from 'react';
import { Search, ClipboardList, FileText, Settings, HeadphonesIcon, MessageSquareMore } from 'lucide-react';
import { FeedbackModal } from './FeedbackModal';

export function Sidebar() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <div>
      <div className="bg-white rounded-lg p-2 mb-4 border border-gray-200">
        <div className="flex items-center space-x-2 bg-blue-600 text-white p-2 rounded-lg mb-2">
          <Search className="w-5 h-5" />
          <span>Jobs</span>
        </div>
        <button className="w-full flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <ClipboardList className="w-5 h-5" />
          <span>Job tracker</span>
        </button>
        <button className="w-full flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <FileText className="w-5 h-5" />
          <span>Resume builder</span>
        </button>
        <button className="w-full flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>

      <div className="bg-white rounded-lg p-2 mb-4 border border-gray-200">
        <button className="w-full flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <HeadphonesIcon className="w-5 h-5" />
          <span>Mentorship</span>
        </button>
        <button
          onClick={() => setIsFeedbackOpen(true)}
          className="w-full flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <MessageSquareMore className="w-5 h-5" />
          <span>Feedback</span>
        </button>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 text-center">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/>
          </svg>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          You have 10 free credits! Use them to unlock premium features and maximize your job search. Once you run out, upgrade to keep going!
        </p>
        <div className="bg-white rounded-lg p-2 mb-3">
          <div className="flex items-center justify-between text-sm">
            <span>Usage Credits</span>
            <span className="font-semibold">8/10</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div className="w-4/5 h-full bg-blue-600 rounded-full" />
          </div>
        </div>
        <button className="text-blue-600 text-sm font-medium">
          Upgrade now
        </button>
      </div>

      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </div>
  );
}