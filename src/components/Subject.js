import React,{useState} from 'react';
import './css/subject.css';


const Subject = (props) =>{

    const [year, setYear] = useState();
    const [subject, setSubject] = useState();
    const [duration, setDuration] = useState();
    const [staff, setStaff] = useState()
    const [subjectCode, setSubjectCode] = useState();
    const [isLab ,setIslab] = useState('false');
    const [checkbox,setCheckbox] = useState(false)

    const Toggler = () => {
        if(isLab === 'true'){
            setIslab('false');
            setCheckbox(false)
            
        }else{
            setIslab('true');
            setCheckbox(true)

        }


    }
    const sendSubject = () =>{
        const subjectData = {
            "year":year,
            "subject":subject,
            "subjectCode":subjectCode,
            "duration":duration,
            "staff":staff,
            "ISlab":isLab
        }

        props.addSubject(subjectData);
        setYear('');
        setSubject('');
        setDuration('');
        setSubjectCode('')

    }

  

    return(
        <div className='p-4 flex flex-col items-center w-full'>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:ml-14">
                <input value={year} onChange={(e) => setYear(e.target.value)} className='border-black border-2 px-4 py-2 rounded-lg mx-2 mt-2 lg:w-3/5' type="text" placeholder="Year" />
                <input value={subject} onChange={(e) => setSubject(e.target.value)} className='border-black border-2 px-4 py-2 rounded-lg mx-2 mt-2'  type="text" placeholder="Subject Name" />
                <input value={subjectCode} onChange={(e) => setSubjectCode(e.target.value)} className='border-black border-2 px-4 py-2 rounded-lg mx-2 mt-2 lg:w-4/5'  type="text" placeholder="Subject Code" />
                <input value={duration} onChange={(e) => setDuration(e.target.value)} className='border-black border-2 px-4 py-2 rounded-lg mx-2 mt-2  lg:w-4/5' type="text" placeholder="Hours Per Week" />
                <select onChange={(e) => setStaff(e.target.value)} className="border-black border-2 px-4 p-2 rounded-lg mt-2 ml-2  lg:w-4/5">
                    <option>Select Staff</option>
                    {
                        props.staffDetails.map((data) =>(
                            <option value={data.name}>{data.name}</option>
                        ))
                    }
                </select>
                <div className="lg:w-2/3 ml-4">
                    <lable>Is Lab</lable>
                    <input onClick={Toggler} type="checkbox" className="w-10" checked={checkbox}/>
                </div>
                
            </div>
            
            <button onClick={sendSubject} className='bg-black p-2 text-white rounded-lg mt-4 w-1/4 flex justify-center lg:mt-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    )
}

export default Subject;