
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-barber-black text-white">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <span className="text-2xl font-display font-bold">Barber<span className="text-barber-blue">Hub</span></span>
            </Link>
            <p className="mt-4 text-gray-300">
              Simplifique a gestão da sua barbearia com nossa plataforma completa.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Para Clientes</h3>
            <ul className="space-y-2">
              <li><Link to="/book" className="text-gray-300 hover:text-white transition-colors">Agendamento</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/client-login" className="text-gray-300 hover:text-white transition-colors">Portal do Cliente</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">Perguntas Frequentes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Para Barbeiros</h3>
            <ul className="space-y-2">
              <li><Link to="/barber-login" className="text-gray-300 hover:text-white transition-colors">Área do Barbeiro</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors">Recursos</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Preços</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors">Suporte</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-gray-300">contato@barberhub.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-gray-300">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BarberHub. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Termos de Uso</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
