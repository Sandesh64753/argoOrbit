import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Store from './components/Store';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ChatBot from './components/ChatBot';
import { CartProvider } from './utils/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Solutions />
          <Store />
          <Contact />
        </main>
        <Footer />
        <Cart />
        <ChatBot />
      </div>
    </CartProvider>
  );
}

export default App;