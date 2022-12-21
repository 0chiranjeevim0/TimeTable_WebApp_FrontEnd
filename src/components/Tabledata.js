import React from 'react';

const Tabledata = (props) =>{


    return(
        <div className='w-full flex justify-center'>
            <table className='w-3/4 table-auto boder-separate border-spacing-2'>
                <thead>
                  <tr>
                    <th class='border border-black w-1/4'>Year</th>
                    <th class='border border-black'>Subject</th>
                    <th class='border border-black'>Duration of Course</th>
                    <th class='border border-black'>Handeling Staff</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.subjects.map((subject) =>(
                        <tr class="text-center">
                            <td class='border border-black p-2 capitalize'>{subject.year}</td>
                            <td class='border border-black uppercase'>{subject.subject}</td>
                            <td class='border border-black capitalize'>{subject.duration}</td>
                            <td class='border border-black capitalize'>{subject.staff}</td>
                        </tr>
                    ))
                  }
                </tbody>
              </table>
        </div>
    )
}


export default Tabledata;
