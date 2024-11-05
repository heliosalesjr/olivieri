"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import solarImage from "../public/img/roi3.jpeg"; // Substitua pelo caminho da sua imagem

const NewWhoWeAre = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch max-w-7xl mx-auto min-h-[80vh] py-20 px-6 gap-12">
      {/* Coluna Esquerda */}
      <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Trusted <span className="text-black">service</span>, 
          <span className="text-gray-500"> for your various needs</span>
        </h2>
        <button className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600">
          <span>Get in touch</span>
          <FaArrowRight />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { number: "01", title: "Solar panels for home" },
            { number: "02", title: "Solar panels for industry" },
            { number: "03", title: "Solar panels for chargers" },
            { number: "04", title: "Wind power generator" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <span className="text-gray-400 font-bold text-lg">{item.number}</span>
              <h3 className="text-gray-800 font-semibold mt-2">{item.title}</h3>
              <a href="#" className="text-blue-500 hover:underline text-sm mt-4">
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Coluna Direita */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={solarImage}
            alt="Man holding solar panel"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NewWhoWeAre;
