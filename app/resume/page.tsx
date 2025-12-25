import Link from 'next/link'

export default function Resume() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Download my resume as a PDF.
        </p>
        <Link
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          Download Resume (PDF)
        </Link>
      </div>
    </div>
  )
}

