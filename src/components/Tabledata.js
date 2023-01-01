import React from 'react';

const Tabledata = (props) =>{


    return(
        <div className='w-full flex justify-center'>
            <table className='w-3/4 table-auto boder-separate border-spacing-2'>
                <thead>
                  <tr>
                    <th className='border border-black w-1/4'>Year</th>
                    <th className='border border-black'>Subject Name</th>
                    <th className='border border-black'>Subject Code</th>
                    <th className='border border-black'>Duration of Course</th>
                    <th className='border border-black'>Handeling Staff</th>
                    <th className='border border-black'>IS Lab</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {
                    props.subjects.map((subject) =>(
                        <tr class="text-center">
                            <td className='border border-black p-2 capitalize'>{subject.year}</td>
                            <td className='border border-black uppercase'>{subject.subject}</td>
                            <td className='border border-black uppercase'>{subject.subjectCode}</td>
                            <td className='border border-black capitalize'>{subject.duration}</td>
                            <td className='border border-black capitalize'>{subject.staff}</td>
                            <td className='border border-black capitalize'>{subject.ISlab}</td>
                        </tr>
                    ))
                  }
                </tbody>
              </table>
        </div>
    )
}


export default Tabledata;
