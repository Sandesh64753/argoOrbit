const About = () => {
  const benefits = [
    {
      icon: "🛰️",
      title: "Real-time Hyperlocal Weather",
      description: "Precise weather data powered by cutting-edge satellite technology"
    },
    {
      icon: "💰",
      title: "Affordable Solutions",
      description: "Cost-effective weather intelligence for everyone, from individuals to enterprises"
    },
    {
      icon: "🛡️",
      title: "Risk Mitigation",
      description: "Advanced weather predictions to help you make informed decisions"
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Comprehensive weather data coverage across all regions"
    }
  ];

  const targetUsers = [
    {
      title: "Farmers",
      description: "Optimize crop planning and irrigation with precise weather forecasts",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg"
    },
    {
      title: "Defense",
      description: "Strategic weather intelligence for mission planning and operations",
      image: "https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg"
    },
    {
      title: "Logistics",
      description: "Route optimization and supply chain management with weather insights",
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"
    },
    {
      title: "General Public",
      description: "Daily weather updates for better lifestyle and travel planning",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            AgroOrbit democratizes weather intelligence by making satellite-powered weather data 
            accessible, affordable, and actionable for everyone - from smallholder farmers to 
            large enterprises.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Target Users */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Who We Serve
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetUsers.map((user, index) => (
              <div key={index} className="card overflow-hidden">
                <img 
                  src={user.image} 
                  alt={user.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{user.title}</h4>
                  <p className="text-gray-600">{user.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;