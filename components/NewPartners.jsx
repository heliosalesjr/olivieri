import React from 'react';
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook, FaTwitter } from 'react-icons/fa';

function NewPartners() {
  return (
    <section className=" dark:bg-gray-900 bg-slate-100">
      <div className="lg:py-40 mx-auto max-w-screen-xl px-24 py-24">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Estamos bem acompanhados
        </h2>
        <p className='mb-8 lg:mb-16 text-3xl font-thin tracking-tight leading-tight text-center text-sky-700 dark:text-white md:text-4xl'>Esses são nossos parceiros</p>
        <div className="grid grid-cols-2 gap-8 text-slate-800 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex justify-center items-center">
            <FaApple size={48} />
          </a>
          <a href="#" className="flex justify-center items-center">
            <FaGoogle size={48} />
          </a>
          <a href="#" className="flex justify-center items-center">
            <FaAmazon size={48} />
          </a>
          <a href="#" className="flex justify-center items-center">
            <FaMicrosoft size={48} />
          </a>
          <a href="#" className="flex justify-center items-center">
            <FaFacebook size={48} />
          </a>
          <a href="#" className="flex justify-center items-center">
            <FaTwitter size={48} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default NewPartners;
