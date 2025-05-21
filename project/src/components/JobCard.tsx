import React from 'react';
import { Heart } from 'lucide-react';

interface JobCardProps {
  company: string;
  logo: string;
  title: string;
  location: string;
  type: string;
  remote: boolean;
  level: string;
  experience: string;
  match: number;
  applicants: number;
  postedAgo: string;
}

export function JobCard({
  company,
  logo,
  title,
  location,
  type,
  remote,
  level,
  experience,
  match,
  applicants,
  postedAgo,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-1">
              <span>{location}</span>
              <span>{type}</span>
              {remote && <span>Remote</span>}
              <span>{level}</span>
              <span className="hidden sm:inline">{experience}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-blue-600">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        This position requires you to work closely with product managers and engineers to design user-centered experiences that meet business goals. You will be responsible for conducting user testing, analyzing feedback, and iterating on designs to enhance usability...
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-24 h-2 rounded-full overflow-hidden bg-gray-200">
              <div
                className={`h-full rounded-full ${
                  match >= 80 ? 'bg-blue-600' : match >= 60 ? 'bg-orange-500' : 'bg-green-500'
                }`}
                style={{ width: `${match}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">{match}%, {match >= 80 ? 'Good' : match >= 60 ? 'Fair' : 'Excellent'} match</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>{postedAgo}</span>
            <span>{applicants}+ applicants</span>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto">
          Apply
        </button>
      </div>
    </div>
  );
}