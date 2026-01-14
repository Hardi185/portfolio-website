import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MessageCircle, ChevronDown, Coffee, Zap, Heart } from 'lucide-react';

// To use your own image:
// 1. Save your image as "profile.jpg" in src/assets/
// 2. Uncomment the line below:
import profilePic from '../assets/profile.jpeg';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState({});
    const [imageError, setImageError] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible((prev) => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting,
                    }));
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const skills = {
        languages: ['Java', 'JavaScript', 'TypeScript', 'C#', 'C++', 'C'],
        frontend: ['React.js', 'Angular', 'Vue.js', 'HTML', 'CSS', 'Bootstrap', 'jQuery'],
        backend: ['.NET', 'ASP.NET', 'Node.js', 'Express.js', 'Spring Boot'],
        databases: ['PostgreSQL', 'MSSQL', 'SQLite'],
        tools: ['Git', 'Azure', 'WinForms', 'CI/CD', 'Agile/Scrum']
    };

    const experiences = [
        {
            company: 'EPOSRX.com',
            role: 'Software Engineer',
            period: 'February 2025 - Present',
            location: 'Gujarat, India',
            highlights: [
                'Lead end-to-end product ownership for EPOS solutions across desktop, web, and mobile platforms',
                'Deliver real-time customer support and troubleshoot critical production issues',
                'Implement robust features aligned with complex retail workflows',
                'Collaborate with cross-functional teams to gather requirements and deliver scalable solutions'
            ]
        },
        {
            company: 'Veloxcore Pvt Ltd',
            role: 'Software Engineer',
            period: 'January 2023 - September 2024',
            location: 'Ahmedabad, Gujarat, India',
            highlights: [
                'Built and optimized web applications using Angular, .NET, C#, and Azure',
                'Enhanced page load efficiency by 25% through optimization strategies',
                'Designed document conversion tool supporting multiple languages (English, Arabic, Chinese, French)',
                'Implemented unit and regression testing to increase code reliability'
            ]
        }
    ];

    const projects = [
        {
            name: 'DSA By Strivers',
            description: 'Complete A to Z DSA practice sheet implementation with solutions to algorithmic problems',
            tech: ['Java', 'Data Structures', 'Algorithms'],
            stars: 3,
            link: 'https://github.com/Hardi185/DSAByStrivers'
        },
        {
            name: 'SQL Practice Repository',
            description: 'Comprehensive SQL practice problems covering various database concepts and query optimization',
            tech: ['SQL', 'PostgreSQL', 'MSSQL'],
            stars: 3,
            link: 'https://github.com/Hardi185/SQL'
        },
        {
            name: 'City Savvy Guide',
            description: 'Web application providing travelers with unique local insights, curated content on city food, shopping hotspots, and hidden gems with Google Maps integration',
            tech: ['JavaScript', 'Google Maps API', 'HTML', 'CSS'],
            stars: 3,
            link: '#'
        },
        {
            name: 'ATM Interface',
            description: 'Console-based Java application simulating ATM operations including login, profile updates, and transactions',
            tech: ['Java', 'OOP'],
            stars: 2,
            link: 'https://github.com/Hardi185/Atm-interface'
        },
        {
            name: 'Online Examination System',
            description: 'MCQ-based examination system with timer, profile management, and automatic result generation',
            tech: ['Java', 'Swing'],
            stars: 2,
            link: 'https://github.com/Hardi185/Online-examination'
        }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-x-hidden">
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out; }
        .animate-slide-up-1 { animation: slideUp 0.8s ease-out forwards; }
        .animate-slide-up-2 { animation: slideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-slide-up-3 { animation: slideUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-slide-up-4 { animation: slideUp 0.8s ease-out 0.6s forwards; opacity: 0; }
        .animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
        .animate-float-up-down { animation: floatUpDown 3s ease-in-out infinite; }
        .animate-wave { animation: wave 2s ease-in-out; }
      `}</style>

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        HJ
                    </h1>
                    <div className="flex gap-6">
                        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-blue-500/10"
                            style={{
                                width: Math.random() * 300 + 50 + 'px',
                                height: Math.random() * 300 + 50 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                                animationDelay: Math.random() * 5 + 's'
                            }}
                        />
                    ))}
                </div>

                {/* Floating Character Illustration */}
                <div className="absolute right-10 top-1/4 hidden lg:block animate-float-up-down">
                    <div className="relative">
                        <div className="w-64 h-64 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl absolute -z-10"></div>
                        <div className="text-9xl animate-wiggle">🧑‍💻</div>
                        <div className="absolute -top-8 -right-8 text-4xl animate-bounce-slow">💡</div>
                        <div className="absolute -bottom-4 -left-4 text-3xl" style={{ animation: 'wave 2s ease-in-out 1s infinite' }}>👋</div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center z-10 animate-fade-in">
                    <div className="mb-8 animate-bounce-slow">
                        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-500 p-1 animate-pulse-slow overflow-hidden">
                            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                {!imageError && profilePic ? (
                                    <img
                                        src={profilePic}
                                        alt="Hardi Jadvani"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <span className="text-4xl text-gray-300">👨‍💻</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <h1 className="text-6xl font-bold mb-4 animate-slide-up-1">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Hardi Jadvani</span>
                    </h1>
                    <p className="text-2xl text-gray-300 mb-8 animate-slide-up-2">
                        Versatile Software Engineer | Full Stack Developer
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up-3">
                        Passionate about turning complex challenges into efficient, user-friendly solutions.
                        Specializing in Java, Spring Boot, Angular, React, .NET, and Node.js.
                    </p>

                    <div className="flex gap-6 justify-center mb-12 animate-slide-up-4">
                        <a href="https://github.com/Hardi185" target="_blank" rel="noopener noreferrer"
                            className="transform hover:scale-110 transition-all duration-300 hover:-translate-y-1">
                            <Github className="w-8 h-8 hover:text-blue-400" />
                        </a>
                        <a href="https://www.linkedin.com/in/hardi-jadvani-1a1711238/" target="_blank" rel="noopener noreferrer"
                            className="transform hover:scale-110 transition-all duration-300 hover:-translate-y-1">
                            <Linkedin className="w-8 h-8 hover:text-blue-400" />
                        </a>
                        <a href="mailto:hardirj185@gmail.com"
                            className="transform hover:scale-110 transition-all duration-300 hover:-translate-y-1">
                            <Mail className="w-8 h-8 hover:text-blue-400" />
                        </a>
                    </div>

                    <button
                        onClick={() => scrollToSection('about')}
                        className="animate-bounce mt-8"
                    >
                        <ChevronDown className="w-10 h-10 text-blue-400" />
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen flex items-center py-20 relative">
                {/* Floating Coffee Illustration */}
                <div className="absolute left-10 top-1/3 hidden lg:block">
                    <div className="relative animate-float-up-down">
                        <Coffee className="w-24 h-24 text-blue-400/50" />
                        <div className="absolute -top-4 -right-4 text-2xl">☕</div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            <div className="flex gap-1">
                                <Heart className="w-4 h-4 text-green-400 animate-pulse" />
                                <Heart className="w-4 h-4 text-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                <Heart className="w-4 h-4 text-green-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6">
                    <h2 className={`text-5xl font-bold mb-12 text-center transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        About <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Me</span>
                    </h2>

                    <div className={`grid md:grid-cols-2 gap-12 transform transition-all duration-1000 delay-200 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I'm a passionate Software Engineer dedicated to transforming complex challenges into efficient,
                                user-friendly solutions. With expertise spanning both frontend and backend development, I build
                                robust applications that deliver real value.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Currently working at EPOSRX.com, I handle end-to-end product ownership for Electronic Point of
                                Sale solutions across desktop, web, and mobile platforms, managing everything from requirements
                                to production deployment.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I believe in writing clean, scalable code and continuously learning new technologies to stay at
                                the cutting edge of software development.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Code, title: 'Full-Stack Development', desc: 'End-to-end solutions from UI to backend', emoji: '💻' },
                                { icon: Briefcase, title: 'Product Ownership', desc: 'Requirements to deployment', emoji: '📦' },
                                { icon: User, title: 'Customer Support', desc: 'Real-time issue resolution', emoji: '🎯' },
                                { icon: MessageCircle, title: 'Collaboration', desc: 'Cross-functional teamwork', emoji: '🤝' }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 p-6 rounded-lg 
                           transform hover:scale-105 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer
                           hover:rotate-2 relative group"
                                >
                                    <div className="absolute -top-4 -right-4 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-slow">
                                        {item.emoji}
                                    </div>
                                    <item.icon className="w-10 h-10 mb-4 text-blue-400" />
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen flex items-center py-20 bg-black/20 relative">
                {/* Floating Lightning Bolt */}
                <div className="absolute right-10 top-1/4 hidden lg:block">
                    <div className="relative animate-float-up-down">
                        <Zap className="w-32 h-32 text-green-400/30" />
                        <div className="absolute top-0 left-0 text-6xl animate-pulse">⚡</div>
                        <div className="absolute -bottom-4 right-0 text-3xl animate-bounce">💪</div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 w-full">
                    <h2 className={`text-5xl font-bold mb-12 text-center transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        Technical <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Skills</span>
                    </h2>

                    <div className="space-y-8">
                        {Object.entries(skills).map(([category, items], idx) => (
                            <div
                                key={category}
                                className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <h3 className="text-2xl font-semibold mb-4 capitalize text-blue-400 flex items-center gap-2">
                                    {category}
                                    {idx === 0 && <span className="text-2xl">🔤</span>}
                                    {idx === 1 && <span className="text-2xl">🎨</span>}
                                    {idx === 2 && <span className="text-2xl">⚙️</span>}
                                    {idx === 3 && <span className="text-2xl">🗄️</span>}
                                    {idx === 4 && <span className="text-2xl">🛠️</span>}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {items.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 
                               border border-blue-500/30 rounded-full text-sm font-medium
                               transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50
                               transition-all duration-300 cursor-pointer hover:-rotate-2"
                                            style={{
                                                animation: isVisible.skills ? `popIn 0.5s ease-out ${skillIdx * 0.05}s forwards` : 'none',
                                                opacity: isVisible.skills ? 1 : 0
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen flex items-center py-20 relative">
                {/* Floating Rocket */}
                <div className="absolute left-10 bottom-1/4 hidden lg:block">
                    <div className="relative animate-float-up-down">
                        <div className="text-8xl" style={{ animation: 'floatUpDown 4s ease-in-out infinite' }}>🚀</div>
                        <div className="absolute -top-8 right-0 text-3xl animate-pulse">✨</div>
                        <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce">💫</div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 w-full">
                    <h2 className={`text-5xl font-bold mb-12 text-center transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        Work <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Experience</span>
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className={`bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-lg p-8
                          transform transition-all duration-1000 hover:scale-105 hover:bg-blue-500/20
                          hover:shadow-2xl hover:shadow-blue-500/50 relative group ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${idx * 200}ms` }}
                            >
                                <div className="absolute -top-6 -right-6 text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-slow">
                                    {idx === 0 ? '🎯' : '💼'}
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                                        <p className="text-xl text-gray-300">{exp.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-400">{exp.period}</p>
                                        <p className="text-gray-500 text-sm">{exp.location}</p>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="flex items-start text-gray-300">
                                            <span className="text-blue-400 mr-2">▹</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex items-center py-20 bg-black/20 relative">
                {/* Floating Stars */}
                <div className="absolute right-10 top-1/3 hidden lg:block">
                    <div className="relative animate-float-up-down">
                        <div className="text-7xl animate-wiggle">🌟</div>
                        <div className="absolute -top-4 -left-4 text-4xl animate-pulse">⭐</div>
                        <div className="absolute -bottom-4 -right-4 text-3xl" style={{ animation: 'wave 3s ease-in-out infinite' }}>✨</div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 w-full">
                    <h2 className={`text-5xl font-bold mb-12 text-center transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        Featured <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className={`bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6
                          transform transition-all duration-500 hover:scale-105 hover:bg-blue-500/20
                          hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer hover:-rotate-1 relative group ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div className="absolute -top-3 -right-3 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
                                    🔥
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-blue-400">{project.name}</h3>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                        className="transform hover:scale-125 transition-transform">
                                        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                                    </a>
                                </div>

                                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-blue-500/20 rounded-full text-xs hover:bg-green-500/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center text-gray-400 text-sm">
                                    <span className="mr-1">⭐</span>
                                    <span>{project.stars}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex items-center py-20 relative">
                {/* Floating Message Illustration */}
                <div className="absolute left-10 top-1/3 hidden lg:block">
                    <div className="relative animate-float-up-down">
                        <div className="text-8xl animate-wiggle">💌</div>
                        <div className="absolute -top-6 right-0 text-4xl animate-bounce">📧</div>
                        <div className="absolute -bottom-4 -left-4 text-3xl animate-pulse">💬</div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center w-full">
                    <h2 className={`text-5xl font-bold mb-12 transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        Get In <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Touch</span>
                    </h2>

                    <p className={`text-xl text-gray-300 mb-12 transform transition-all duration-1000 delay-200 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        I'm always open to new opportunities, collaborations, and tech discussions.
                        Feel free to reach out if you'd like to work together or just say hi!
                    </p>

                    <div className={`flex flex-col md:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-400 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <a
                            href="mailto:hardirj185@gmail.com"
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-semibold
                       transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 
                       transition-all duration-300 flex items-center gap-2 hover:rotate-2"
                        >
                            <Mail className="w-5 h-5" />
                            Send Email
                        </a>

                        <a
                            href="https://www.linkedin.com/in/hardi-jadvani-1a1711238/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold
                       transform hover:scale-110 hover:bg-blue-500/20 hover:shadow-2xl 
                       hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 hover:-rotate-2"
                        >
                            <Linkedin className="w-5 h-5" />
                            Connect on LinkedIn
                        </a>
                    </div>

                    <div className="mt-16 pt-8 border-t border-blue-500/20">
                        <p className="text-gray-500 flex items-center justify-center gap-2">
                            © 2026 Hardi Jadvani. Built with React & Tailwind CSS
                            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Hardi Jadvani</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
