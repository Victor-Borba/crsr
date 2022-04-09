import './EditCurso.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from '../Layout/Container'
import CursoForm from '../curso/CursoForm'

function EditCurso() {
    const { id } = useParams()
    const [curso, setCurso] = useState([])
    const [showProjectForm, setProjectForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3001/cursos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {
                setCurso(data)
            })
            .catch(err => console.log(err))
    }, [id])

    function toggleProjectForm() {
        setProjectForm(!showProjectForm)
    }

    function editPost(curso) {
        fetch(`http://localhost:3001/cursos/${curso.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(curso),
        })
        .then(resp => resp.json())
        .then((data) => {
            setCurso(data)
            setProjectForm(false)

        })
        .catch(err => console.log(err))
    }
    return (
        <div className='details'>
            <Container>
                <div className='details_box'>
                    <h1> Título do curso: {curso.ds_titulo}</h1>
                    <button onClick={toggleProjectForm}>
                        {!showProjectForm ? 'EditarProjeto' : 'Fechar'}
                    </button>
                    {!showProjectForm ? (
                        <div className='curso_info'>
                            <p>
                                <span>Descrição:</span><h5>{curso.ds_descricao}</h5>
                            </p>
                        </div>) : (
                        <div className='curso_info'>
                            <CursoForm
                                handleSubmit={editPost}
                                btnText='Concluir edição'
                                cursoData={curso} />
                        </div>
                    )
                    }
                </div>
            </Container>
        </div>
    )
}
export default EditCurso