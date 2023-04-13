import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const index = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiFilmes.get('/movie/popular').then(resultado => {
            setFilmes(resultado.data.results)
        })
    }, [])

    return (
        <Pagina titulo="Filmes">

            <Row md={4}>
                {filmes.map(item => (
                    <Col key={item.id}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <p>Lançamento: {item.release_date}</p>
                                <p>Nota: {item.vote_average}</p>
                                <Button variant="danger">Detalhes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Pagina>
    )
}

export default index