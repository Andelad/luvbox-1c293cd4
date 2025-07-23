import { PageHeader } from '@/app/components';
import { CONTENT } from '@/content';
import { Cube3D } from '@/shared/components/cube';
import React from 'react';

const TheBoxPage: React.FC = () => {
  const content = CONTENT.pages.theBox;

  return (
    <div className="page-wrapper">
      <PageHeader
        breadcrumbs={[content.title, 'Sub Page']}
      />
      <div className="flex justify-center py-8">
        <Cube3D />
      </div>
    </div>
  );
};

export default TheBoxPage;