import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  CheckCircle,
  ArrowRight,
  Headphones,
  Globe,
  Zap,
} from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const primaryColor = "#36A398";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "support@roommatematch.com",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available 24/7",
      action: "Start Chat",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office",
      contact: "123 Main St, City, State 12345",
      action: "Get Directions",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "billing", label: "Billing Question" },
    { value: "partnership", label: "Partnership" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We typically respond within 2-4 hours during business hours, and within 24 hours on weekends.",
    },
    {
      question: "What's the best way to get urgent help?",
      answer:
        "For urgent matters, use our live chat feature or call our support line directly.",
    },
    {
      question: "Do you offer phone support?",
      answer:
        "Yes! Our phone support is available Monday-Friday 9AM-6PM EST, with emergency support 24/7.",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-[80%] mx-auto bg-white text-black">
        {/* Hero Section */}
        <div className="relative py-20 mt-32">
          <div
            className={`container mx-auto px-6 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-2 mb-8 border border-gray-200">
              <Headphones className="w-5 h-5" style={{ color: primaryColor }} />
              <span className="text-sm font-medium text-black">Contact Us</span>
            </div>

            <h1
              className="text-5xl md:text-6xl font-black mb-6 leading-tight"
              style={{ color: primaryColor }}
            >
              Get in Touch
            </h1>

            <p className="text-xl md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Have questions about finding your perfect roommate? We're here to
              help you every step of the way
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="relative py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                return (
                  <div
                    key={index}
                    className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg cursor-pointer text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-xl p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-black">
                      {method.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm">
                      {method.description}
                    </p>

                    <p className="text-black font-semibold mb-4 text-sm">
                      {method.contact}
                    </p>

                    <button
                      className="group/btn px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:bg-gray-50"
                      style={{ borderColor: primaryColor, color: primaryColor }}
                    >
                      {method.action}
                      <ArrowRight className="inline ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-50 rounded-3xl p-8">
                  {!isSubmitted ? (
                    <div onSubmit={handleSubmit} className="space-y-6">
                      {/* Name and Email Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-black">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-300"
                            style={{ focusRingColor: primaryColor }}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-black">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-300"
                            style={{ focusRingColor: primaryColor }}
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      {/* Phone and Inquiry Type Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-black">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-300"
                            style={{ focusRingColor: primaryColor }}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-black">
                            Inquiry Type *
                          </label>
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-300"
                            style={{ focusRingColor: primaryColor }}
                          >
                            {inquiryTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-300"
                          style={{ focusRingColor: primaryColor }}
                          placeholder="What's this about?"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-black">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                          style={{ focusRingColor: primaryColor }}
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        style={{ backgroundColor: primaryColor }}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div
                        className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-black">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. We'll get back to you within
                        24 hours.
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-3000"
                          style={{
                            backgroundColor: primaryColor,
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Info & FAQ */}
                <div className="space-y-8">
                  {/* Quick Contact Info */}
                  <div className="bg-gray-50 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-black">
                      Quick Contact Info
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-lg p-3"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <Clock className="w-full h-full text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-black">
                            Business Hours
                          </p>
                          <p className="text-gray-600 text-sm">
                            Mon-Fri: 9AM-6PM EST
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-lg p-3"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <Zap className="w-full h-full text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-black">
                            Response Time
                          </p>
                          <p className="text-gray-600 text-sm">
                            Usually within 2-4 hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-lg p-3"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <Globe className="w-full h-full text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-black">Languages</p>
                          <p className="text-gray-600 text-sm">
                            English, Spanish, French
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-gray-50 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-black">
                      Frequently Asked Questions
                    </h3>

                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-200 pb-4 last:border-b-0"
                        >
                          <h4 className="font-semibold text-black mb-2 text-sm">
                            {faq.question}
                          </h4>
                          <p className="text-gray-600 text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
