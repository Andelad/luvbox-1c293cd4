import React from 'react';
import { PageHeader } from '@/app/components';
import { Cube3D } from '@/shared/components/cube';

const TheBoxPage: React.FC = () => {
  return (
    <div className="w-full">
      <PageHeader 
        breadcrumbs={['The Box', 'Sub Page']}
      />
      <div className="flex justify-center py-8">
        <Cube3D />
      </div>
    </div>
  );
};

export default TheBoxPage;