import React, { useState, useEffect } from "react";
import {
  Users,
  Shield,
  Heart,
  Search,
  MessageCircle,
  CheckCircle,
  Star,
  Home,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Camera,
  Filter,
  Bell,
  Calendar,
} from "lucide-react";

const Service = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const primaryColor = "#36A398";

  const mainServices = [
    {
      icon: Search,
      title: "Smart Roommate Matching",
      description: "AI-powered algorithm matches you with compatible roommates based on lifestyle, preferences, and habits",
      features: ["Compatibility scoring", "Lifestyle matching", "Preference analysis", "Personality assessment"]
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "Comprehensive verification system ensures all users are authentic with OTP verification and ID checks",
      features: ["Phone verification", "Email confirmation", "Photo verification", "Background checks"]
    },
    {
      icon: MessageCircle,
      title: "Secure Messaging",
      description: "Safe and secure communication platform to connect with potential roommates before meeting",
      features: ["End-to-end encryption", "Report system", "Block users", "Chat history"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Create Profile",
      description: "Sign up and build your detailed profile with photos and preferences"
    },
    {
      step: "02",
      title: "Get Matched",
      description: "Our AI algorithm finds compatible roommates based on your criteria"
    },
    {
      step: "03",
      title: "Connect & Chat",
      description: "Message potential matches through our secure platform"
    },
    {
      step: "04",
      title: "Meet & Decide",
      description: "Schedule meetings and find your perfect roommate match"
    }
  ];

  return (
    <div className="min-h-screen w-[80%] mx-auto bg-white text-black">
      {/* Hero Section */}
      <div className="relative py-20 lg:mt-32 mt-20">
        <div className={`container mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-2 mb-8 border border-gray-200">
            <Users className="w-5 h-5" style={{ color: primaryColor }} />
            <span className="text-sm font-medium text-black">Our Services</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ color: primaryColor }}>
            Complete Roommate Solutions
          </h1>

          <p className="text-xl md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            From intelligent matching to secure communication, we provide everything you need to find and connect with your ideal roommate
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and features designed to make your roommate search effortless and successful
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl bg-white border transition-all duration-500 hover:shadow-lg cursor-pointer ${
                    isActive
                      ? "shadow-lg scale-105 border-gray-300"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div
                    className="w-16 h-16 rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-black">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4" style={{ color: primaryColor }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to find your perfect roommate match
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: primaryColor }}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-6 h-6 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Stats */}
      <div className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gray-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
              Why Our Services Work
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "98%", label: "Success Rate", desc: "Users find compatible roommates" },
                { number: "48hrs", label: "Average Match Time", desc: "Time to first quality match" },
                { number: "15K+", label: "Active Users", desc: "Growing community nationwide" },
                { number: "24/7", label: "Support", desc: "Always here to help you" }
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-4xl font-black mb-2" style={{ color: primaryColor }}>
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-2 text-black">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: primaryColor }}>
              Ready to Experience Our Services?
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Join thousands of users who have successfully found their perfect roommates through our comprehensive platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="group px-8 py-2.5 rounded-full font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="px-8 py-2.5 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:bg-gray-50"
                style={{ borderColor: primaryColor, color: primaryColor }}
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;