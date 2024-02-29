import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PatientListApi = () => {
    const [list, setList] = useState([]);

    const url ="https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

    const getList = async ()=>{
        try{
            const response = await axios(url);
            setList(response.data.appointments);
        }
        catch(err){
            console.log(err)
        }
    };

    useEffect(() => {
        getList();
    }, []);

    console.log(list);

    const formattedDate = (inputDate) => {
        const date = new Date(inputDate);

        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const result = `${day} ${months[month]} ${year}`;

        return result;
    };

  return (
    <div className='p-10'>
            <div className='p-10 w-full h-auto flex flex-col justify-center items-start gap-10 rounded-3xl shadow-md'>
                
                <h1 className='text-gray-600 font-bold text-2xl'>Todays Appointment List</h1>
                
                <table className='w-full h-auto table-auto text-center rounded-2xl overflow-hidden shadow-xl'>
                    
                    <thead className='text-left bg-slate-100'>
                        <tr>
                            <th className='p-6 text-gray-500 text-lg'>PATIENTS</th>
                            <th className='p-6 text-gray-500 text-lg'>DATE</th>
                            <th className='p-6 text-gray-500 text-lg'>TIME</th>
                            <th className='p-6 text-gray-500 text-lg'>DOCTOR</th>
                            <th className='p-6 text-gray-500 text-lg'>INJURY</th>
                            <th className='p-6 text-gray-500 text-lg'>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list && list.map((item, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <tr className="border-t-2 border-slate-300">

                                        <td className='flex justify-start items-center py-4 px-6'>
                                            <div className='flex gap-3 justify-start items-center'>
                                                <div>
                                                    <p className='rounded-full bg-black w-12 h-12'></p>
                                                </div>
                                                <div className='flex flex-col justify-center items-start'>
                                                    <p className='font-bold text-lg'>{item.patient_name}</p>
                                                    <p className='text-slate-600 text-md'>+{item.mobile_number}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className='py-4 px-6 text-slate-600'>
                                            <div className='flex justify-start items-center gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                                                </svg>
                                                <p className='text-lg'>{formattedDate(item.appointment_date)}</p>
                                            </div>
                                        </td>

                                        <td className=' py-4 px-6 text-slate-600'>
                                            <div className='flex justify-start items-center gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                </svg>
                                                <p className='text-lg'>{item.appointment_time}</p>
                                            </div>
                                        </td>

                                        <td className='py-4 px-6 text-slate-600'>
                                            <div className='flex justify-start items-center gap-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-700">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" fill='green'/>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="-5 -5 34 35" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-700">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                                                    </svg>                                                   
                                                </svg>
                                                <p className='text-lg'>{item.doctor}</p>
                                            </div>
                                        </td>

                                        <td className='py-4 px-6 text-left text-gray-600'>
                                            <p className='px-3 py-2 inline-block bg-sky-100 rounded-lg font-bold text-md'>{item.injury}</p>
                                        </td>
                                        
                                        <td className='py-4 px-6 text-left'>
                                            <div className='flex flex-col justify-center items-start gap-1 px-10'>
                                                <div className='bg-slate-500 w-1 h-1 rounded-full'></div>
                                                <div className='bg-slate-500 w-1 h-1 rounded-full'></div>
                                                <div className='bg-slate-500 w-1 h-1 rounded-full'></div>
                                            </div>
                                        </td>

                                    </tr>
                                </React.Fragment>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
  )
}

export default PatientListApi