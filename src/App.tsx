import React, { useState } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Code2, Database, Terminal, Send, FileDown } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleSuccess = (response: any) => {
    console.log('Google login success:', response);
    // After successful login, we can use the access token to fetch the user's email
    fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${response.access_token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setFormData(prev => ({
          ...prev,
          email: data.email
        }));
      })
      .catch(err => console.error('Error fetching user info:', err));
  };

  const handleGoogleError = () => {
    console.log('Google login failed');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-indigo-950/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">Ripul Gautam</span>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="hover:text-purple-300 transition">Home</a></li>
            <li><a href="#about" className="hover:text-purple-300 transition">About</a></li>
            <li><a href="#certifications" className="hover:text-purple-300 transition">Certifications</a></li>
            <li><a href="#skills" className="hover:text-purple-300 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-300 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-300 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-400">Ripul</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200">
            Web Developer | Data Scientist | Software Developer
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/r1pul" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-purple-300 transition">
              <Github size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="p-2 hover:text-purple-300 transition">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/r1pul" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-purple-300 transition">
              <Linkedin size={24} />
            </a>
            <a href="/Ripul_Gautam_Resume.pdf" download="Ripul_Gautam_Resume.pdf"
               className="p-2 hover:text-purple-300 transition">
              <FileDown size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-indigo-950/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-900/50 p-6 rounded-xl hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">R Programming Certification</h3>
              <p className="text-purple-200">MOOC Course</p>
            </div>
            <div className="bg-indigo-900/50 p-6 rounded-xl hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Excel for Data Analysis</h3>
              <p className="text-purple-200">Coursera</p>
            </div>
            <div className="bg-indigo-900/50 p-6 rounded-xl hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Computer Networks</h3>
              <p className="text-purple-200">MOOC Course</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <Code2 size={48} className="mb-4 text-purple-300" />
              <span>HTML/CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <Terminal size={48} className="mb-4 text-purple-300" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <Database size={48} className="mb-4 text-purple-300" />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center">
              <Code2 size={48} className="mb-4 text-purple-300" />
              <span>C++</span>
            </div>
            <div className="flex flex-col items-center">
              <Terminal size={48} className="mb-4 text-purple-300" />
              <span>R</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-indigo-950/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-900/50 p-6 rounded-xl hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Credit Card Customer Segmentation</h3>
              <p className="text-purple-200 mb-4">Machine Learning, R</p>
              <a href="https://github.com/r1pul/Credit-Card-Customer-Segmentation-Attrition-Prediction" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-purple-300 hover:text-purple-100">
                View on GitHub <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            <div className="bg-indigo-900/50 p-6 rounded-xl hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">SpamSense: Hybrid Filtering</h3>
              <p className="text-purple-200 mb-4">Spam Detection using AI</p>
              <a href="https://githubbox.com/r1pul/hybrid_spam_detection" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-purple-300 hover:text-purple-100">
                View on GitHub <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            <div className="bg-indigo-900/50 p-6 rounded-xl hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Sudoku Solver Online</h3>
              <p className="text-purple-200 mb-4">HTML, CSS, JavaScript</p>
              <a href="https://github.com/r1pul/sudoku-solver-" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center text-purple-300 hover:text-purple-100">
                View on GitHub <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          
          {/* Google Sign-in */}
          <div className="mb-8 text-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-indigo-900/50 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-indigo-900/50 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-indigo-900/50 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-medium"
            >
              Send Message
              <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;