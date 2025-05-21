import React from 'react';

export function ProfileCard() {
  return (
    <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
        <img
          src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold mb-1">Mercy Benjamin</h2>
      <p className="text-gray-600 mb-6">UI/UX Designer</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-900">0</div>
          <div className="text-sm text-gray-600">Applied Jobs</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-900">0</div>
          <div className="text-sm text-gray-600">Generated Resumes</div>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-center mb-2">
          <div className="text-lg font-semibold text-gray-900">0</div>
          <div className="text-sm text-gray-600">Generated Cover Letters</div>
        </div>
      </div>

      <button className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg hover:bg-gray-200">
        View profile
      </button>
    </div>
  );
}