import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Users, Target, TrendingUp, Shield, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/Accession Partners Logo.jpg" 
                alt="Accession Partners" 
                className="h-12 w-auto mr-3"
              />
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                scrollY > 50 ? 'text-black' : 'text-white'
              }`}>
                Accession Partners
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['What We Do', 'Why Accession', 'Our Approach', 'Team', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className={`transition-colors duration-300 hover:text-gray-600 ${
                      scrollY > 50 ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors duration-300 ${
                  scrollY > 50 ? 'text-gray-800' : 'text-white'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['What We Do', 'Why Accession', 'Our Approach', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block px-3 py-2 text-gray-800 hover:text-gray-600 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/Accession Partners Logo.jpg" 
              alt="Accession Partners" 
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Unlocking Access to
            <span className="block font-normal text-gray-300">Alternative Investments</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light leading-relaxed">
            Connecting sophisticated investors with exceptional opportunities through strategic partnerships and rigorous due diligence.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Connect with Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">What We Do</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-800 leading-relaxed mb-8 text-center">
              Accession Partners specializes in identifying and facilitating access to high-quality alternative investment opportunities. Our comprehensive approach combines deep market expertise with meticulous due diligence to deliver exceptional value to our partners and clients.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              We focus on creating strategic partnerships that unlock exclusive access to private equity, private credit, and other alternative investment vehicles typically reserved for institutional investors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Accession */}
      <section id="why-accession" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">Why Accession</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-300 transition-colors duration-300">
                <Shield className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Uncompromising Trust</h3>
              <p className="text-gray-700 leading-relaxed">
                Built on transparency and integrity, we maintain the highest fiduciary standards in every partnership and investment recommendation.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-300 transition-colors duration-300">
                <Target className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Specialized Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team brings decades of experience in alternative investments, institutional finance, and strategic partnerships.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-300 transition-colors duration-300">
                <TrendingUp className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Aligned Incentives</h3>
              <p className="text-gray-700 leading-relaxed">
                We succeed when our partners succeed. Our interests are fully aligned with achieving superior long-term investment outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="our-approach" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">Our Approach</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">1</div>
                  <h3 className="text-2xl font-semibold text-black">Discovery & Strategy</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We begin by understanding your investment objectives, risk tolerance, and strategic goals to develop a customized approach that aligns with your portfolio needs.
                </p>
              </div>
              <div className="md:w-1/2">
                {/* Boulder Flatirons nature photo */}
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Colorado Flatirons" className="h-64 w-full object-cover rounded-lg shadow-md" />
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                  <h3 className="text-2xl font-semibold text-black">Sourcing & Due Diligence</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Leveraging our extensive network and industry relationships, we source exceptional opportunities and conduct rigorous due diligence to ensure quality and alignment.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Colorado Mountains" className="h-64 w-full object-cover rounded-lg shadow-md" />
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                  <h3 className="text-2xl font-semibold text-black">Execution & Partnership</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We facilitate seamless execution and maintain ongoing partnerships to ensure continued value creation and strategic alignment throughout the investment lifecycle.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80" alt="Colorado River" className="h-64 w-full object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">Our Team</h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            {/* Bryce Wilson */}
            <div className="flex-1 max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
              <img src="/bryce.jpg" alt="Bryce Wilson" className="mx-auto rounded-lg mb-6 h-32 w-32 object-cover" />
              <h3 className="text-xl font-bold text-black mb-2">Bryce Wilson – Founder / CIO</h3>
              <p className="text-gray-700 text-base mb-2">
                Bryce Wilson serves as Chief Investment Officer and investment advisor for Accession Partners.<br/><br/>
                He has a background as a futures trader, market strategist, and securities analyst. The majority of his professional career has been spent managing an alternative investment-focused family office.<br/><br/>
                His passion for alternative investments began when he became aware of the significant value that they could bring to investors from various backgrounds.<br/><br/>
                In his position as an investment advisor, he holds alternatives in high regard due to the many roles such allocations can play in service of diversifying, solidifying, and refining existing portfolios.<br/><br/>
                Bryce is an investment adviser representative registered with the state of Colorado and holds a Series 65 securities license.<br/><br/>
                He graduated from the Leeds School of Business at the University of Colorado and has a diverse background in marketing, advertising, consulting, aircraft sales/leasing, project management, and business development.
              </p>
            </div>
            {/* Peter Speek */}
            <div className="flex-1 max-w-md bg-white rounded-lg shadow-lg p-8 text-center">
              <img src="/peter.jpg" alt="Peter Speek" className="mx-auto rounded-lg mb-6 h-32 w-32 object-cover" />
              <h3 className="text-xl font-bold text-black mb-2">Peter Speek – Co-Founder</h3>
              <p className="text-gray-700 text-base mb-2">
                Peter Speek is co-founder and strategic counsel for Accession Partners.<br/><br/>
                He draws on experience as a CEO, producer, director, and investor, as he develops relationships with fund managers and investment platforms while providing strategic support and direction for the firm.<br/><br/>
                Peter was co-owner and CEO of Warren Miller Ski Films prior to selling to Time Warner.<br/><br/>
                As an active steward of his own wealth, he discovered the crucial role of alternative investments in his overall portfolio.<br/><br/>
                During his journey into the world of alternatives, he discovered that private investments provided greater access for his passion to direct his capital to impact-based managers who are creating meaningful change in our world.<br/><br/>
                His vision is that Accession Partners will provide the access and support that he diligently pursued throughout his career for a wide range of investors seeking to complement their portfolios with institutional-quality alternative investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Connect with Us</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to explore exceptional alternative investment opportunities? Let's start a conversation about your investment goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-gray-400 mr-4" size={24} />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Highland City Club<br />885 Arapahoe Ave<br />Boulder, CO 80302</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-900 text-white placeholder-gray-500 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center">
            <img 
              src="/Accession Partners Logo.jpg" 
              alt="Accession Partners" 
              className="h-8 w-auto mb-3"
            />
            <h3 className="text-white font-bold text-lg mb-2">Accession Partners</h3>
            <p className="text-gray-400 text-sm">
              © 2025 Accession Partners. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
