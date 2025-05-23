import { useState } from 'react';
import { X } from 'lucide-react';

export default function FeedbackModal({ isOpen = true, onClose = () => {} }) {
  const [visible, setVisible] = useState(isOpen);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[440px] relative mx-3 overflow-hidden">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-200 to-transparent z-0"></div>
        
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X size={20}  />
        </button>
        
        {/* Content */}
        <div className="flex flex-col items-center text-center sm:px-8 px-4 py-8 pt-12 ">
          <div className="mb-2 md:px-8 ">
            <span  role="img"  className="text-sm sm:text-xl  font-semibold">
                🚀 Feedback submitted successfully!
            </span>
         
          </div>
          {/* Message */}
          <p className="text-gray-600 mb-4 text-xs sm:text-sm">
            Thanks for sharing your thoughts. We&apos;ll get back to you soon.
          </p>
          
          {/* Button */}
          <button
            onClick={handleClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 sm:text-sm text-xs px-4 rounded-xl"
          >
            Back to jobs
          </button>
        </div>
      </div>
    </div>
  );
}