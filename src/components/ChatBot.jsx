import { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I\'m AgroBot, your weather intelligence assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "How does AgroOrbit work?",
    "What subscription is best for farmers?",
    "Show me today's weather forecast",
    "What makes your data accurate?"
  ];

  const responses = {
    "how does agroOrbit work": "AgroOrbit uses a constellation of advanced satellites to collect real-time weather data. Our AI algorithms process this information to provide hyperlocal weather intelligence with 1km resolution accuracy.",
    "subscription best for farmers": "For farmers, I recommend our Premium plan ($29/month) which includes 14-day forecasts, hourly updates, hyperlocal 1km resolution data, and agricultural-specific weather alerts.",
    "today's weather forecast": "I'd love to provide you with today's forecast! However, I need your location first. Our Premium subscribers get real-time hyperlocal weather data for any location worldwide.",
    "what makes data accurate": "Our accuracy comes from multiple satellites providing continuous monitoring, advanced AI processing, and ground-truth validation. We achieve 95%+ accuracy with 1km resolution.",
    "pricing": "We offer three plans: Freemium (Free - basic features), Premium ($29/month - perfect for farmers and small businesses), and Enterprise ($199/month - for large organizations).",
    "contact": "You can reach us at partnerships@agroOrbit.com or call +1-800-AGROBIT. You can also use our contact form on this website!"
  };

  const getResponse = (input) => {
    const normalizedInput = input.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
      if (normalizedInput.includes(key.split(' ')[0]) || normalizedInput.includes(key)) {
        return response;
      }
    }
    
    return "I'd be happy to help! You can ask me about our weather technology, subscription plans, pricing, or how AgroOrbit can benefit your specific needs. You can also contact our team directly for personalized assistance.";
  };

  const handleSend = async (text = inputText) => {
    if (!text.trim()) return;

    const userMessage = {
      type: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const botResponse = {
      type: 'bot',
      text: getResponse(text),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-orbit-green-600 text-white p-4 rounded-full shadow-lg hover:bg-orbit-green-700 transition-all duration-300 z-40 animate-pulse"
      >
        🤖
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 w-96 h-96 bg-white rounded-xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-orbit-green-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🤖</span>
              <span className="font-semibold">AgroBot Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-orbit-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-2">
              <div className="grid grid-cols-1 gap-2">
                {quickQuestions.slice(0, 2).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded text-left transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orbit-green-500 focus:border-transparent text-sm"
            />
            <button
              onClick={() => handleSend()}
              className="bg-orbit-green-600 text-white p-2 rounded-lg hover:bg-orbit-green-700 transition-colors"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;