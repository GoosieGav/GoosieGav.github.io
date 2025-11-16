import Hero from "@/components/ui/animated-shader-hero";

function App() {
  const handlePrimaryClick = () => {
    console.log('View My Work clicked!');
    // Navigate to your portfolio/projects section
    window.open('https://github.com/GoosieGav', '_blank');
  };

  const handleSecondaryClick = () => {
    console.log('Hire Me clicked!');
    // Navigate to contact section or open email
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
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
      
      {/* Additional content below hero */}
      <div id="about" className="bg-gray-50 p-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About This Component
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">🎨 Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Interactive WebGL shader background</li>
                <li>• Smooth animations and transitions</li>
                <li>• Fully responsive design</li>
                <li>• Customizable content and styling</li>
                <li>• TypeScript support</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">⚡ Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React 18</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• WebGL 2.0</li>
                <li>• Vite</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              📝 How to Use the Hero Component
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-700">
{`<Hero
  trustBadge={{
    text: "Your trust badge text",
    icons: ["🚀", "⭐", "✨"] // optional
  }}
  headline={{
    line1: "Your First Line",
    line2: "Your Second Line"
  }}
  subtitle="Your compelling subtitle text goes here..."
  buttons={{
    primary: {
      text: "Primary CTA",
      onClick: handlePrimaryClick
    },
    secondary: {
      text: "Secondary CTA", 
      onClick: handleSecondaryClick
    }
  }}
  className="custom-classes" // optional
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
