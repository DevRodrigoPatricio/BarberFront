
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Home = () => {
  const popularServices = [
    {
      title: 'Corte Tradicional',
      description: 'Corte clássico com tesoura e máquina, incluindo acabamento com navalha.',
      price: 40,
      duration: '30 min'
    },
    {
      title: 'Barba Completa',
      description: 'Modelagem completa da barba com toalha quente e produtos especiais.',
      price: 35,
      duration: '25 min'
    },
    {
      title: 'Combo Cabelo + Barba',
      description: 'Nosso serviço mais popular, incluindo corte e barba completa.',
      price: 65,
      duration: '50 min'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <FeatureSection />
        
        {/* Popular Services Section */}
        <section className="bg-barber-lightgray py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-3">Serviços Populares</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Conheça os serviços mais solicitados pelos nossos clientes e descubra por que somos a escolha número um para cuidados masculinos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  duration={service.duration}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" className="border-barber-black text-barber-black hover:bg-barber-black hover:text-white">
                <Link to="/services">Ver todos os serviços</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-barber-blue py-16">
          <div className="container-section">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-2 mb-4">Pronto para transformar sua barbearia?</h2>
                  <p className="text-gray-700 mb-6">
                    Junte-se a milhares de profissionais que já estão usando nossa plataforma para aumentar a produtividade e melhorar a experiência dos clientes.
                  </p>
                  <Button className="bg-barber-black text-white hover:bg-black/80 text-lg px-6 py-6">
                    <Link to="/barber-login">Começar Agora</Link>
                  </Button>
                </div>
                <div className="bg-barber-gray p-6 rounded-lg">
                  <h3 className="font-display text-xl font-semibold text-barber-black mb-4">Vantagens</h3>
                  <ul className="space-y-3">
                    {['Redução de 30% nas faltas', 'Aumento de 25% nos agendamentos', 'Economia de 5 horas por semana', 'Satisfação dos clientes em 98%'].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-barber-darkblue mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
