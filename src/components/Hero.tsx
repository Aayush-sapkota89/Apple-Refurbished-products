import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-6">
          Certified Refurbished
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Like new products. Lower prices. Same one-year warranty.
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Every refurbished product completes a rigorous refurbishment process that includes full testing 
          that meets the same functional standards as new Apple products.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rigorously tested</h3>
            <p className="text-gray-600">Every product undergoes a complete inspection and reconditioning process.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Genuine parts</h3>
            <p className="text-gray-600">All replacement parts are genuine Apple components when available.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Same warranty</h3>
            <p className="text-gray-600">One-year limited warranty and all the service and support you expect.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;