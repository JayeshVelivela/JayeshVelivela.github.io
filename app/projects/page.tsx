import Link from 'next/link'

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        
        <div className="space-y-12">
          <div className="border-b border-gray-200 dark:border-gray-800 pb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Multi Tenant Document Processing Platform
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              A backend system built with multi-tenant architecture, featuring
              authentication and authorization, PostgreSQL database, asynchronous
              processing with Redis, and FastAPI framework. Designed with
              production-focused architecture and containerized with Docker.
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Technologies</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                <li>FastAPI</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>Docker</li>
                <li>Multi-tenant architecture</li>
                <li>Authentication and authorization</li>
                <li>Asynchronous processing</li>
              </ul>
            </div>
            <Link
              href="https://github.com/JayeshVelivela/multi-tenant-document-processing-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

