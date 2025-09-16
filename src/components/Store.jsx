import { useState } from 'react';
import { useCart } from '../utils/CartContext';

const Store = () => {
  const { addToCart } = useCart();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'freemium',
      name: 'Freemium',
      price: 0,
      period: 'forever',
      description: 'Perfect for individuals getting started with weather intelligence',
      features: [
        '3-day weather forecast',
        'Basic weather alerts',
        'Daily weather summary',
        'Mobile app access',
        'Community support'
      ],
      popular: false,
      cta: 'Start Free'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 29,
      period: 'month',
      description: 'Ideal for farmers and small businesses requiring detailed weather data',
      features: [
        '14-day weather forecast',
        'Hourly weather updates',
        'Advanced weather alerts',
        'Hyperlocal 1km resolution',
        'Historical weather data',
        'API access',
        'Priority support'
      ],
      popular: true,
      cta: 'Subscribe Now'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'Comprehensive solution for large organizations and government',
      features: [
        '30-day weather forecast',
        'Real-time satellite imagery',
        'Custom weather models',
        'Dedicated support team',
        'White-label solutions',
        'Advanced analytics',
        'SLA guarantee',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const handleSubscribe = (plan) => {
    if (plan.id === 'freemium') {
      alert('Welcome to AgroOrbit Freemium! You can start using our basic features immediately.');
    } else if (plan.id === 'enterprise') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      addToCart(plan);
      setSelectedPlan(plan.id);
      setTimeout(() => setSelectedPlan(null), 2000);
    }
  };

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Flexible pricing options to meet your weather intelligence needs, 
            from individual users to enterprise organizations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`card relative p-8 ${plan.popular ? 'ring-4 ring-orbit-blue-500 transform scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orbit-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  {plan.price > 0 && <span className="text-gray-600">/{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-orbit-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'bg-orbit-green-600 text-white'
                    : plan.popular
                    ? 'btn-primary'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {selectedPlan === plan.id ? 'Added to Cart ✓' : plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored packages for large organizations.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Store;