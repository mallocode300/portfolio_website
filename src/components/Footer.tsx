import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-primary-dark mt-24 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-text-dark mb-4">MALLORY ANTOMARCHI</h3>
            <p className="text-text-default">An AI Engineer and Researcher.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:flex md:space-x-12">
            <div>
              <h4 className="text-sm font-semibold text-text-dark mb-3">Pages</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-text-default hover:text-accent text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-text-default hover:text-accent text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-text-default hover:text-accent text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-text-default hover:text-accent text-sm">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-text-default hover:text-accent text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-text-dark mb-3">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:mantomarchi300@outlook.com" className="text-text-default hover:text-accent text-sm">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mallocode300" target="_blank" rel="noopener noreferrer" className="text-text-default hover:text-accent text-sm">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mallocode200/" target="_blank" rel="noopener noreferrer" className="text-text-default hover:text-accent text-sm">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://x.com/mallocode200" target="_blank" rel="noopener noreferrer" className="text-text-default hover:text-accent text-sm">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-dark text-sm text-text-light">
          <p>&copy; {new Date().getFullYear()} • All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 