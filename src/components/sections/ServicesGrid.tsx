import React from 'react';
import { SERVICES_LIST } from '../../constants/services';
import { ServiceCard } from './ServiceCard';

interface ServicesGridProps {
  variant?: 'compact' | 'detailed';
  limit?: number;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  variant = 'compact',
  limit,
}) => {
  const displayServices = limit ? SERVICES_LIST.slice(0, limit) : SERVICES_LIST;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayServices.map((service) => (
        <ServiceCard key={service.id} service={service} variant={variant} />
      ))}
    </div>
  );
};
