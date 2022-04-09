import Container from '../Layout/Container'
import './Cursos.css'
import LinkButton from '../Layout/LinkButton'
import CursoCard from '../curso/CursoCard'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';

function Cursos() {
    const [cursos, setCursos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/cursos/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                setCursos(data)
            })
            .catch(err => console.log(err))
    }, [])

    function removeCurso(id) {
        fetch(`http://localhost:3001/cursos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                setCursos(cursos.filter((curso) => curso.id !== id))
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='wrapper'>
            <div className='tittlewrapper'>
                <h1> Cursos </h1>
                <LinkButton to='/newproject' text="Adicionar curso" />

            </div>
            <div className='cardwrapper'>
                <Container>
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 6, sm: 9, md: 12 }}>
                    {cursos.map((curso) => (
                            <Grid item xs={3} sm={3} md={3} key={curso.id}>
                            <CursoCard
                                titulo={curso.ds_titulo}
                                idCurso={curso.idcurso}
                                id={curso.id}
                                descricao={curso.ds_descricao}
                                handleRemove={removeCurso} />
                            </Grid>
                        ))}
                    </Grid>
                    
                </Container>
            </div>
        </div>

    )
}

export default Cursos