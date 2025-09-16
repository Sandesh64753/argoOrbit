const Solutions = () => {
  const solutions = [
    {
      title: "Satellite Weather Monitoring",
      description: "Real-time weather data from our constellation of advanced satellites",
      features: ["24/7 monitoring", "Global coverage", "High-resolution imagery", "Multi-spectral analysis"],
      image: "https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg"
    },
    {
      title: "Hyperlocal Forecasting",
      description: "Precise weather predictions for specific locations down to 1km resolution",
      features: ["1km resolution", "7-day forecasts", "Hourly updates", "Historical data"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    },
    {
      title: "Risk Assessment Tools",
      description: "Advanced analytics to predict and mitigate weather-related risks",
      features: ["Risk scoring", "Alert systems", "Trend analysis", "Custom thresholds"],
      image: "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg"
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive weather intelligence solutions powered by cutting-edge satellite technology
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orbit-green-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;