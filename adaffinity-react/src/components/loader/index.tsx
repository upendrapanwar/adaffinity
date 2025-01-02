import React from 'react';
import { Spinner } from 'flowbite-react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" style={{ top: 0, left: 0 }}>
      <Spinner color="gray" size="xl" />
    </div>
  );
};