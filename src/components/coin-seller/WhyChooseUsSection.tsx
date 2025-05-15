
export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-t from-dark to-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why <span className="text-neon-green">Choose Us</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The most reliable coin seller for Joyo Poppo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-dark-light rounded-xl border border-gray-800">
            <div className="h-14 w-14 rounded-full bg-neon-purple/20 flex items-center justify-center mb-4">
              <div className="h-8 w-8 rounded-full bg-neon-purple text-white flex items-center justify-center">
                <span className="text-xl font-bold">1</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
            <p className="text-gray-400">Instant coin delivery after payment confirmation</p>
          </div>
          
          <div className="p-6 bg-dark-light rounded-xl border border-gray-800">
            <div className="h-14 w-14 rounded-full bg-neon-pink/20 flex items-center justify-center mb-4">
              <div className="h-8 w-8 rounded-full bg-neon-pink text-white flex items-center justify-center">
                <span className="text-xl font-bold">2</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Best Rates</h3>
            <p className="text-gray-400">Competitive prices for all coin packages</p>
          </div>
          
          <div className="p-6 bg-dark-light rounded-xl border border-gray-800">
            <div className="h-14 w-14 rounded-full bg-neon-blue/20 flex items-center justify-center mb-4">
              <div className="h-8 w-8 rounded-full bg-neon-blue text-white flex items-center justify-center">
                <span className="text-xl font-bold">3</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-400">Always available to assist with your needs</p>
          </div>
          
          <div className="p-6 bg-dark-light rounded-xl border border-gray-800">
            <div className="h-14 w-14 rounded-full bg-neon-green/20 flex items-center justify-center mb-4">
              <div className="h-8 w-8 rounded-full bg-neon-green text-white flex items-center justify-center">
                <span className="text-xl font-bold">4</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Trusted Seller</h3>
            <p className="text-gray-400">Officially recognized Joyo Poppo coin seller</p>
          </div>
        </div>
      </div>
    </section>
  );
}
