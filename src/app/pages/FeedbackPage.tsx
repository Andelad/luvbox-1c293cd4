import { PageHeader } from '@/app/components';
import { CONTENT } from '@/content';
import React, { useState } from 'react';

export default function FeedbackPage() {
  const content = CONTENT.pages.feedback;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', { name, email, feedback });
    alert(content.thankYou);
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="page-wrapper">
      <PageHeader
        breadcrumbs={[content.title]}
      />

      <div className="mb-8">
        <h1 className="page-title text-[48px] luvmap-brand">
          {content.title}
        </h1>
        <p className="text-app-body opacity-60 max-w-2xl text-center" style={{ color: 'var(--lb-black-700)' }}>
          {content.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-app-caption font-medium" style={{ color: 'var(--lb-black-800)' }}>
              {content.form.name}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-app-body focus:ring-purple-500"
              style={{ 
                border: '1px solid var(--lb-black-200)', 
                backgroundColor: 'var(--lb-black-0)'
              }}
              placeholder={content.form.placeholders.name}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-app-caption font-medium" style={{ color: 'var(--lb-black-800)' }}>
              {content.form.email}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-app-body focus:ring-purple-500"
              style={{ 
                border: '1px solid var(--lb-black-200)', 
                backgroundColor: 'var(--lb-black-0)'
              }}
              placeholder={content.form.placeholders.email}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="feedback" className="text-app-caption font-medium" style={{ color: 'var(--lb-black-800)' }}>
            {content.form.feedback}
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent h-32 text-app-body focus:ring-purple-500"
            style={{ 
              border: '1px solid var(--lb-black-200)', 
              backgroundColor: 'var(--lb-black-0)'
            }}
            placeholder={content.form.placeholders.feedback}
          />
        </div>
        <button
          type="submit"
          className="w-full font-semibold py-3 rounded-lg transition-colors hover:opacity-90 text-app-body"
          style={{ backgroundColor: 'var(--purple-500)', color: 'var(--lb-black-0)' }}
        >
          {content.form.submit}
        </button>
      </form>

      <div className="text-center opacity-60">
        <p className="text-app-caption" style={{ color: 'var(--lb-black-600)' }}>
          {content.footerNote}
        </p>
      </div>

      <div style={{ backgroundColor: 'var(--lb-black-50)' }} className="rounded-lg p-8 max-w-[700px]">
        <div className="space-y-6">
          <div>
            <label className="block text-app-body font-semibold mb-2" style={{ color: 'var(--lb-black-800)' }}>
              {content.rating.label}
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="w-8 h-8 text-[var(--purple-500)] hover:text-[var(--purple-600)] transition-colors"
                >
                  ⭐
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-app-body font-semibold mb-2" style={{ color: 'var(--lb-black-800)' }}>
              {content.additional.thoughts}
            </label>
            <textarea
              className="w-full h-32 p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:border-transparent text-app-body focus:ring-purple-500"
              style={{
                border: '1px solid var(--lb-black-200)',
                backgroundColor: 'var(--lb-black-0)'
              }}
              placeholder={content.form.placeholders.thoughts}
            />
          </div>

          <div>
            <label className="block text-app-body font-semibold mb-2" style={{ color: 'var(--lb-black-800)' }}>
              {content.additional.email}
            </label>
            <input
              type="email"
              className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-app-body focus:ring-purple-500"
              style={{
                border: '1px solid var(--lb-black-200)',
                backgroundColor: 'var(--lb-black-0)'
              }}
              placeholder={content.form.placeholders.email}
            />
          </div>

          <button
            className="px-8 py-3 rounded-lg text-app-body font-semibold transition-colors hover:opacity-90"
            style={{ backgroundColor: 'var(--purple-500)', color: 'var(--lb-black-0)' }}
          >
            {content.additional.submit}
          </button>
        </div>
      </div>

      <div className="mt-8 opacity-60">
        <p className="text-app-caption" style={{ color: 'var(--lb-black-800)' }}>
          {content.footerNote}
        </p>
      </div>
    </div>
  );
}