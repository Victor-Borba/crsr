import CursoForm from '../curso/CursoForm'
import './NewProject.css'
import { useNavigate } from "react-router"


function NewProject() {

    const navigate = useNavigate()
    function addCurso(curso) {

        fetch("http://localhost:3001/cursos/",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(curso),
        })
        .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/cursos')
            })
        .catch((err) => console.log(err))
        }

 return (
     <div className="container">
        <h1> Adicionar curso</h1>
        <p> Insira os dados do curso</p>
        <CursoForm handleSubmit={addCurso}btnText="Adicionar curso" />
     </div>
 )
}

export default NewProject