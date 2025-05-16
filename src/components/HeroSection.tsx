
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-barber-gray to-barber-lightgray">
      <div className="container-section py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="heading-1 mb-4">Gerencie sua barbearia com eficiência e estilo</h1>
            <p className="text-lg mb-6 text-gray-700 max-w-lg">
              Uma plataforma completa que conecta barbeiros aos seus clientes, simplificando o agendamento e a gestão do seu negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-barber-black text-white hover:bg-black/80 text-lg px-6 py-6">
                <Link to="/barber-login">Área do Barbeiro</Link>
              </Button>
              <Button variant="outline" className="border-barber-black text-barber-black hover:bg-barber-black hover:text-white text-lg px-6 py-6">
                <Link to="/client-login">Portal do Cliente</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-barber-blue/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="font-display text-xl font-semibold text-barber-black mb-2">Seu tempo é valioso</h3>
                  <p className="text-gray-700">Agendamentos simples para você e seus clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
