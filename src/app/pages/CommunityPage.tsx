import { PageHeader } from '@/app/components';
import { CONTENT } from '@/content';

export default function CommunityPage() {
  const content = CONTENT.pages.community;

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[content.title, 'Sub Page']}
      />

      <div className="content-area">
        <div className="text-center">
          <h2 className="text-heading text-[32px] mb-4 luvmap-brand">
            {content.title}
          </h2>
          <p className="text-body opacity-60">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
}