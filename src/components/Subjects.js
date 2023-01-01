import React,{useState} from 'react';
import Subject from './Subject.js';
import Tabledata from './Tabledata.js';
import TimeTableContainer from './TimeTableContainer.js';

const Subjects = (props) => {
    const [subjects, setSubjects] = useState([]);
    const [generateOnLoad, setGenerateOnLoad] = useState(false);
    const [timetable, setTimetable] = useState();
  
    const addSubject = (subject) =>{
      setSubjects([...subjects,subject]);
    }
  
    const getData = async()=>{
      setGenerateOnLoad(true)
      
      try{
       const data =  await fetch("http://65.2.35.205:3000/subjects",{
         method:'POST',
         body:JSON.stringify({
           subject_1:{
             name:"mark"
           }
         })
       });
       const res = await data.json();
       setTimetable(res);
       setGenerateOnLoad(false);
      }catch(err){
        console.log(err);
      }
      setGenerateOnLoad(false)
    } 
    return(
        <div className="">
            <div className='mt-8'>
            <h1 className='text-center text-2xl font-medium'>Generate TimeTable</h1>
            <div className='flex flex-col items-center mt-7'>
                <Subject addSubject={addSubject} staffDetails={props.staffDetails}/>      
                
            </div>
            <div className=''>
                <Tabledata subjects={subjects}/>
                <div className='flex justify-center mt-4'>
                    <button onClick={getData} className='bg-black text-white px-4 py-2 rounded-lg w-3/4 flex justify-center lg:w-1/4 '>
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
            <div className='w-full'>
            {
                (timetable?
                <TimeTableContainer data={timetable} />
                :
                <></>  
                )
            }
            </div>
        </div>
    )
}


export default Subjects;