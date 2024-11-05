"use client";
import React from "react";
import { FaShieldAlt, FaCheckCircle, FaHeadset, FaBook, FaShippingFast, FaRobot } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-green-500 w-8 h-8 mb-4" />,
    title: "Layered security",
    description: "With layered security, we ensure the safety of every unit we provide.",
  },
  {
    icon: <FaCheckCircle className="text-green-500 w-8 h-8 mb-4" />,
    title: "Quality control of each part",
    description: "Every unit you send is checked carefully for every detail.",
  },
  {
    icon: <FaHeadset className="text-green-500 w-8 h-8 mb-4" />,
    title: "Reliable customer service",
    description: "Our customer service is available 24 hours a week, with qualified people.",
  },
  {
    icon: <FaBook className="text-green-500 w-8 h-8 mb-4" />,
    title: "Maintenance manual book",
    description: "We provide a guidebook that can be used to ensure maximum care.",
  },
  {
    icon: <FaShippingFast className="text-green-500 w-8 h-8 mb-4" />,
    title: "Delivered safely",
    description: "Every unit we send arrives safely and quickly, without any obstacles or drama.",
  },
  {
    icon: <FaRobot className="text-green-500 w-8 h-8 mb-4" />,
    title: "Based on artificial intelligence",
    description: "You can control and view each unit from your phone, it’s very easy to use.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          We offer <span className="text-black">quality</span>, with the
          <span className="text-gray-500"> best materials and service</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-white"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
