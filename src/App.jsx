import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/navbar'
import './App.css'
import Sidebar from './components/sidebar'
import ContentToRender from './ContentViewer'
import { docs } from './docs'

function App() {
  
  const [show,setPreview] = useState(false)
  const [selectedLang,setSelectedLang] = useState(null)
  const [getStarted,setGetStarted]=useState(false)

  return (
    <>
    <style>{`
      .content-item {
      background: #1f3937;
      color: #f9fafb;
      padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
        flex-grow: 1;
      }
        .content{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
      }
        }
    `}</style>
    <Navbar setPreview={setPreview} setGetStarted={setGetStarted} getStarted={getStarted} />


{!getStarted?
<section className="min-h-[80vh] bg-black px-6 py-4 md:px-12 lg:px-20">
  <div className="mx-auto max-w-7xl">

    {/* Top label */}
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        Developer Notes
      </span>
    </div>

    {/* Main hero */}
    <div className="mt-6 grid gap-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-24">

      {/* Main content */}
      <div>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.5rem]">
          What I learn.
          <br />
          <span className="text-zinc-600">
            I write it down.
          </span>
        </h1>

        <p className="mt-9 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          A personal collection of programming concepts, code, and
          things I discover while learning and building projects.
        </p>

        <button
         onClick={()=>setGetStarted(prev=>!prev)}
          className="group mt-9 inline-flex items-center gap-3
                     rounded-lg bg-white px-5 py-3
                     text-sm font-medium text-black
                     transition-all duration-200
                     hover:bg-zinc-200"
        >
          Explore my notes

          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

    
     {/* Side information */}
<div className="flex flex-col justify-start border-l border-zinc-800 pl-7">

  <div>
    <span className="text-xs uppercase tracking-[0.15em] text-zinc-600">
      Why this exists
    </span>

    <p className="mt-4 text-sm leading-6 text-zinc-500">
      I don't want the things I learn to disappear after
      I finish a project. So I keep them here — simple,
      searchable, and easy to revisit.
    </p>

    <div className="mt-8 border-t border-zinc-900 pt-6">
      <span className="text-xs uppercase tracking-[0.15em] text-zinc-600">
        The idea
      </span>

      <p className="mt-4 text-sm leading-6 text-zinc-500">
        Learn something.
        <br />
        Write it down.
        <br />
        Build with it.
        <br />
        Come back when you forget.
      </p>
    </div>
  </div>

</div>
    </div>

   

  </div>
</section>:
<>
 {!show?
    <>
     <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Website</h1>
        </div>
      </section>
     <section className="content">
      {docs.map((lang,index)=>{
        return(
          <button 
          onClick={() => {
            setPreview(prev=>!prev)
            setSelectedLang(lang)
          }}
          key={index} className="content-item">
            <h2>{lang.title}</h2>
            <p>Learn or Revise {lang.title}.</p>
          </button>
        )
      })}
      </section></>:<>
    
      <ContentToRender lang={selectedLang} />
      </>}
    

</>}

   
      
    </>
  )
}

export default App
