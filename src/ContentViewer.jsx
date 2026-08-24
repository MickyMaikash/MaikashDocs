import {useState, useEffect} from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import MarkdownViewer from './components/markdownViewer';

function getPreviousAndNextPages(lang, currentFile) {
    //getting all the list of children titles
 const pages=lang.subtopics.flatMap(topic=>topic.children)

 const currentIndex=pages.findIndex(page=>page.link==currentFile.link)

 return(
  {  previous:currentIndex>0?pages[currentIndex-1]:null,
    next:currentIndex<pages.length-1?pages[currentIndex+1]:null}
 )

}

function ContentToRender({lang}) {
    const [currentFile,setCurrentFile] = useState(lang.subtopics[0].children[0]);
  const { previous, next } = getPreviousAndNextPages(
    lang,
    currentFile
  );
    return (
        <main className="flex min-h-screen">

            <Sidebar  topics={lang} currentfile={currentFile} setcurrentfile={setCurrentFile} />

            <div className="flex-1 px-8 py-6">
                <MarkdownViewer src={currentFile.link} />
                <div className="mt-10 flex items-center justify-between border-t border-gray-800 pt-6">

  {/* Previous */}
  {previous ? (
    <button
      onClick={() => setCurrentFile(previous)}
      className="
        flex
        flex-col
        items-start
        rounded-xl
        border
        border-gray-700
        bg-[#161b22]
        px-5
        py-3
        transition-all
        hover:border-blue-500
        hover:bg-[#1b2430]
      "
    >
      <span className="text-xs text-gray-500">
        ← Previous
      </span>

      <span className="mt-1 text-sm font-medium text-white">
        {previous.title}
      </span>
    </button>
  ) : (
    <div />
  )}

  {/* Next */}
  {next ? (
    <button
      onClick={() => {
        setCurrentFile(next) 
        window.scrollTo({
          top:0,
          behavior:"auto"
        })
        
      }

        
      }
      className="
        flex
        flex-col
        items-end
        rounded-xl
        border
        border-gray-700
        bg-[#161b22]
        px-5
        py-3
        transition-all
        hover:border-blue-500
        hover:bg-[#1b2430]
      "
    >
      <span className="text-xs text-gray-500">
        Next →
      </span>

      <span className="mt-1 text-right text-sm font-medium text-white">
        {next.title}
      </span>
    </button>
  ) : (
    <div />
  )}

</div>
            </div>

        </main>
    )
}



export default ContentToRender;