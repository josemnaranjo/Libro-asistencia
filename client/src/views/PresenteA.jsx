import {React, useState} from 'react';
import PresenteAUno from '../components/PresenteAUno';
import PresenteADos from '../components/PresenteADos';
import PresenteATres from '../components/PresenteATres';

const PresenteA = () => {
    const [page,setPage] = useState(1)

    return (

        <div>
            {
                page === 1 ? <PresenteAUno/> : null
            }

            {
                page === 2 ? <PresenteADos/> : null
            }
            
            {
                page === 3 ? <PresenteATres/> : null
            }

            <ul className='flex gap-3'>
                <li><button>1</button></li>
                <li><button>2</button></li>
                <li><button>3</button></li>
            </ul>
        </div>
    );
}

export default PresenteA;
