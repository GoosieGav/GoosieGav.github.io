import Hero from "@/components/ui/animated-shader-hero";
import { 
  Code2, 
  Smartphone, 
  Brain, 
  Zap, 
  Clock, 
  MessageSquare, 
  Palette, 
  DollarSign,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  FileText,
  Star,
  Users,
  Trophy,
  ThumbsUp
} from "lucide-react";

// Wave Divider Component
const WaveDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`absolute left-0 right-0 ${flip ? 'top-0 rotate-180' : 'bottom-0'} z-10`}>
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <path
        d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
        fill="currentColor"
        className="text-black"
      />
    </svg>
  </div>
);

function App() {
  const handlePrimaryClick = () => {
    console.log('View My Work clicked!');
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryClick = () => {
    console.log('Hire Me clicked!');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thanks for reaching out! I\'ll get back to you soon.');
  };

  return (
    <div className="w-full bg-black">
      <Hero
        trustBadge={{
          text: "Student Developer • Open to Opportunities",
          icons: ["✨"]
        }}
        headline={{
          line1: "Launch Your Ideas",
          line2: "Into Reality"
        }}
        subtitle="Supercharging projects with modern web, mobile, and AI-powered development — built by a student developer obsessed with building fast, intuitive, and scalable products."
        buttons={{
          primary: {
            text: "View My Work",
            onClick: handlePrimaryClick
          },
          secondary: {
            text: "Hire Me",
            onClick: handleSecondaryClick
          }
        }}
      />

      {/* What I Do Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-orange-950/10 to-black overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(251,146,60,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-4">
              What I Do
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Full-stack development with a focus on modern, scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Web Development",
                description: "Responsive, modern websites using React, Next.js, and Tailwind CSS"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Apps",
                description: "Cross-platform apps with Flutter or React Native"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Machine Learning",
                description: "Models, automation, and data pipelines with Python + TensorFlow"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Custom Software",
                description: "Scripts, bots, APIs, and integrations tailored to your needs"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/5 border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20"
              >
                <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Subtle glow accent */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Some of my recent work
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                title: "AI-Powered Task Manager",
                description: "Smart productivity app with ML-based task prioritization",
                features: [
                  "Natural language task input",
                  "Intelligent scheduling",
                  "Cross-platform sync"
                ],
                tech: ["React", "Python", "TensorFlow", "Firebase"],
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
              },
              {
                title: "E-Commerce Platform",
                description: "Full-stack marketplace with real-time inventory management",
                features: [
                  "Secure payment processing",
                  "Admin dashboard",
                  "Real-time notifications"
                ],
                tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
                reverse: true
              },
              {
                title: "Fitness Tracking App",
                description: "Mobile app for workout tracking with AI form correction",
                features: [
                  "Computer vision form analysis",
                  "Progress analytics",
                  "Social features"
                ],
                tech: ["Flutter", "Python", "OpenCV", "AWS"],
                image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80"
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2 group">
                  <div className="relative rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-[1.02]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-4">
                      {project.description}
                    </p>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-orange-500/10 text-orange-300 rounded-full border border-orange-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-orange-500/50">
                      <Github className="w-4 h-4" />
                      View Code
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border border-orange-500/30 text-orange-300 font-semibold rounded-full hover:bg-orange-500/10 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-orange-950/10 to-black overflow-hidden">
        {/* Wave divider top */}
        <WaveDivider flip />
        
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(251,146,60,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.3) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />
        
        {/* Wave divider bottom */}
        <WaveDivider />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-4">
              Why Work With Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional results with student-friendly energy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Fast Turnaround",
                description: "I deliver clean builds quickly without sacrificing quality"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Communication",
                description: "Frequent updates through Discord or email"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Polished UI",
                description: "Modern designs with smooth UX"
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Affordable",
                description: "High-quality work at student-friendly pricing"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-full bg-orange-500/10 text-orange-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-4">
              Skills & Tools
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies I work with
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                category: "Languages",
                skills: ["Python", "JavaScript", "TypeScript", "Java", "Dart", "SQL"]
              },
              {
                category: "Frameworks & Libraries",
                skills: ["React", "Next.js", "Node.js", "Flask", "TensorFlow", "Flutter", "Tailwind CSS"]
              },
              {
                category: "Tools & Platforms",
                skills: ["Git", "Docker", "Firebase", "AWS", "Linux", "PostgreSQL", "MongoDB"]
              }
            ].map((group, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-orange-300 mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-gray-200 rounded-lg border border-orange-500/30 hover:border-orange-500/60 hover:scale-105 transition-all duration-300 cursor-default"
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

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-orange-950/10 to-black overflow-hidden">
        {/* Wave divider top */}
        <WaveDivider flip />
        
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        
        {/* Wave divider bottom */}
        <WaveDivider />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-4">
              What People Say
            </h2>
            <p className="text-gray-400 text-lg">
              Feedback from clients and collaborators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Gavin delivered our website ahead of schedule with incredible attention to detail. The design is modern and the performance is outstanding.",
                name: "Sarah Chen",
                role: "Small Business Owner",
                initials: "SC"
              },
              {
                quote: "Working with Gavin was seamless. Great communication, clean code, and he really understood what we needed.",
                name: "Marcus Rodriguez",
                role: "Startup Founder",
                initials: "MR"
              },
              {
                quote: "Impressive work for a student developer! The ML integration was exactly what we needed and it works flawlessly.",
                name: "Dr. Emily Watson",
                role: "Research Professor",
                initials: "EW"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/5 border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 hover:scale-105 transition-all duration-300"
              >
                <Star className="w-8 h-8 text-orange-400 mb-4" />
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-black font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Radial glow behind stats */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08),transparent_70%)]" />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Code2 className="w-8 h-8" />, number: "12+", label: "Projects Shipped" },
              { icon: <Users className="w-8 h-8" />, number: "3", label: "Paying Clients" },
              { icon: <Trophy className="w-8 h-8" />, number: "5+", label: "Hackathons Entered" },
              { icon: <ThumbsUp className="w-8 h-8" />, number: "95%", label: "Positive Feedback" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20"
              >
                <div className="inline-flex text-orange-400 mb-4">
                  {stat.icon}
                </div>
                <p className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-orange-950/10 to-black overflow-hidden">
        {/* Wave divider top */}
        <WaveDivider flip />
        
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(251,146,60,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />
        
        {/* Wave divider bottom */}
        <WaveDivider />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="lg:w-5/12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl blur-2xl opacity-20" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Profile"
                  className="relative rounded-2xl w-full aspect-square object-cover border border-orange-500/30"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-7/12 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hey! I'm Gavin, a student developer with a passion for turning ideas into reality. 
                  I started coding when I was 14, and since then I've been hooked on building things 
                  that people actually want to use.
                </p>
                <p>
                  Currently studying Computer Science with a focus on Machine Learning and Full-Stack 
                  Development. When I'm not in class, you'll find me working on client projects, 
                  contributing to open source, or competing in hackathons.
                </p>
                <p>
                  My goal? To create software that's not just functional, but delightful to use. 
                  I believe great products come from obsessing over the details — from the initial 
                  concept to the final pixel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-gray-400 text-lg">
              Reach out — I reply fast
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/5 border border-orange-500/20 backdrop-blur-sm">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-orange-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Or reach out directly:
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:your@email.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 hover:border-orange-500/50 transition-all group"
                  >
                    <Mail className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">your@email.com</span>
                  </a>
                  <a
                    href="https://github.com/GoosieGav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 hover:border-orange-500/50 transition-all group"
                  >
                    <Github className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">github.com/GoosieGav</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 hover:border-orange-500/50 transition-all group"
                  >
                    <Linkedin className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-black border-t border-orange-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">
              © 2025 Gavin. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/GoosieGav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your@email.com"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-300 rounded-lg border border-orange-500/30 hover:bg-orange-500/20 transition-all"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
