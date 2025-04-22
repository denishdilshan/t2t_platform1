import { useParams, useNavigate } from 'react-router-dom';
import { NavbarSection } from '../screens/Project/sections/NavbarSection';
import { FooterSection } from '../screens/Project/sections/FooterSection';
import { ClockIcon, UsersIcon, BuildingIcon, ListTodoIcon, LayersIcon, TargetIcon } from 'lucide-react';

const projects = {
  1: {
    title: 'ABC Car Rent Website Development',
    type: 'Website',
    typeColor: 'bg-[#fca9b89c]',
    dotColor: 'bg-[#f25470]',
    description: 'A comprehensive car rental website with modern booking system and user-friendly interface.',
    students: '06 Students',
    hours: '8Hours/Day',
    months: '03 Months',
    image: '/project1.png',
    features: [
      'User-friendly booking interface',
      'Real-time availability tracking',
      'Secure payment integration',
      'Customer review system',
      'Admin dashboard for fleet management'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'PostgreSQL',
      'Stripe Payment',
      'AWS Services'
    ]
  },
  2: {
    title: 'ABC Microfinance Software Development',
    type: 'Software',
    typeColor: 'bg-[#d9f2fb]',
    dotColor: 'bg-[#23bdee]',
    description: 'Advanced microfinance management software with integrated accounting and loan tracking features.',
    students: '06 Students',
    hours: '8Hours/Day',
    months: '06 Months',
    image: '/rectangle-64-5.png',
    features: [
      'Loan management system',
      'Automated payment tracking',
      'Financial reporting',
      'Customer management',
      'Risk assessment tools'
    ],
    technologies: [
      'Java Spring Boot',
      'React.js',
      'MySQL',
      'Docker',
      'Jenkins'
    ]
  },
  3: {
    title: 'Employee Working Area Analyzer',
    type: 'App',
    typeColor: 'bg-[#f0e2c1]',
    dotColor: 'bg-[#f4c467]',
    description: 'Smart workplace analytics tool for monitoring and optimizing employee workspace utilization.',
    students: '06 Students',
    hours: '8Hours/Day',
    months: '03 Months',
    image: '/rectangle-64-8.png',
    features: [
      'Real-time occupancy tracking',
      'Heat maps for space utilization',
      'Automated reporting',
      'Capacity planning tools',
      'Social distancing monitoring'
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'React Native',
      'MongoDB',
      'Azure Cloud'
    ]
  }
};

export const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = id ? parseInt(id) : null;
  const project = projectId && projectId > 0 && projectId <= 3 ? projects[projectId as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="bg-[#f8f8f8] flex flex-col min-h-screen w-full">
        <NavbarSection />
        <div className="flex-grow container mx-auto px-4 py-16">
          <div className="bg-white rounded-[20px] shadow-lg p-8 text-center">
            <h1 className="text-2xl font-semibold text-[#0b3562]">Project not found</h1>
            <button
              onClick={() => navigate('/')}
              className="mt-8 px-6 py-3 rounded-[10px] bg-gradient-to-r from-[#0b3562] to-[#144b88] hover:from-[#0a2d54] hover:to-[#103e73] text-white font-['Raleway'] font-semibold"
            >
              Back to Projects
            </button>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="bg-[#f8f8f8] flex flex-col min-h-screen w-full">
      <NavbarSection />
      <main className="flex-grow container mx-auto px-4 py-1">
        <div className="bg-white rounded-[20px] shadow-lg overflow-hidden p-8">
          
          <div className="relative mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
              <h1 className="text-white text-4xl font-['Raleway'] font-bold text-center px-6">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="mb-6">
            <div className={`inline-flex items-center h-7 px-3 rounded-[5px] ${project.typeColor}`}>
              <div className={`w-2.5 h-2.5 ${project.dotColor} rounded-[5px] mr-2`}></div>
              <span className="font-['Poppins'] font-medium text-[#0b3562] text-[15px]">
                {project.type}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-16 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-[0px_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-shadow duration-300 w-44 text-center">
              <h3 className="text-gray-600 text-lg mb-2">Team</h3>
              <div className="flex items-center justify-center gap-2">
                <UsersIcon className="w-7 h-7 text-[#0b3562]" />
                <p className="font-['Raleway'] font-semibold text-[#0b3562] text-lg">6 members</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-[0px_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-shadow duration-300 w-44 text-center">
              <h3 className="text-gray-600 text-lg mb-2">Duration</h3>
              <div className="flex items-center justify-center gap-2">
                <ClockIcon className="w-7 h-7 text-[#0b3562]" />
                <p className="font-['Raleway'] font-semibold text-[#0b3562] text-lg">6 months</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-[0px_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-shadow duration-300 w-44 text-center">
              <h3 className="text-gray-600 text-lg mb-2">Company</h3>
              <div className="flex items-center justify-center gap-2">
                <BuildingIcon className="w-7 h-7 text-[#0b3562]" />
                <p className="font-['Raleway'] font-semibold text-[#0b3562] text-lg">T2T</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <details className="bg-white rounded-lg shadow-[0px_4px_16px_rgba(0,0,0,0.1)] open:shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300">
              <summary className="p-6 font-['Raleway'] text-xl font-semibold text-[#0b3562] cursor-pointer hover:bg-gray-50 flex items-center">
                <ListTodoIcon className="w-6 h-6 mr-3" />
                Task Details
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">
                  This project involves developing a {project.type.toLowerCase()} solution that requires careful planning and execution. 
                  The main tasks include:
                </p>
                <ul className="mt-4 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 mt-2 bg-[#0b3562] rounded-full mr-3"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-[0px_4px_16px_rgba(0,0,0,0.1)] open:shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300">
              <summary className="p-6 font-['Raleway'] text-xl font-semibold text-[#0b3562] cursor-pointer hover:bg-gray-50 flex items-center">
                <LayersIcon className="w-6 h-6 mr-3" />
                Technologies Used
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  The project leverages modern technologies to deliver a robust and scalable solution:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-[#0b3562] rounded-full mr-3"></div>
                      <span className="text-gray-600">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-[0px_4px_16px_rgba(0,0,0,0.1)] open:shadow-[0px_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300">
              <summary className="p-6 font-['Raleway'] text-xl font-semibold text-[#0b3562] cursor-pointer hover:bg-gray-50 flex items-center">
                <TargetIcon className="w-6 h-6 mr-3" />
                Project Goals
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  The primary objectives of this project are:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-[#0b3562] rounded-full mr-3"></span>
                    <span className="text-gray-600">Develop a high-quality {project.type.toLowerCase()} solution that meets all client requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-[#0b3562] rounded-full mr-3"></span>
                    <span className="text-gray-600">Complete the project within the specified timeline of {project.months}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-[#0b3562] rounded-full mr-3"></span>
                    <span className="text-gray-600">Ensure efficient team collaboration with {project.students}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-[#0b3562] rounded-full mr-3"></span>
                    <span className="text-gray-600">Implement industry best practices and maintain high code quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 bg-[#0b3562] rounded-full mr-3"></span>
                    <span className="text-gray-600">Deliver a maintainable and scalable solution for long-term success</span>
                  </li>
                </ul>
              </div>
            </details>
          </div>

          <div className="flex justify-center w-full mb-8">
            <button
              onClick={() => navigate('/')}
              className="w-[300px] h-16 rounded-[10px] bg-gradient-to-r from-[#0b3562] to-[#144b88] hover:from-[#0a2d54] hover:to-[#103e73] text-white font-['Raleway'] font-semibold text-[23px]"
            >
              Expression of Interest
            </button>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};