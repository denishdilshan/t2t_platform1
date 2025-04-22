import { useNavigate } from 'react-router-dom';
import { NavbarSection } from '../screens/Project/sections/NavbarSection';
import { FooterSection } from '../screens/Project/sections/FooterSection';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen w-full">
      <NavbarSection />
      
      {/* Hero Section */}
      <section className="bg-[#0B3562] text-white py-16">
        <div className="container mx-auto px-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-['Raleway'] font-bold mb-8">
              Unlock Growth Through Collaboration!
            </h1>
            <p className="text-lg mb-8">
              Connect with mentors, explore projects, and receive valuable feedback. Grow your skills and knowledge through meaningful collaboration.
            </p>
            <button 
              onClick={() => navigate('/projects')}
              className="bg-white text-[#0B3562] px-8 py-3 rounded-lg font-['Raleway'] font-semibold hover:bg-gray-100"
            >
              Explore Now
            </button>
          </div>
          <div className="lg:w-1/2">
            <img src="/Hero_image.png" alt="Developer" className="w-full max-w-lg mx-auto" />
          </div>
        </div>
      </section>

      {/* Client Acquisition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-16 text-center">
          <h2 className="text-4xl font-['Raleway'] font-bold text-[#0B3562] mb-6">
            Bring your ideas to Real World
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to transform your innovative ideas into reality. Our expert team is ready to bring your vision to life through cutting-edge technology and collaborative development.
          </p>
          <button 
            onClick={() => navigate('/submit-idea')}
            className="bg-[#0B3562] text-white px-8 py-3 rounded-lg font-['Raleway'] font-semibold hover:bg-[#0A2D54] transition-colors"
          >
            Submit your project
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src="/about-illustration.png" alt="Growth Illustration" className="w-full max-w-lg mx-auto" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562] mb-6">About Us</h2>
            <p className="text-lg mb-4">
              <span className="font-bold">TRACE (Technologically Re-Awakening Culture of Excellence)</span> aims to advance Sri Lanka through technology and innovation, fostering a culture of excellence and maintaining a competitive position.
            </p>
            <p className="text-lg mb-6">
              We aim to make Sri Lanka a leading innovation hub by fostering high-performance technology, creating job opportunities, and driving growth.
            </p>
            <button className="bg-[#0B3562] text-white px-6 py-3 rounded-lg font-['Raleway'] hover:bg-[#0A2D54]">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562]">Explore Our Project</h2>
            <p className="text-lg text-gray-600 mt-2">View our recently completed and ongoing projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ABC Car Rent Website Development",
                image: "/project1.png",
                type: "Website"
              },
              {
                title: "ABC Microfinance Software Development",
                image: "/project1.png",
                type: "Software"
              },
              {
                title: "Employee Working Area Analyzer",
                image: "/project1.png",
                type: "App"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="px-3 py-1 bg-[#fca9b89c] text-[#0B3562] rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                  <h3 className="mt-4 text-xl font-['Raleway'] font-semibold text-[#0B3562]">{project.title}</h3>
                  <button 
                    onClick={() => navigate('/projects')}
                    className="mt-4 w-full bg-[#0B3562] text-white py-2 rounded-lg hover:bg-[#0A2D54]"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => navigate('/projects')}
              className="bg-[#0B3562] text-white px-8 py-3 rounded-lg font-['Raleway'] hover:bg-[#0A2D54]"
            >
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Training Programme Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562] text-center mb-12">Training Programme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Development", desc: "Learn from industry experts" },
              { title: "Online + Onsite", desc: "Flexible learning options" },
              { title: "Experienced Instructors", desc: "Professional guidance" },
              { title: "Internship", desc: "Hands-on experience" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-['Raleway'] font-semibold text-[#0B3562] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Raleway'] font-bold text-[#0B3562] text-center mb-12">
            Our Valued Contributors and Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((partner) => (
              <div key={partner} className="flex items-center justify-center">
                <img src={`/partner-${partner}.png`} alt={`Partner ${partner}`} className="h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};