import React,{useState} from 'react';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Subjects from './components/Subjects';
import Staff from './components/Staff.js';

const App = () =>{
  //states to store staff details
  const [staffDetails, setStaffDetails] = useState()

  const addStaff = (staffDetails) =>{
    //function to mainpulate staff details
    setStaffDetails(staffDetails);

  }

  return(
    <div className="">
        <Navbar />
        <Banner />
        <div className=''>
          {
            (staffDetails?
              <Subjects staffDetails={staffDetails}/>
              :
              <Staff addStaffDetails={addStaff} />
            )
          }
        </div>
        
        <div className='bg-black p-20 mt-10'>

        </div>
    </div>
  )
}


export default App;