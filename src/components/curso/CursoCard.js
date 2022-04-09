import './CursoCard.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';


function CursoCard({ idCurso, id, titulo, descricao, handleRemove }) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className='cursoCard'>
            <div className='cursoCardBody'>
                <h4>{titulo}</h4>
                <p>
                    <span>Id:</span> {idCurso}
                </p>
                <p>{descricao}</p>
            </div>
            <div className='cursoCardBtn'>
        
                <Link className="linkcd altcd" to={`/edit/${id}`}>
                    <BsPencil /> 
                </Link>

                
                <button className='btncd altcd'onClick={remove}>
                    <BsFillTrashFill />
                </button>
            </div>
        </div>
    )
}

export default CursoCard