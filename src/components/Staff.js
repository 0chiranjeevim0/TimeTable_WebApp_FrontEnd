import React,{useState} from 'react';
import StaffTable from './StaffTable';

const Staff = ({addStaffDetails}) =>{
    //states to store staff details
    const [tempStaffId, setTempStaffId] = useState('');
    const [tempStaffName, setTempStaffName] = useState('');
    const [staffData, setStaffData] = useState([]);

    const setStaff = () =>{
        //methord to add a staff
        setStaffData([...staffData,{"id":tempStaffId,"name":tempStaffName}])
        setTempStaffId('');
        setTempStaffName('');
    }

    const setStaffDetails = () =>{
        //methord to set all staff details
        addStaffDetails(staffData);
    }
    console.log(staffData)
    return(
        <div className='my-4 flex flex-col items-center w-full'>
            <div className='flex flex-col my-2 items-center ml-0 lg:flex-row lg:ml-10'>
                <input value={tempStaffId} onChange={(e) => setTempStaffId(e.target.value)} className='border-black border-2 px-4 py-2 rounded-lg mx-2 mt-2' type="text" placeholder="Staff ID" />
                <input value={tempStaffName} onChange={(e) => setTempStaffName(e.target.value)} className='border-black border-2 px-4 py-2 rounded-lg mx-2 mt-2' type="text" placeholder="Staff Name" />
                
                <button onClick={setStaff} className='bg-black text-white px-2 h-10 rounded-lg mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            <div className='w-full'>
                <StaffTable staffData={staffData}/>
            </div>
            <div className='w-3/4'>
                <button onClick={setStaffDetails} className='bg-black p-2 text-white rounded-lg mt-4 w-3/4 flex justify-center mx-auto lg:mt-6'>Set Staff</button>
            </div>
            
        </div>
    )
}


export default Staff;