"use client";

import SubscribeModal from '@/components/SubscribeModal';
import UploadModal from '@/components/UploadModal';
import AuthModal from '@/hooks/AuthModal';
import { ProductWithPrice } from '@/types';
import React, { useEffect, useState } from 'react'

interface ModalProviderProps{
  products:ProductWithPrice[];
}

const ModalProvider:React.FC<ModalProviderProps> = ({products}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal/>
      <UploadModal/>
      <SubscribeModal products={products}/>
    </>
  )
}

export default ModalProvider;