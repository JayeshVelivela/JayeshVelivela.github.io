import Link from 'next/link'
import ProfileImage from '@/components/ProfileImage'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <ProfileImage />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                Hi, my name is Jayesh Velivela. I build software systems that are designed to scale.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Student at the University of Michigan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl"
                >
                  View Projects
                </a>
                <Link
                  href="https://github.com/JayeshVelivela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jayeshvelivela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              I'm Jayesh Velivela, a software engineer focused on building production ready systems that are designed to scale. I care deeply about how software behaves in the real world, not just how it looks in a demo.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              My work centers around backend engineering, APIs, databases, and distributed system concepts. I enjoy designing clean architectures, modeling data thoughtfully, and building services that are reliable, testable, and easy to extend.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              I've built and shipped backend systems using modern frameworks and tools, with hands-on experience in authentication, asynchronous processing, relational databases, and containerized deployments. I approach engineering with a production mindset, emphasizing correctness, maintainability, and clear tradeoffs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I'm currently a college student continuing to deepen my foundation in computer science while building real world projects that mirror how professional engineering teams work. I'm excited by problems that require ownership, thoughtful design, and systems level thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multi Tenant Document Processing Platform */}
            <div className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Multi Tenant Document Processing Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                A backend system built with multi-tenant architecture, featuring
                authentication and authorization, PostgreSQL database, asynchronous
                processing with Redis, and FastAPI framework. Designed with
                production-focused architecture and containerized with Docker.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                  FastAPI
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                  Redis
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                  Docker
                </span>
              </div>
              <Link
                href="https://github.com/JayeshVelivela/multi-tenant-document-processing-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-2"
              >
                View on GitHub →
              </Link>
            </div>

            {/* Lift Link */}
            <div className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Lift Link
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                A full stack mobile fitness application built with React Native, Redux Toolkit, and TypeScript. 
                Features real-time workout logging, analytics, and a social feed. Integrated Supabase for 
                authentication, real-time data synchronization, relational tables, and role-based access control.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                  React Native
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                  Supabase
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                  PostgreSQL
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-6">
                Key features: Real-time synchronization, offline functionality, UUID-based schema design
              </p>
              <Link
                href="https://github.com/JayeshVelivela/LiftLink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-2"
              >
                View on GitHub →
              </Link>
            </div>

            {/* Credit Wise */}
            <div className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Credit Wise
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                An interactive web application that simulates and predicts FICO credit scores based on 
                user-adjustable financial behaviors. Features a supervised machine learning model using Random 
                Forest Regressor with R2 accuracy scores above 0.92, integrated with scikit-learn pipelines 
                and Streamlit reactive UI components.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                  Python
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                  scikit-learn
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                  Streamlit
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                  Matplotlib
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 italic mb-6">
                Features: Real-time prediction visualizations, feature importance analysis, portable deployment
              </p>
              <Link
                href="https://github.com/JayeshVelivela/CreditWise"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-2"
              >
                View on GitHub →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Experience
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Software Engineer Intern
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                    Ghadys LLC
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Northville, Michigan
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0 font-medium">
                  May 2025 - August 2025
                </p>
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  Built and optimized over 20 RESTful APIs using Java with Spring
                  Boot and C with .NET Core, improving backend response time by 35
                  percent across high volume fintech and healthcare systems.
                </li>
                <li>
                  Assisted with reusable backend component design to support
                  scalability.
                </li>
                <li>
                  Developed responsive and accessible UI components using React.js,
                  TypeScript, and Material UI, delivering production ready client
                  features with over 95 percent satisfaction while ensuring cross
                  browser compatibility and WCAG accessibility compliance.
                </li>
                <li>
                  Wrote over 150 automated unit and integration tests using JUnit,
                  xUnit, and React Testing Library, increasing test coverage from
                  57 percent to 91 percent and reducing QA regression cycles by 60
                  percent.
                </li>
                <li>
                  Automated CI and CD pipelines using GitHub Actions and Azure
                  DevOps, reducing deployment time by 85 percent and enabling
                  consistent daily production releases across multiple cloud
                  environments.
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Outreach Director Intern
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                    M1 Digital
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Detroit, Michigan
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0 font-medium">
                  March 2024 - December 2024
                </p>
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  Led data driven outreach strategies by analyzing KPIs from more
                  than 10 digital events and producing dashboards and reports that
                  informed future campaign design.
                </li>
                <li>
                  Collaborated with internal product and marketing teams to define
                  and execute OKRs for digital equity initiatives, directly
                  impacting over 100 participants.
                </li>
                <li>
                  Designed scalable event registration and feedback workflows using
                  Airtable and Zapier automations, reducing manual coordination
                  time by 50 percent while enabling real time attendance tracking
                  and sentiment analysis.
                </li>
                <li>
                  Developed automated analytics pipelines using Google Sheets,
                  Google App Script, and Python to track engagement trends,
                  resulting in a 20 percent increase in partner conversion and
                  outreach ROI.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Bash', 'C++'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['RESTful APIs', 'Spring Boot', '.NET Core', 'FastAPI', 'Node.js'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'Redis'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Linux', 'Google Cloud Platform', 'Amazon Web Services', 'Microsoft Azure', 'CI/CD pipelines'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Tools & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {['Visual Studio Code', 'GitHub Actions', 'Azure DevOps', 'React.js', 'TypeScript', 'React Native', 'Redux Toolkit', 'Material UI', 'JUnit', 'xUnit', 'React Testing Library', 'Matplotlib', 'scikit-learn', 'Streamlit', 'Supabase', 'Airtable', 'Zapier', 'Google Sheets', 'Google App Script', 'Power BI', 'Tableau', 'Agile and Scrum methodologies', 'Unit testing', 'WCAG accessibility standards', 'Data visualization', 'iOS development'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Contact
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">GitHub</h3>
                <Link
                  href="https://github.com/JayeshVelivela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  github.com/JayeshVelivela
                </Link>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
                <Link
                  href="https://www.linkedin.com/in/jayeshvelivela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  linkedin.com/in/jayeshvelivela
                </Link>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <a
                  href="mailto:jvelivel@umich.edu"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  jvelivel@umich.edu
                </a>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Resume</h3>
                <Link
                  href="/Jayesh_Velivela_Resume.pdf"
                  download
                  className="inline-block px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
                >
                  Download Resume (PDF)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
