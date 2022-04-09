import './CursoForm.css'
import { useState, useEffect } from 'react'
import Submit from '../form/Submit'
import Input from '../form/Input'

function CursoForm({handleSubmit, btnText, cursoData}) {

    const [curso, setCurso] = useState(cursoData || {})

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(curso)
    }

    function handleChange(e){
        setCurso({ ...curso,[e.target.name]: e.target.value})
    }



    return (
        <form onSubmit={submit}>
            
                <Input
                    type="number"
                    name="idcurso"
                    text="ID curso"
                    placeholder="código indentificador"
                    handleOnChange={handleChange}
                />
                <Input
                    type="text"
                    name="ds_titulo"
                    text="Curso"
                    placeholder="Título do curso" 
                    handleOnChange={handleChange}

                />
                <Input
                    type="text"
                    name="ds_descricao"
                    text="Descrição"
                    placeholder="Resumo do Conteúdo"
                    handleOnChange={handleChange}

                />
            <a href="/cursos">
            <div>
                <Submit text={btnText} />
            </div>
            </a>
        </form>
    )
}

export default CursoForm