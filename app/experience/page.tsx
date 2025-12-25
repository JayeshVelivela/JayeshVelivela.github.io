export default function Experience() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-12">Experience</h1>
        
        <div className="space-y-12">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Software Engineer Intern
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Ghadys LLC
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Northville, Michigan
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0">
                May 2025 - August 2025
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-6">
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

          <div className="border-b border-gray-200 dark:border-gray-800 pb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Outreach Director Intern
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  M1 Digital
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Detroit, Michigan
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0">
                March 2024 - December 2024
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-6">
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
    </div>
  )
}

