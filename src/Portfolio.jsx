import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Linkedin, ExternalLink, Download, MapPin, Menu, X, Brain, Code, Database, Sun, Moon, Zap, Eye, Cpu, Globe, Server, Container as ContainerIcon, Terminal, Layers, MessageCircle } from "lucide-react";
import photo from '../me.jpeg';
import aiLabelerImage from '../ai-labeler.jpg.webp';
import licensePlateImage from '../license-plate.png';
import hutaoBotImage from '../chatbot.jpg';
import emailExpenseAutoImage from '../email expense auto.png';
import emailSummarizerImage from '../email summarizer.png';
import multimodalImage from '../multimodel.png';

// Utility components
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-8 lg:px-12 ${className}`}>{children}</div>
);

const PageSection = ({ children, className = "", id }) => (
  <section id={id} className={`py-20 lg:py-32 ${className}`}>{children}</section>
);

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Scroll progress sensor
  useEffect(() => {
    const handleScroll = () => {
      const mainContent = document.querySelector('main');
      if (mainContent) {
        const scrollTop = mainContent.scrollTop;
        const scrollHeight = mainContent.scrollHeight - mainContent.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
      }
    };

    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const projects = [
    {
      id: 'multimodal-ai-analyzer',
      title: 'Multimodal AI Analyzer',
      subtitle: 'Full-Stack AI Platform',
      year: '2025',
      description: 'Enterprise-grade AI platform with real-time image analysis, object detection, segmentation, and classification. Features comprehensive monitoring, CI/CD pipelines, and multi-model support.',
      technologies: 'FastAPI, React, TypeScript, PyTorch, Docker, Prometheus, Grafana, GitHub Actions, OpenCV, PostgreSQL',
      impact: 'Multi-model AI platform with enterprise monitoring and CI/CD',
      githubLink: 'https://github.com/Chaitanyakota9/multimodal-ai-analyzer',
      image: multimodalImage
    },
    {
      id: 'fitness-tracker',
      title: 'Fitness Tracker',
      subtitle: 'Full-Stack Web Application',
      year: '2024',
      description: 'Comprehensive fitness tracking application with automated workflows, CI/CD pipelines, and gamified development experience. Features workout tracking, body metrics monitoring, and automated motivation system.',
      technologies: 'Node.js, Express, MongoDB, JavaScript, HTML/CSS, GitHub Actions, CI/CD',
      impact: 'Automated CI/CD workflows, daily motivation system, weekly analytics, database health monitoring',
      githubLink: 'https://github.com/Chaitanyakota9/Fitness-Tracker',
      demoLink: 'https://fitness-tracker-5o6v.onrender.com',
      image: multimodalImage
    },
    {
      id: 'chatbot',
      title: 'Conversational AI',
      subtitle: 'Natural Language Processing',
      year: '2025',
      description: 'Character-based conversational AI with modern web interface.',
      technologies: 'NLP, Web Development, JavaScript',
      impact: 'Interactive character-based AI chatbot',
      githubLink: 'https://github.com/Chaitanyakota9/Hutao-chatbot',
      demoLink: 'https://hutao-chatbot-e6rw.onrender.com/chatbot/',
      image: hutaoBotImage
    },
    {
      id: 'ai-labeler',
      title: 'AI Image Labeler',
      subtitle: 'Computer Vision',
      year: '2024',
      description: 'Automated labeling pipeline using YOLOv8 + SAM reducing annotation time by 80% across 1k+ images.',
      technologies: 'YOLOv8, SAM, Python, OpenCV',
      impact: '80% time reduction, 1k+ images processed',
      githubLink: 'https://github.com/Chaitanyakota9/AI-Image-Labeler',
      image: aiLabelerImage
    },
    {
      id: 'license-plate',
      title: 'License Plate Recognition',
      subtitle: 'Object Detection & OCR',
      year: '2024',
      description: 'Real-time license plate detection and text extraction system achieving 95% accuracy.',
      technologies: 'YOLOv8, EasyOCR, Python, Real-time Processing',
      impact: '95% accuracy in traffic conditions',
      githubLink: 'https://github.com/Chaitanyakota9/license-plate-detection-using-yolov8-and-easyocr',
      image: licensePlateImage
    },
  ];

  const research = [
    {
      year: '2024',
      title: 'Action Recognition for Intelligent Surveillance using LRCN with Attention Mechanisms',
      venue: 'IEEE Conference',
      link: 'https://ieeexplore.ieee.org/document/10469119'
    },
    {
      year: '2023',
      title: 'Enhancing Real-Time Human Tracking using YOLONAS‑DeepSort Fusion Models',
      venue: 'IEEE Conference',
      link: 'https://ieeexplore.ieee.org/document/10394864'
    }
  ];

  const automations = [
    {
      title: 'AI Email Assistant',
      description: 'Intelligent email processing with GPT-4 analysis and task extraction',
      technologies: 'n8n, OpenAI GPT-4, Email Processing',
      template: 'https://github.com/Chaitanyakota9/portfolio-website/blob/main/My%20workflow%203.json',
      image: emailSummarizerImage
    },
    {
      title: 'Email Expense Processor',
      description: 'Automated expense tracking and categorization from email receipts',
      technologies: 'n8n, Automation, Expense Tracking',
      template: 'https://github.com/Chaitanyakota9/portfolio-website/blob/main/My%20workflow%205.json',
      image: emailExpenseAutoImage
    }
  ];

  const navigation = [
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'research', label: 'Publications' },
    { id: 'automations', label: 'Automations' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setCurrentSection(sectionId);
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-neutral-900 text-neutral-100' 
        : 'bg-white text-neutral-900'
    }`}>
      {/* Header */}
      <header className={`border-b transition-colors duration-300 ${
        isDarkMode ? 'border-neutral-700' : 'border-neutral-200'
      }`}>
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 sm:py-8 gap-4">
            <div>
              <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-display font-semibold tracking-tight transition-colors duration-300 ${
                isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
              }`}>
                Chaitanya
              </h1>
              <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-display font-semibold tracking-tight transition-colors duration-300 -mt-2 ${
                isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
              }`}>
                Kota
              </h1>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="flex-1 sm:flex-none sm:text-right">
                <h2 className={`text-base sm:text-lg lg:text-xl font-light transition-colors duration-300 ${
                  isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                }`}>
                  AI & Deep Learning Engineer
              </h2>
                <p className={`text-xs sm:text-sm mt-1 transition-colors duration-300 ${
                  isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                M.Sc. Student, University of Passau
              </p>
                <p className={`text-xs mt-1 transition-colors duration-300 ${
                  isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
                }`}>
                  Seeking 3-6 month internship in Germany
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker', 'TypeScript'].map((skill) => (
                    <span key={skill} className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-neutral-800 text-neutral-300' 
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 flex-shrink-0 ${
                  isDarkMode 
                    ? 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700' 
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div className="flex flex-col lg:flex-row h-screen">
        {/* Mobile Navigation Header */}
        <div className="lg:hidden">
          <div className={`border-b transition-colors duration-300 ${
            isDarkMode ? 'border-neutral-700' : 'border-neutral-200'
          }`}>
            <Container>
              <div className="py-4">
                <div className="flex flex-wrap gap-4 justify-center">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-display font-medium transition-all duration-300 ${
                        currentSection === item.id 
                          ? (isDarkMode 
                              ? 'bg-neutral-700 text-neutral-100' 
                              : 'bg-neutral-200 text-neutral-900')
                          : (isDarkMode 
                              ? 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800' 
                              : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100')
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </div>

        {/* Desktop Sidebar Navigation */}
        <aside className={`hidden lg:block w-64 border-r h-screen sticky top-0 transition-colors duration-300 ${
          isDarkMode ? 'border-neutral-700' : 'border-neutral-200'
        }`}>
          {/* Scroll Progress Indicator */}
          <div className={`absolute top-0 left-0 w-1 h-full transition-colors duration-300 ${
            isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'
          }`}>
            <div 
              className={`w-full transition-all duration-300 ${
                isDarkMode ? 'bg-neutral-400' : 'bg-neutral-600'
              }`}
              style={{ height: `${scrollProgress}%` }}
            ></div>
          </div>
          
          <Container className="max-w-none px-8 py-12">
            <nav className="space-y-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-left font-display font-medium transition-colors duration-300 ${
                    currentSection === item.id 
                      ? (isDarkMode ? 'text-neutral-100' : 'text-neutral-900')
                      : (isDarkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-900')
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <div className={`mt-16 pt-8 border-t transition-colors duration-300 ${
              isDarkMode ? 'border-neutral-700' : 'border-neutral-200'
            }`}>
              <div className="space-y-3">
                <a 
                  href="mailto:chaitanya.kota24@gmail.com" 
                  className={`block text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  chaitanya.kota24@gmail.com
                </a>
                <a 
                  href="https://github.com/Chaitanyakota9" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`block text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/chaitanya-kota-451427310/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`block text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  LinkedIn
                </a>
              </div>
              
              <div className="mt-8 space-y-2">
                <a 
                  href="/Resume copy.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`block text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  CV (English)
                </a>
                <a 
                  href="/Deutsch-Resume copy.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`block text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  Lebenslauf (Deutsch)
                </a>
              </div>
            </div>
          </Container>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto h-screen lg:h-screen">
          {/* About Section */}
          <PageSection id="about">
            <Container>
              <div className="max-w-4xl">
                <h2 className={`text-3xl lg:text-4xl font-display font-medium mb-12 transition-colors duration-300 ${
                  isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                }`}>
                  About
                </h2>
                
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="lg:col-span-2 space-y-6">
                    <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      I'm an AI Engineer and Master's student specializing in Computer Vision and Machine Learning 
                      at the University of Passau, Germany. I build enterprise-grade intelligent systems that solve 
                      real-world problems using cutting-edge technologies like SAM, YOLOv8, CLIP, PyTorch, and 
                      full-stack development with comprehensive monitoring and CI/CD pipelines.
                    </p>
                    
                    <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      My work spans from developing enterprise-grade multimodal AI platforms with real-time monitoring 
                      to creating 95% accurate license plate recognition systems and AI-powered image labeling pipelines 
                      that reduce annotation time by 80%. I've published research in IEEE conferences on real-time 
                      tracking and action recognition, demonstrating my expertise in production-ready ML systems with 
                      comprehensive DevOps practices.
                    </p>
                    
                    <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                      isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      I'm passionate about applying AI to solve complex challenges and am open to collaborating 
                      on innovative projects that push the boundaries of what's possible with machine learning.
                    </p>
                    
                    <div className="pt-8">
                      <h3 className={`text-xl font-display font-medium mb-6 transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                      }`}>Technical Skills</h3>
                      
                      {/* AI/ML & Computer Vision */}
                      <div className="mb-8">
                        <h4 className={`font-medium mb-4 text-sm uppercase tracking-wide transition-colors duration-300 ${
                          isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                        }`}>AI/ML & Computer Vision</h4>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { name: 'Python', icon: Terminal, color: 'bg-blue-500' },
                            { name: 'PyTorch', icon: Brain, color: 'bg-orange-500' },
                            { name: 'YOLOv8', icon: Eye, color: 'bg-red-500' },
                            { name: 'OpenCV', icon: Cpu, color: 'bg-green-500' },
                            { name: 'TensorFlow', icon: Brain, color: 'bg-yellow-500' },
                            { name: 'Object Detection', icon: Eye, color: 'bg-purple-500' },
                            { name: 'Image Segmentation', icon: Eye, color: 'bg-pink-500' },
                            { name: 'Real-time Processing', icon: Zap, color: 'bg-indigo-500' },
                            { name: 'Few-shot Learning', icon: Brain, color: 'bg-teal-500' },
                            { name: 'Multi-modal AI', icon: Brain, color: 'bg-indigo-600' },
                            { name: 'Model Integration', icon: Layers, color: 'bg-purple-600' }
                          ].map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group relative"
                            >
                              <div className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                                isDarkMode 
                                  ? 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700' 
                                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                              }`}>
                                {skill.name}
                              </div>
                              {/* Hover tooltip with icon */}
                              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 ${
                                isDarkMode ? 'bg-neutral-700 text-neutral-100' : 'bg-neutral-900 text-white'
                              }`}>
                                <div className="flex items-center gap-2">
                                  <skill.icon size={16} className={skill.color.replace('bg-', 'text-')} />
                                  {skill.name}
                                </div>
                                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                                  isDarkMode ? 'border-t-neutral-700' : 'border-t-neutral-900'
                                }`}></div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Backend & Deployment */}
                      <div>
                        <h4 className={`font-medium mb-4 text-sm uppercase tracking-wide transition-colors duration-300 ${
                          isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                        }`}>Backend & Deployment</h4>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { name: 'FastAPI', icon: Server, color: 'bg-green-600' },
                            { name: 'Django', icon: Server, color: 'bg-green-700' },
                            { name: 'Node.js', icon: Code, color: 'bg-green-500' },
                            { name: 'TypeScript', icon: Code, color: 'bg-blue-600' },
                            { name: 'Docker', icon: ContainerIcon, color: 'bg-blue-600' },
                            { name: 'AWS', icon: Globe, color: 'bg-orange-500' },
                            { name: 'PostgreSQL', icon: Database, color: 'bg-blue-700' },
                            { name: 'Prometheus', icon: Server, color: 'bg-red-500' },
                            { name: 'Grafana', icon: Eye, color: 'bg-orange-600' },
                            { name: 'GitHub Actions', icon: Zap, color: 'bg-gray-600' },
                            { name: 'CI/CD', icon: Zap, color: 'bg-purple-600' },
                            { name: 'n8n Workflows', icon: Zap, color: 'bg-red-600' },
                            { name: 'React', icon: Code, color: 'bg-blue-500' }
                          ].map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: (index + 8) * 0.1 }}
                              className="group relative"
                            >
                              <div className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                                isDarkMode 
                                  ? 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700' 
                                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                              }`}>
                                {skill.name}
                              </div>
                              {/* Hover tooltip with icon */}
                              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 ${
                                isDarkMode ? 'bg-neutral-700 text-neutral-100' : 'bg-neutral-900 text-white'
                              }`}>
                                <div className="flex items-center gap-2">
                                  <skill.icon size={16} className={skill.color.replace('bg-', 'text-')} />
                                  {skill.name}
                                </div>
                                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                                  isDarkMode ? 'border-t-neutral-700' : 'border-t-neutral-900'
                                }`}></div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className={`aspect-[3/4] rounded-lg overflow-hidden transition-colors duration-300 ${
                      isDarkMode ? 'bg-neutral-800' : 'bg-neutral-100'
                    }`}>
                      <img 
                        src={photo} 
                        alt="Chaitanya Kota"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className={`mt-6 space-y-2 text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-neutral-200' : 'text-neutral-600'
                    }`}>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Passau, Germany</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </PageSection>

          {/* Portfolio Section */}
          <PageSection id="portfolio">
              <Container>
              <h2 className={`text-3xl lg:text-4xl font-display font-medium mb-12 transition-colors duration-300 ${
                isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
              }`}>
                Projects
              </h2>
              <div className="space-y-16 lg:space-y-24">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    >
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className={`rounded-lg overflow-hidden transition-colors duration-300 ${
                          isDarkMode ? 'bg-neutral-800' : 'bg-neutral-100'
                        }`}>
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className={`w-full h-auto object-contain ${
                              project.id === 'multimodal-ai-analyzer' ? 'max-h-64' : 'aspect-[4/3] object-cover'
                            }`}
                          />
                        </div>
                      </div>
                      
                      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div>
                          <div className={`text-sm mb-2 transition-colors duration-300 ${
                            isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
                          }`}>
                            {project.subtitle} • {project.year}
                          </div>
                          <h3 className={`text-2xl lg:text-3xl font-display font-medium mb-4 transition-colors duration-300 ${
                            isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                          }`}>
                            {project.title}
                          </h3>
                          <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
                            isDarkMode ? 'text-neutral-200' : 'text-neutral-600'
                          }`}>
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <span className={`text-sm font-medium transition-colors duration-300 ${
                              isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                            }`}>Technologies: </span>
                            <span className={`text-sm transition-colors duration-300 ${
                              isDarkMode ? 'text-neutral-200' : 'text-neutral-600'
                            }`}>{project.technologies}</span>
                          </div>
                          <div>
                            <span className={`text-sm font-medium transition-colors duration-300 ${
                              isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                            }`}>Impact: </span>
                            <span className={`text-sm transition-colors duration-300 ${
                              isDarkMode ? 'text-neutral-200' : 'text-neutral-600'
                            }`}>{project.impact}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-4 pt-4">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 text-sm transition-colors duration-300 ${
                              isDarkMode 
                                ? 'text-neutral-100 hover:text-neutral-300' 
                                : 'text-neutral-900 hover:text-neutral-600'
                            }`}
                          >
                            GitHub <ExternalLink size={16} />
                          </a>
                          {project.demoLink && (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noreferrer"
                              className={`inline-flex items-center gap-2 text-sm transition-colors duration-300 ${
                                isDarkMode 
                                  ? 'text-neutral-100 hover:text-neutral-300' 
                                  : 'text-neutral-900 hover:text-neutral-600'
                              }`}
                            >
                              Live Demo <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Container>
            </PageSection>

          {/* Research Section */}
          <PageSection id="research">
              <Container>
                <div className="max-w-4xl">
                  <h2 className={`text-3xl lg:text-4xl font-display font-medium mb-12 transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                  }`}>
                    Publications
                  </h2>
                  <div className="space-y-12">
                    {research.map((paper, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b border-neutral-200 pb-8"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`text-sm transition-colors duration-300 ${
                            isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
                          }`}>{paper.year}</div>
                          <a
                            href={paper.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 text-sm transition-colors duration-300 ${
                              isDarkMode 
                                ? 'text-neutral-100 hover:text-neutral-300' 
                                : 'text-neutral-900 hover:text-neutral-600'
                            }`}
                          >
                            IEEE Xplore <ExternalLink size={16} />
                          </a>
                        </div>
                        <h3 className={`text-xl lg:text-2xl font-light mb-3 transition-colors duration-300 ${
                          isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                        }`}>
                          {paper.title}
                        </h3>
                        <p className={`transition-colors duration-300 ${
                          isDarkMode ? 'text-neutral-200' : 'text-neutral-600'
                        }`}>{paper.venue}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Container>
            </PageSection>

          {/* Automations Section */}
          <PageSection id="automations">
              <Container>
                <h2 className={`text-3xl lg:text-4xl font-display font-medium mb-12 transition-colors duration-300 ${
                  isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                }`}>
                  Workflow Automations
                </h2>
                <div className="grid lg:grid-cols-2 gap-12">
                  {automations.map((automation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="space-y-6"
                    >
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100">
                        <img 
                          src={automation.image} 
                          alt={automation.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className={`text-xl lg:text-2xl font-light mb-3 transition-colors duration-300 ${
                          isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                        }`}>
                          {automation.title}
                        </h3>
                        <p className={`mb-4 transition-colors duration-300 ${
                          isDarkMode ? 'text-neutral-200' : 'text-neutral-600'
                        }`}>
                          {automation.description}
                        </p>
                        <div className="mb-6">
                          <span className={`text-sm font-medium transition-colors duration-300 ${
                            isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                          }`}>Technologies: </span>
                          <span className={`text-sm transition-colors duration-300 ${
                            isDarkMode ? 'text-neutral-200' : 'text-neutral-600'
                          }`}>{automation.technologies}</span>
                        </div>
                        <a
                          href={automation.template}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 text-sm transition-colors duration-300 ${
                            isDarkMode 
                              ? 'text-neutral-100 hover:text-neutral-300' 
                              : 'text-neutral-900 hover:text-neutral-600'
                          }`}
                        >
                          View Template <ExternalLink size={16} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Container>
            </PageSection>

          {/* Contact Section */}
          <PageSection id="contact">
              <Container>
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className={`text-3xl lg:text-4xl font-display font-medium mb-6 transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-100' : 'text-neutral-900'
                  }`}>
                    Let's Connect
                  </h2>
                  
                  <p className={`text-lg leading-relaxed mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    I'm always interested in discussing AI, machine learning, and innovative projects. 
                    Feel free to reach out for collaborations or just to say hello!
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-3xl mx-auto">
                    {/* Email */}
                    <motion.a
                      href="mailto:chaitanya.kota24@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex flex-col items-center p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700' 
                          : 'bg-neutral-100 hover:bg-neutral-200'
                      }`}
                    >
                      <Mail size={24} className={`mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`}>
                        Email
                      </span>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                      href="https://github.com/Chaitanyakota9"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex flex-col items-center p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700' 
                          : 'bg-neutral-100 hover:bg-neutral-200'
                      }`}
                    >
                      <Github size={24} className={`mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`}>
                        GitHub
                      </span>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                      href="https://www.linkedin.com/in/chaitanya-kota-451427310/"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex flex-col items-center p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700' 
                          : 'bg-neutral-100 hover:bg-neutral-200'
                      }`}
                    >
                      <Linkedin size={24} className={`mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`}>
                        LinkedIn
                      </span>
                    </motion.a>

                    {/* Mastodon */}
                    <motion.a
                      href="https://mastodon.social/@kota7"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex flex-col items-center p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700' 
                          : 'bg-neutral-100 hover:bg-neutral-200'
                      }`}
                    >
                      <MessageCircle size={24} className={`mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`}>
                        Mastodon
                      </span>
                    </motion.a>

                    {/* CV Download - English */}
                    <motion.a
                      href="/Resume copy.pdf"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex flex-col items-center p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700' 
                          : 'bg-neutral-100 hover:bg-neutral-200'
                      }`}
                    >
                      <Download size={24} className={`mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`}>
                        CV (EN)
                      </span>
                    </motion.a>

                    {/* CV Download - German */}
                    <motion.a
                      href="/Deutsch-Resume copy.pdf"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex flex-col items-center p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-neutral-800 hover:bg-neutral-700' 
                          : 'bg-neutral-100 hover:bg-neutral-200'
                      }`}
                    >
                      <Download size={24} className={`mb-3 transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`} />
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        isDarkMode ? 'text-neutral-300 group-hover:text-neutral-100' : 'text-neutral-600 group-hover:text-neutral-900'
                      }`}>
                        CV (DE)
                      </span>
                    </motion.a>
                      </div>
                      
                  <div className={`mt-12 pt-8 border-t transition-colors duration-300 ${
                    isDarkMode ? 'border-neutral-700' : 'border-neutral-200'
                  }`}>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      © 2024 Chaitanya Kota. Built with React & Tailwind CSS.
                    </p>
                  </div>
                </motion.div>
                </div>
              </Container>
            </PageSection>

        </main>
      </div>
    </div>
  );
}
