"use client";

import React, { useState } from 'react';
import HeaderApp from '../../components/HeaderApplication/HeaderApp';
import SidebarApp from '../../components/SidebarApp/SidebarApp';
import { LocationProvider } from '@/contexts/LocationContext';
import ApplicationDashboard from '@/components/ApplicationDashboard/ApplicationDashboard';
// Importe os componentes das outras páginas quando estiverem implementados
// import PaginaDois from '@/components/PaginaDois';
// import PaginaTres from '@/components/PaginaTres';

const ApplicationHome = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const getPageComponent = () => {
    switch (activePage) {
      case 'dashboard':
        return <ApplicationDashboard />;
      case 'paginaDois':
        // Retorna <PaginaDois /> quando implementado
        return <div>Pagina Dois</div>;
      case 'paginaTres':
        // Retorna <PaginaTres /> quando implementado
        return <div>Pagina Tres</div>;
      default:
        return <ApplicationDashboard />;
    }
  };

  return (
    <LocationProvider>
      <div className="flex h-screen bg-[#070707]">
        <SidebarApp setActivePage={setActivePage} />
        <div className="flex-1 flex flex-col">
          <HeaderApp />
          <main className="flex-1 p-4 mt-14">
            {getPageComponent()}
          </main>
        </div>
      </div>
    </LocationProvider>
  );
};

export default ApplicationHome;

