import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({setPreview,setGetStarted,getStarted}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
          width: 100%;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 50;
          background: #111827;
          color: #f9fafb;
          box-shadow: 0 2px 12px rgba(15, 23, 42, 0.2);
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .navbar-brand {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .navbar-link {
          color: #e5e7eb;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .navbar-link:hover {
          color: #f8fafc;
        }

        .cta-button {
          background: #3b82f6;
          border: none;
          color: #fff;
          padding: 0.55rem 1rem;
          border-radius: 9999px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .cta-button:hover {
          background: #2563eb;
        }

        .menu-toggle {
          display: none;
          background: transparent;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          color: #f9fafb;
          padding: 0.55rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .navbar-container {
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .menu-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .navbar-links {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 0.5rem;
            margin-top: 0.75rem;
            display: none;
          }

          .navbar-links.open {
            display: flex;
          }

          .navbar-link {
            padding: 0.7rem 0.75rem;
            border-radius: 0.75rem;
            background: rgba(255, 255, 255, 0.04);
          }

          .cta-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
         
          <div className="navbar-brand">MaikashDocs</div>

          <button
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>

          <div className={`navbar-links${isOpen ? ' open' : ''}`}>
            {getStarted && (
              <button 
              onClick={()=>{
                setPreview((prev)=>{
                  if(prev){
                    return !prev
                  }else{
                    setGetStarted(false)
                  }

                  return prev
              })}}
                          className="
                          group
                          inline-flex
                          items-center
                          gap-2
                          rounded-md
                          px-3
                          py-2
                          text-sm
                        text-zinc-500
                          transition-colors
                          duration-200
                        hover:bg-zinc-900
                        hover:text-zinc-200
                        "
                          >
                          <span className="transition-transform duration-200 group-hover:-translate-x-1">
                                ←
                          </span>
                              Back
                </button>
                        )}
           
            {navItems.map((item) => (
              <a onClick={(e)=>{
                
                if(item.label=="Home"){
                  e.preventDefault()
                  setGetStarted(false)
                  setPreview(false)
                }
              }} key={item.href} className="navbar-link" href={item.href}>
                {item.label}
              </a>
            ))}

          </div>
        </div>
      </nav>
    </>
  );
}
