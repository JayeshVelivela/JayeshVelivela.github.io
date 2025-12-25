import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-12">Contact</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">GitHub</h2>
            <Link
              href="https://github.com/JayeshVelivela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/JayeshVelivela
            </Link>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <Link
              href="https://www.linkedin.com/in/jayeshvelivela/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/jayeshvelivela
            </Link>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <a
              href="mailto:jvelivel@umich.edu"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              jvelivel@umich.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

