export default function Skills() {
  const skills = {
    Languages: [
      'Python',
      'Java',
      'C',
      'JavaScript',
      'HTML',
      'CSS',
      'SQL',
      'Bash',
      'C++',
    ],
    Backend: [
      'RESTful APIs',
      'Spring Boot',
      '.NET Core',
      'FastAPI',
      'Node.js',
    ],
    Databases: ['PostgreSQL', 'Redis'],
    Infrastructure: [
      'Docker',
      'Linux',
      'Google Cloud Platform',
      'Amazon Web Services',
      'Microsoft Azure',
      'CI/CD pipelines',
    ],
    Tools: [
      'Visual Studio Code',
      'GitHub Actions',
      'Azure DevOps',
      'React.js',
      'TypeScript',
      'React Native',
      'Redux Toolkit',
      'Material UI',
      'JUnit',
      'xUnit',
      'React Testing Library',
      'Matplotlib',
      'scikit-learn',
      'Streamlit',
      'Supabase',
      'Airtable',
      'Zapier',
      'Google Sheets',
      'Google App Script',
      'Power BI',
      'Tableau',
      'Agile and Scrum methodologies',
      'Unit testing',
      'WCAG accessibility standards',
      'Data visualization',
      'iOS development',
    ],
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-12">Skills</h1>
        
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

