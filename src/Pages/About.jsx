import React, { useState, useEffect } from "react";
import {
  Home,
  Users,
  Shield,
  Heart,
  Zap,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Secure & Verified",
      description:
        "OTP verification and secure registration ensure authentic connections",
    },
    {
      icon: Users,
      title: "Smart Matching",
      description:
        "AI-powered compatibility system finds your perfect roommate match",
    },
    {
      icon: Heart,
      title: "Personalized Profiles",
      description:
        "Rich profiles with photos and detailed preferences for better matches",
    },
    {
      icon: Zap,
      title: "Instant Connections",
      description:
        "Real-time matching with persistent data for seamless experiences",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Roommates" },
    { number: "95%", label: "Match Success Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Cities Covered" },
  ];

  const primaryColor = "#36A398";

  return (
    <React.Fragment>
      <div className="min-h-screen w-[80%] mx-auto bg-white text-black">
        {/* Hero Section */}
        <div className="relative mt-20">
          <div
            className={`container mx-auto px-6 py-20 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-2 mb-8 border border-gray-200">
              <Home className="w-5 h-5" style={{ color: primaryColor }} />
              <span className="text-sm font-medium text-black">
                Find Your Perfect Roommate
              </span>
            </div>

            <h1 className="text-6xl md:text-6xl font-black mb-6 leading-tight" style={{ color: primaryColor }}>
              Mate-Space
            </h1>

            <p className="text-xl md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Where{" "}
              <span className="font-semibold" style={{ color: primaryColor }}>
                compatibility meets community
              </span>
              . Discover your ideal roommate through intelligent matching and
              genuine connections.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button 
                className="group px-8 py-2.5 rounded-full font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Get Started
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-2.5 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:bg-gray-50" 
                style={{ borderColor: primaryColor, color: primaryColor }}>
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-black" style={{ color: primaryColor }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Why Choose Mate-Space?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the future of roommate matching with our cutting-edge
                features designed for modern living
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;

                return (
                  <div
                    key={index}
                    className={`group relative p-8 rounded-2xl bg-white border transition-all duration-500 hover:shadow-lg cursor-pointer ${
                      isActive
                        ? "shadow-lg scale-105 border-gray-300"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div
                      className="w-16 h-16 rounded-xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-black group-hover:transition-all group-hover:duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 border border-gray-200">
                <Star className="w-5 h-5" style={{ color: primaryColor }} />
                <span className="text-sm font-medium text-black">Our Mission</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
                Revolutionizing Shared Living
              </h2>

              <p className="text-xl text-gray-700 mb-12 leading-relaxed">
                We believe that finding the right roommate shouldn't be
                stressful or complicated. Mate-Space combines advanced matching
                algorithms with intuitive design to create meaningful
                connections that lead to lasting friendships and harmonious
                living spaces.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Trust & Safety",
                    desc: "Verified profiles and secure messaging",
                  },
                  {
                    title: "Perfect Matches",
                    desc: "AI-powered compatibility assessment",
                  },
                  {
                    title: "Community First",
                    desc: "Building connections beyond just housing",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md"
                  >
                    <Check className="w-8 h-8 mx-auto mb-4" style={{ color: primaryColor }} />
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="relative py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Meet Our Team
            </h2>

            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate developers, designers, and community builders working
              together to transform how people connect and live together in the
              modern world.
            </p>

            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white"
                    style={{ 
                      backgroundColor: primaryColor, 
                      opacity: 1 - (i * 0.15)
                    }}
                  ></div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-black">
                  Dedicated Team
                </div>
                <div className="text-gray-600">
                  Building the future of shared living
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl p-12 border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: primaryColor }}>
                Ready to Find Your Perfect Match?
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Join thousands of happy roommates who found their ideal living
                situation through Mate-Space
              </p>
              <button 
                className="group px-12 py-4 rounded-full font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Start Your Journey
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </React.Fragment>
  );
};

export default About;