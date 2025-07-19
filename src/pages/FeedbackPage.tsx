import React from 'react';
import PageHeader from '../components/sections/PageHeader';

export default function FeedbackPage() {
  return (
    <div className="page-wrapper">
      <PageHeader 
        breadcrumbs={['Feedback', 'Sub Page']}
        actionIcon={
          <svg fill="none" viewBox="0 0 24 24">
            <g>
              <path d="M2 17V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V14C22 14.55 21.8042 15.0208 21.4125 15.4125C21.0208 15.8042 20.55 16 20 16H6L2 20V17ZM4 14H20V4H4V14Z" fill="#1C1B1F" />
            </g>
          </svg>
        }
      />
      
      <div className="mb-8">
        <h1 className="page-title text-[48px] luvbox-brand">
          Feedback
        </h1>
        <p className="text-body max-w-[600px]">
          We'd love to hear your thoughts and suggestions. Your feedback helps us improve LuvBox and create a better experience for everyone.
        </p>
      </div>
      
      <div className="bg-[#f8f8f8] rounded-lg p-8 max-w-[700px]">
        <div className="space-y-6">
          <div>
            <label className="block font-['Source_Sans_3'] font-semibold text-[#3d3535] text-[16px] mb-2">
              How would you rate your experience?
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="w-8 h-8 text-[#8881cc] hover:text-[#6f67b8] transition-colors"
                >
                  ⭐
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-['Source_Sans_3'] font-semibold text-[#3d3535] text-[16px] mb-2">
              What's on your mind?
            </label>
            <textarea
              className="w-full h-32 p-4 rounded-lg border border-[rgba(61,53,53,0.2)] bg-white resize-none focus:outline-none focus:ring-2 focus:ring-[#8881cc] focus:border-transparent"
              placeholder="Share your thoughts, suggestions, or report any issues..."
            />
          </div>

          <div>
            <label className="block font-['Source_Sans_3'] font-semibold text-[#3d3535] text-[16px] mb-2">
              Contact Email (Optional)
            </label>
            <input
              type="email"
              className="w-full p-4 rounded-lg border border-[rgba(61,53,53,0.2)] bg-white focus:outline-none focus:ring-2 focus:ring-[#8881cc] focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <button className="bg-[#8881cc] text-white px-8 py-3 rounded-lg font-['Source_Sans_3'] font-semibold hover:bg-[#6f67b8] transition-colors">
            Send Feedback
          </button>
        </div>
      </div>

      <div className="mt-8 text-[#3d3535] opacity-60">
        <p className="font-['Source_Sans_3'] text-[14px]">
          Your feedback is important to us and helps shape the future of LuvBox. Thank you for taking the time to share your thoughts!
        </p>
      </div>
    </div>
  );
}