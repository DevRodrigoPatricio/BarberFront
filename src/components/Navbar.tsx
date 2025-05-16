
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-display font-bold text-barber-black">Barber<span className="text-barber-darkblue">Hub</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-barber-darkblue transition-colors">
              Início
            </Link>
            <Link to="/services" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-barber-darkblue transition-colors">
              Serviços
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-barber-darkblue transition-colors">
              Sobre
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-barber-darkblue transition-colors">
              Contato
            </Link>
            <Separator orientation="vertical" className="h-6 mx-2" />
            <Button variant="outline" className="border-barber-darkblue text-barber-darkblue hover:bg-barber-darkblue hover:text-white">
              <Link to="/client-login">Portal do Cliente</Link>
            </Button>
            <Button className="bg-barber-black text-white hover:bg-black/80">
              <Link to="/barber-login">Área do Barbeiro</Link>
            </Button>
          </div>
          
          <div className="flex md:hidden items-center">
            <button 
              type="button" 
              className="p-2 rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-barber-gray hover:text-barber-darkblue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-barber-gray hover:text-barber-darkblue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-barber-gray hover:text-barber-darkblue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-barber-gray hover:text-barber-darkblue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <Separator className="my-2" />
            <Link 
              to="/client-login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-barber-darkblue hover:bg-barber-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portal do Cliente
            </Link>
            <Link 
              to="/barber-login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-barber-black hover:bg-barber-gray"
              onClick={() => setMobileMenuOpen(false)}
            >
              Área do Barbeiro
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
