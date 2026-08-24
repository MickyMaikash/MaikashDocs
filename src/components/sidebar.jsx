import React, { useState } from "react";
import '../App.css'
import { docs } from "../docs";
import sidebarIconOpen from '../assets/left_panel_open.svg'
import sidebarIconClose from '../assets/left_panel_close.svg'
const Sidebar = ({
  currentfile,setcurrentfile,
  topics=
    {
        title:"Python",
        subtopics:[
           {
            subtitle:"Basics",
            children:[
                    {
                        title:"Python Introduction",
                        link:"/docs/Python/Basics/PytIntro.md"
                    },
                    {
                        title:"Data Types",
                        link:"/docs/Python/Basics/star.md"
                        
                    }
            ]
           },
           {
            subtitle:"Variables",
            children:[
                {
                    title:"Variables in Python",
                    link:"/docs/Python/Variables/variables.md"
                }
            ]
           }
        ]
    },
}) => {



  const [openTopic, setOpenTopic] = useState(null);
  const [filterredReuslt,setfilterResult]=useState([])
  const [serachStart,setSearchStart]=useState(false)
  const [showSlidebar,setShowslidebar]=useState(true)
  function SearchValue(query){
    let result=[]
    topics.subtopics.forEach((subtopic,index)=>{
      subtopic.children.forEach((child)=>{
        if(child.title.toLowerCase().includes(query.toLowerCase())){
          result.push(child)
        }
      })
    })
    setfilterResult(result)
  }


  return (
    <div className={`
    relative 
    ${!showSlidebar && ` 
      sticky 
      top-0 
      w-10 
      h-screen 
      border-r
    border-gray-800 
      bg-[#0d1117]`}
    `}>
 <aside
     className={`
    sticky
    top-0
    h-screen
    w-64
    shrink-0
    border-r
    border-gray-800
    bg-[#0d1117]
    p-5
    overflow-y-auto scrollbar-hide
    ${!showSlidebar && "hidden"}
    
    `}
    >
  {/* Heading */}
      <h2
        className="
          mb-3
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-gray-500
        "
      >
        Topics
      </h2>

      
      {/* Search */}
      <input
        type="text"
        placeholder="Search docs..."
        className="
          mb-5
          w-full
          rounded-md
          border
          border-gray-700
          bg-[#161b22]
          px-3
          py-2
          text-sm
          text-gray-200
          outline-none
          placeholder:text-gray-500
          focus:border-gray-500
        "
        onChange={

          e=>{
            const txt=e.target.value;
            if(txt.length>0){
                if(!serachStart){
                    setSearchStart(true)
                }
                SearchValue(txt)
            }else{
                setSearchStart(false)
                setfilterResult([])
            }
          }
        }
        
      />


    


    {serachStart && filterredReuslt.length>0?(<>
    
     <nav className="space-y-1">

        {filterredReuslt.map((child, index) => {
          return(
              <div
              key={index}
                className="
                  ml-3
                  mt-1
                  border-l
                  border-gray-700
                  pl-3
                  space-y-1
                "
              >
                  <button
                    
                    className=  {`
                        cursor-pointer
                      rounded-md
                      px-2
                      py-1.5
                      text-sm
                      text-gray-400
                      hover:bg-gray-800
                      hover:text-white 

                      ${
                        currentfile.link==child.link ? "bg-blue-600 text-white"
      : "text-gray-400 hover:bg-gray-800 hover:text-white"}
                      
                      `}

                    onClick={() => {
                    
                      setcurrentfile(child)
                    setSearchStart(false)
                    }}
                  >
                    {child.title}
                  </button>
              </div>
          
          )
        })}

      </nav>
    
    </>)
  
    
    :(<> <nav className="space-y-1">

        {topics.subtopics.map((item, index) => {
          const isActive=item.children.some(child=>child.link==currentfile.link)
          return(
             <div key={index}>
            <button
              onClick={() =>(item.children && item.children.length>0) ? (item.children.length>1?
                setOpenTopic(
                  openTopic === index ? null : index
                ):setcurrentfile(item.children[0])):null
              }
              className={
                `
                 flex
                w-full
                items-center
                justify-between
                rounded-md
                px-3
                py-2
                text-left
                text-sm
                text-gray-300
                hover:bg-gray-800
                hover:text-white

                ${isActive && "bg-blue-600 text-white font-medium"}
                
                `
              }
            >
              

              {(item.children && item.children.length>0) && 
                item.children.length>1?(
                    <>
                      {item.subtitle}
                      <span>
                        {openTopic === index  ? "−" : "+"}
                      </span>
                    </>
                ):(
                    item.children[0].title
                )
              
              }

            </button>


            {/* Sub Topics */}
            {(openTopic === index) && (
              <div
                className="
                  ml-3
                  mt-1
                  border-l
                  border-gray-700
                  pl-3
                  space-y-1
                "
              >
                {item.children.map((child, subIndex) => (
                  <button
                    key={subIndex}
                    className=  {`
                        cursor-pointer
                      rounded-md
                      px-2
                      py-1.5
                      text-sm
                      text-gray-400
                      hover:bg-gray-800
                      hover:text-white 

                      ${
                        currentfile.link==child.link ? "bg-blue-600 text-white"
      : "text-gray-400 hover:bg-gray-800 hover:text-white"}
                      
                      `}

                    onClick={() => setcurrentfile(child)}
                  >
                    {child.title}
                  </button>
                ))}
              </div>
            )}

          </div>
          )
        })}

      </nav></>)}
      {/* Topics */}
     

    </aside>
    <button  
    onClick={()=>setShowslidebar(prev=>!prev)}
    className={`
       absolute
    top-4
    -right-4
    z-50
    h-8
    w-8
    shrink-0
    flex-none
    flex
    items-center
    justify-center
    rounded-md
    bg-gray-800
    p-1
     `}>
      <img
       className="h-5 w-5"
      src={showSlidebar?sidebarIconClose:sidebarIconOpen}
      />
      </button>
    </div>
   
  );
};

export default Sidebar;