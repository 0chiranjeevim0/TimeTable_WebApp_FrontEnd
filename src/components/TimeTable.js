import React from 'react';


const TimeTable = (props) =>{

    return(
        <div className='mt-10 w-full px-10'>
            <table className='w-full table-auto boder-separate border-spacing-2'>
                <thead>
                  <tr>
                    <th class='border border-black w-1/4'>First Period</th>
                    <th class='border border-black'>Second Period</th>
                    <th class='border border-black'>Third Period</th>
                    <th class='border border-black'>Fourth Period</th>
                    <th class='border border-black'>Fifth Period</th>
                  </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td class='border border-black p-2 capitalize'>{props.data.order_1[0]}</td>
                        <td class='border border-black uppercase'>{props.data.order_1[1]}</td>
                        <td class='border border-black capitalize'>{props.data.order_1[2]}</td>
                        <td class='border border-black capitalize'>{props.data.order_1[3]}</td>
                        <td class='border border-black capitalize'>{props.data.order_1[4]}</td>
                    </tr>
                    <tr class="text-center">
                        <td class='border border-black p-2 capitalize'>{props.data.order_2[0]}</td>
                        <td class='border border-black uppercase'>{props.data.order_2[1]}</td>
                        <td class='border border-black capitalize'>{props.data.order_2[2]}</td>
                        <td class='border border-black capitalize'>{props.data.order_2[3]}</td>
                        <td class='border border-black capitalize'>{props.data.order_2[4]}</td>
                    </tr>
                    <tr class="text-center">
                        <td class='border border-black p-2 capitalize'>{props.data.order_3[0]}</td>
                        <td class='border border-black uppercase'>{props.data.order_3[1]}</td>
                        <td class='border border-black capitalize'>{props.data.order_3[2]}</td>
                        <td class='border border-black capitalize'>{props.data.order_3[3]}</td>
                        <td class='border border-black capitalize'>{props.data.order_3[4]}</td>
                    </tr>
                    <tr class="text-center">
                        <td class='border border-black p-2 capitalize'>{props.data.order_4[0]}</td>
                        <td class='border border-black uppercase'>{props.data.order_4[1]}</td>
                        <td class='border border-black capitalize'>{props.data.order_4[2]}</td>
                        <td class='border border-black capitalize'>{props.data.order_4[3]}</td>
                        <td class='border border-black capitalize'>{props.data.order_4[4]}</td>
                    </tr>
                    <tr class="text-center">
                        <td class='border border-black p-2 capitalize'>{props.data.order_5[0]}</td>
                        <td class='border border-black uppercase'>{props.data.order_5[1]}</td>
                        <td class='border border-black capitalize'>{props.data.order_5[2]}</td>
                        <td class='border border-black capitalize'>{props.data.order_5[3]}</td>
                        <td class='border border-black capitalize'>{props.data.order_5[4]}</td>
                    </tr>
                    <tr class="text-center">
                        <td class='border border-black p-2 capitalize'>{props.data.order_6[0]}</td>
                        <td class='border border-black uppercase'>{props.data.order_6[1]}</td>
                        <td class='border border-black capitalize'>{props.data.order_6[2]}</td>
                        <td class='border border-black capitalize'>{props.data.order_6[3]}</td>
                        <td class='border border-black capitalize'>{props.data.order_6[4]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default TimeTable;