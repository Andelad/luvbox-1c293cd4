import React from 'react';
import PageHeader from '../../components/sections/PageHeader';
import Cube3D from '../../components/cube/Cube3D';

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