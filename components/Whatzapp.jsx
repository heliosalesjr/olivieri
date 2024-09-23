"use client";

import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsAppButton() {
  const whatsappNumber = "+5521986323418";
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} color="white" />
    </button>
  );
}
