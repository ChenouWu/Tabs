import {FaAngleDoubleRight} from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
const duties=({duties})=>{
    return(
        <div>
        {duties.map((dutie,)=>{
            const id = uuidv4();
            return <div key={id} className='jobs-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{dutie}</p>
            </div>
        })}
        </div>
    )
}

export default duties;