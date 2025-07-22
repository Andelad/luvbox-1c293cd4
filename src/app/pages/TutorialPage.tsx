import { PageHeader } from '@/app/components';
import { CONTENT } from '@/content';

export default function TutorialPage() {
  const content = CONTENT.pages.tutorial;

  return (
    <div className="page-wrapper">
      <PageHeader
        breadcrumbs={[content.title]}
      />

      <div className="empty-page-content">
        <div className="empty-page-inner">
          <h2 className="page-title text-[32px] luvbox-brand">
            {content.title}
          </h2>
          <p className="page-subtitle">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
}