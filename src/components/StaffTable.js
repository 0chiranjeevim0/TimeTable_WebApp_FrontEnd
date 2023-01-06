import React from 'react';

const StaffTable = (props) =>{



    return(
        <div className='w-full '>
            <div className='w-full flex justify-center'>
                <table className='w-3/4 table-auto boder-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-black w-1/2'>Staff ID</th>
                            <th className='border border-black w-1/2'>Staff Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.staffData.map((data) =>(
                                <tr class="text-center">
                                    <td className='border border-black p-2 uppercase'>{data.id}</td>
                                    <td className='border border-black uppercase'>{data.name}</td>    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>        
            </div>
        </div>
    )
}

export default StaffTable;