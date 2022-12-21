import React,{useState} from 'react';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Subject from './components/Subject.js';
import Tabledata from './components/Tabledata.js';


const App = () =>{
  const [subjects, setSubjects] = useState([]);
  const [generateOnLoad, setGenerateOnLoad] = useState(false);

  const addSubject = (subject) =>{
    setSubjects([...subjects,subject]);
  }

  return(
    <div className="">
        <Navbar />
        <Banner />
        <div className='mt-8'>
          <h1 className='text-center text-2xl font-medium'>Generate TimeTable</h1>
          <div className='flex flex-col items-center mt-7'>
              <Subject addSubject={addSubject}/>      
          </div>
          <div className=''>
            <Tabledata subjects={subjects}/>
            <div className='flex justify-center mt-4'>
                <button className='bg-black text-white px-4 py-2 rounded-lg w-3/4 flex justify-center lg:w-1/4 '>
                  {
                    (generateOnLoad?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 animate-spin">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      :
                      "Generate TimeTable"
                      
                    )
                  }  
                </button>              
            </div>
          </div>
        </div>
        <div className='bg-black p-20 mt-10'>

        </div>
    </div>
  )
}


export default App;