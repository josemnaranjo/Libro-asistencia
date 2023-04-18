import {React, useState}  from 'react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const NuevoDia = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [formatedDay , setFormatedDay] = useState();
    
    const changeDateFormat = (data) => {
        const newDate = dayjs(data).format('YYYY-M-D');
        setFormatedDay(newDate);
    };

    return (
        <div className='pt-12 px-6 h-5/6'>
            <div className='px-10 py-40 h-5/6 bg-gradient-to-r from-slate-100 to-slate-300 border-xl rounded-xl'>
                <h1 className='text-center py-10'>Ingrese la fecha de hoy para iniciar un nuevo registro</h1>
                <div className='grid grid-rows-2 justify-items-center gap-5'>
                    <div>
                        <DatePicker
                            selected={selectedDay}
                            onChange={date => setSelectedDay(date)}
                            dateFormat={'dd-MM-yyyy'}
                            minDate={new Date()}
                            placeholderText='Elegir una fecha'
                            className='text-center text-sm bg-white w-48 py-1 px-2 rounded-lg border border-stone-400'
                        />
                    </div>
                    <Link to={`/registro-entrada/${formatedDay}`}>
                        <button className='bg-secondary-dark p-1.5 rounded-lg text-white'onMouseEnter={()=>changeDateFormat(selectedDay)} >crear nuevo día</button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}

export default NuevoDia;
