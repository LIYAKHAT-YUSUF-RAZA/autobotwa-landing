import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Brain, Shield, Clock, Users, TrendingUp, Check, Star, ArrowRight, ChevronDown } from 'lucide-react';

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Insights",
      description: "Smart algorithms analyze your workflow patterns and suggest optimizations to boost productivity by up to 40%."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Experience instant sync across all devices with our optimized infrastructure. No lag, no delays, just pure speed."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "End-to-end encryption and SOC 2 compliance ensure your data stays private and protected at all times."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Tracking",
      description: "Automated time tracking with intelligent categorization helps you understand where every minute goes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Real-time collaboration tools that keep your team aligned and moving forward together, seamlessly."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Beautiful dashboards and reports that turn your productivity data into actionable insights and growth."
    }
  ];


  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "VP of Engineering at TechCorp",
      content: "FlowSync transformed how our team works. We've seen a 35% increase in project completion rates and team morale has never been higher.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Founder & CEO at StartupLabs",
      content: "The AI insights are game-changing. It's like having a productivity coach that actually understands your work patterns. Absolutely worth it.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director at DesignStudio",
      content: "Best investment we've made this year. The interface is beautiful, intuitive, and our team adopted it within days. Highly recommend!",
      rating: 5
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Mobile & desktop apps",
        "Email support",
        "1GB storage"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "29",
      description: "For professionals and growing teams",
      features: [
        "Unlimited projects",
        "Advanced AI insights",
        "Priority support",
        "Team collaboration (up to 10)",
        "50GB storage",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For large organizations at scale",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Advanced security features",
        "Dedicated account manager",
        "Unlimited storage",
        "Custom SLA",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xl md:text-2xl font-bold">FlowSync</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Get Started
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#testimonials" className="block hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#pricing" className="block hover:text-purple-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6 border border-purple-500/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Now with GPT-4 powered insights</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Work Smarter,
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Not Harder</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Transform your workflow with AI-powered productivity tools. Join 50,000+ professionals who've already made the switch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 w-full sm:w-auto">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Dashboard Mockup */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center opacity-50">
                    <Zap className="w-12 h-12" />
                  </div>
                  <p className="text-gray-500">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Succeed</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and maximize productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Loved by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Thousands</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See what our customers have to say about their experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0 p-8 md:p-12'}`}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-purple-500 w-8' : 'bg-slate-600'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Simple, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transparent Pricing</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500 shadow-xl shadow-purple-500/20 scale-105'
                    : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">FlowSync</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering teams to achieve more with AI-powered productivity tools.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 FlowSync. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}