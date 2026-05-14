import React, { useState } from 'react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">📈 VESTIGO</div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-700 hover:text-primary transition">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition">Testimonials</a>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-700">Features</a>
            <a href="#pricing" className="text-gray-700">Pricing</a>
            <a href="#testimonials" className="text-gray-700">Testimonials</a>
            <button className="bg-primary text-white px-6 py-2 rounded-lg w-full">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Stocks Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get intelligent financial support and guidance. From beginners to advanced investors, VESTIGO helps you make confident financial decisions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Start Investing Today
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
              Watch Demo
            </button>
          </div>
          <div className="mt-12 text-6xl">📊</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose VESTIGO?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Smart Analysis', desc: 'AI-powered insights to analyze stocks and make informed decisions' },
              { icon: '💡', title: 'Educational', desc: 'Learn investing fundamentals with our comprehensive guides' },
              { icon: '⚡', title: 'Real-Time Data', desc: 'Get live market data and instant notifications' },
              { icon: '🔒', title: 'Secure & Safe', desc: 'Bank-level encryption to protect your financial data' },
              { icon: '📱', title: 'Mobile Ready', desc: 'Manage your portfolio on the go with our mobile app' },
              { icon: '🤝', title: '24/7 Support', desc: 'Expert support team available whenever you need help' },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Trusted by Investors</h2>
          <p className="text-center text-gray-600 mb-16">Join thousands of users making smarter financial decisions</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: '50K+', label: 'Active Users' },
              { stat: '$2.5B', label: 'Assets Managed' },
              { stat: '98%', label: 'Satisfaction Rate' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.stat}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Sarah M.', role: 'First-time Investor', quote: 'VESTIGO made investing so easy! The insights are incredibly helpful.' },
              { name: 'John D.', role: 'Professional Trader', quote: 'The real-time data and analysis tools are exactly what I needed.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Simple Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: 'Free',
                desc: 'Perfect for beginners',
                features: ['Basic stock tracking', 'Educational content', 'Limited alerts', 'Mobile app access']
              },
              {
                name: 'Pro',
                price: '$9.99',
                desc: 'Most popular',
                features: ['Everything in Starter', 'Advanced analysis tools', 'Unlimited alerts', 'Priority support', 'Portfolio optimization'],
                featured: true
              },
              {
                name: 'Premium',
                price: '$29.99',
                desc: 'For serious traders',
                features: ['Everything in Pro', 'AI-powered insights', 'Exclusive reports', 'VIP support', 'Custom watchlists', 'Tax reports']
              },
            ].map((plan, idx) => (
              <div key={idx} className={`p-8 rounded-xl border-2 transition ${
                plan.featured 
                  ? 'border-primary bg-blue-50 transform scale-105' 
                  : 'border-gray-200 bg-white hover:border-primary'
              }`}>
                {plan.featured && <div className="text-secondary font-semibold text-sm mb-2">⭐ Most Popular</div>}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.desc}</p>
                <div className="text-4xl font-bold text-primary mb-4">
                  {plan.price}
                  {plan.price !== 'Free' && <span className="text-lg text-gray-600">/month</span>}
                </div>
                <button className={`w-full py-2 rounded-lg font-semibold mb-6 transition ${
                  plan.featured
                    ? 'bg-primary text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-center">
                      <span className="text-secondary mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Master Your Finances?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of investors who are already using VESTIGO to make smarter decisions.</p>
          <button className="bg-secondary text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 transition">
            Start Free Today - No Credit Card Required
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">📈 VESTIGO</div>
              <p className="text-sm">Making stocks simple for everyone</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 VESTIGO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
