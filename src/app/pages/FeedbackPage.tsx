import { PageHeader } from '@/app/components';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/assets/ui/select';
import { CONTENT } from '@/content';
import React, { useState } from 'react';

type FeedbackType = 'like' | 'dislike' | 'suggestion' | 'help' | '';

export default function FeedbackPage() {
  const content = CONTENT.pages.feedback;
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('like');
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackType) {
      alert('Please select a feedback type');
      return;
    }
    console.log('Feedback submitted:', { feedbackType, feedbackText });
    alert(content.thankYou);
    setFeedbackType('');
    setFeedbackText('');
  };

  const getFeedbackPrompt = () => {
    switch (feedbackType) {
      case 'like':
        return 'What do you like most about LuvBox?';
      case 'dislike':
        return 'What would you like us to improve?';
      case 'suggestion':
        return 'What feature or improvement would you like to see?';
      case 'help':
        return 'How can we help you? Describe your question or issue.';
      default:
        return 'Please share your feedback...';
    }
  };

  return (
    <div className="page-wrapper">
      <PageHeader
        breadcrumbs={[content.title]}
      />

      <div className="flex flex-col items-center max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 luvmap-brand" style={{ color: 'var(--lb-black-900)' }}>
              Your feedback helps us improve the product
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: 'var(--lb-black-600)' }}>
              We love hearing from you and actively review all feedback received
            </p>
          </div>

          {/* Feedback Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Feedback Type Selection */}
            <div className="space-y-4">
              <label className="text-lg font-medium" style={{ color: 'var(--lb-black-800)' }}>
                What kind of feedback do you have?
              </label>
              <Select value={feedbackType} onValueChange={(value: FeedbackType) => setFeedbackType(value)}>
                <SelectTrigger
                  className="w-full text-lg"
                  style={{
                    height: '48px',
                    border: `2px solid ${feedbackType ? 'var(--purple-500)' : 'var(--lb-black-200)'}`,
                    backgroundColor: 'var(--lb-black-0)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    {feedbackType === 'like' && <span className="text-lg">😊</span>}
                    {feedbackType === 'dislike' && <span className="text-lg">😞</span>}
                    {feedbackType === 'suggestion' && <span className="text-lg">💡</span>}
                    {feedbackType === 'help' && <span className="text-lg">🔍</span>}
                    <SelectValue placeholder="I like something" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="like">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">😊</span>
                      <span>I like something</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="dislike">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">😞</span>
                      <span>I don't like something</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="suggestion">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">💡</span>
                      <span>I have a suggestion</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="help">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🔍</span>
                      <span>I need help / I'm looking for information</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Conditional Feedback Text Area */}
            {feedbackType && (
              <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                <label className="text-lg font-medium" style={{ color: 'var(--lb-black-800)' }}>
                  {getFeedbackPrompt()}
                </label>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full min-h-[160px] p-4 rounded-lg resize-none text-lg focus:outline-none focus:ring-3 focus:ring-purple-200"
                  style={{
                    border: '2px solid var(--lb-black-200)',
                    backgroundColor: 'var(--lb-black-0)'
                  }}
                  placeholder={getFeedbackPrompt()}
                  rows={6}
                />
              </div>
            )}

            {/* Support Link */}
            <div className="flex items-center justify-between pt-6">
              <button
                type="button"
                className="text-lg underline hover:no-underline transition-all"
                style={{ color: 'var(--lb-black-600)' }}
                onClick={() => window.open('mailto:support@luvbox.com', '_blank')}
              >
                Have an issue for support?
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!feedbackType || !feedbackText.trim()}
                className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  minHeight: '48px',
                  backgroundColor: 'var(--purple-500)',
                  color: 'var(--lb-black-0)'
                }}
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center max-w-2xl">
          <p className="text-sm opacity-60" style={{ color: 'var(--lb-black-600)' }}>
            {content.footerNote}
          </p>
        </div>
      </div>
    </div>
  );
}