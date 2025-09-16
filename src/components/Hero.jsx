const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient space-bg overflow-hidden">
      {/* Animated satellite elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-orbit"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-orbit-green-300 rounded-full animate-orbit" style={{animationDelay: '5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white rounded-full animate-orbit" style={{animationDelay: '10s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Weather Intelligence
            <br />
            <span className="text-orbit-green-300">From Space</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Transforming lives with real-time weather intelligence from space
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
            Empowering farmers, defense, logistics, and communities with hyperlocal weather data 
            that's accurate, affordable, and accessible to everyone
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Explore Plans
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orbit-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Satellite imagery placeholder */}
        <div className="mt-16 relative">
          <img 
            src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg" 
            alt="Earth from space" 
            className="mx-auto rounded-3xl shadow-2xl max-w-full h-64 md:h-80 object-cover animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orbit-blue-900/30 to-transparent rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;