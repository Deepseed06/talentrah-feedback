import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import CompletedModal from './CompletedModal'

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  // const [showCompletedModal, setShowCompletedModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission logic here (e.g., API call)
    navigate('/completed'); // Navigate to the "Thank You" page after submission
    onClose();
    // setShowCompletedModal(true)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl text-sm w-full max-w-sm">
        <div className="flex items-center justify-between px-3 mt-4 ">
          <h2 className="text-sm font-semibold">Feedback</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-7 h-7" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-2">
            <label className="block mb-4">
              <span className="text-gray-700">
                <span className="text-red-500">*</span> What would you like to tell us?
              </span>
            </label>
            <div className="space-y-2 text-sm">
              {[
                'Bug report',
                'Feature request',
                'User experience feedback',
                'Subscription and Membership',
                'Others',
              ].map((option) => (
                <label key={option} className="flex p-2 text-[14px] bg-gray-100 items-center">
                  <input
                    type="radio"
                    name="feedbackType"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-3 h-3 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-2">
            <label className="block my-4">
              <span className="text-gray-700">
                <span className="text-red-500">*</span>Can you give us more details?
              </span>
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full h-24 px-3 bg-gray-50 text-xs py-2 border rounded-lg"
              placeholder="Please describe your experience. The more specific you are, the better we can address your feedback"
            />
          </div>

          <div className="flex sm:hidden flex-col sm:text-sm sm:flex-row gap-2 sm:space-x-3">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
          <div className="sm:flex hidden  sm:text-sm sm:flex-row gap-2 sm:space-x-3">
          <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Submit
            </button>
           
          </div>
        </form>
        {/* {
          showCompletedModal && <CompletedModal/>
        }
         */}
      </div>
    </div>
  );
}