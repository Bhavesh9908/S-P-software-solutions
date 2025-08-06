import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom software solutions tailored to solve your business challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;