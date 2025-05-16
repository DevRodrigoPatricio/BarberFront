
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  imageSrc?: string;
}

const ServiceCard = ({ title, description, price, duration, imageSrc }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {imageSrc && (
        <div className="aspect-[3/2] overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-display">{title}</CardTitle>
        <CardDescription className="flex items-center justify-between">
          <span className="text-gray-600">{duration}</span>
          <span className="text-lg font-medium text-barber-black">{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-barber-black text-white hover:bg-black/80">
          <Link to="/book">Agendar</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
