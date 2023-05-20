import React from 'react';
import { useLocation } from 'react-router-dom';
import {Header} from '../components/Header'

export const HeaderP = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  if (isAdminPage) {
    return null; 
  }

  return (
    <>
        <Header/>
    </>
  );
};