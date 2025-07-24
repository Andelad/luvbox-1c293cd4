import { PageHeader } from '@/app/components';
import { CONTENT } from '@/content';
import { Button } from '@/elements/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/elements/select';
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
            <h2 className="text-app-display mb-6">
              Your feedback helps us improve the product
            </h2>
            <p className="text-app-body">
              We love hearing from you and actively review all feedback received
            </p>
          </div>

          {/* Feedback Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Feedback Type Selection */}
            <div className="space-y-4">
              <label className="form-label-large">
                What kind of feedback do you have?
              </label>
              <Select value={feedbackType} onValueChange={(value: FeedbackType) => setFeedbackType(value)}>
                <SelectTrigger className="luvbox-form-base">
                  <div className="flex items-center gap-3">
                    {feedbackType === 'like' && <span className="text-app-body">😊</span>}
                    {feedbackType === 'dislike' && <span className="text-app-body">😞</span>}
                    {feedbackType === 'suggestion' && <span className="text-app-body">💡</span>}
                    {feedbackType === 'help' && <span className="text-app-body">🔍</span>}
                    <SelectValue placeholder="I like something" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="like">
                    <div className="flex items-center gap-3">
                      <span className="text-app-body">😊</span>
                      <span>I like something</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="dislike">
                    <div className="flex items-center gap-3">
                      <span className="text-app-body">😞</span>
                      <span>I don't like something</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="suggestion">
                    <div className="flex items-center gap-3">
                      <span className="text-app-body">💡</span>
                      <span>I have a suggestion</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="help">
                    <div className="flex items-center gap-3">
                      <span className="text-app-body">🔍</span>
                      <span>I need help / I'm looking for information</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Conditional Feedback Text Area */}
            {feedbackType && (
              <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                <label className="form-label-large">
                  {getFeedbackPrompt()}
                </label>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="luvbox-form-base"
                  placeholder={getFeedbackPrompt()}
                  rows={6}
                />
              </div>
            )}

            {/* Support Link and Submit Button */}
            <div className="modal-footer">
              <Button
                type="button"
                variant="link"
                onClick={() => window.open('mailto:support@luvbox.com', '_blank')}
              >
                Have an issue for support?
              </Button>

              <Button
                type="submit"
                variant="primary"
                size="large"
                disabled={!feedbackType || !feedbackText.trim()}
              >
                Submit Feedback
              </Button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center max-w-2xl">
          <p className="text-app-body">
            {content.footerNote}
          </p>
        </div>
      </div>
    </div>
  );
}