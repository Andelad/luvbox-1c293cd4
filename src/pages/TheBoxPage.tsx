import React from 'react';
import PageHeader from '../PageHeader';
import OptimizedCube from '../OptimizedCube';

const TheBoxPage: React.FC = () => {
  return (
    <div className="w-full">
      <PageHeader 
        breadcrumbs={['The Box', 'Sub Page']}
      />
      <div className="flex justify-center py-8">
        <OptimizedCube />
      </div>
    </div>
  );
};

export default TheBoxPage;