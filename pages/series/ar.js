import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const index = ({series}) => {

    return (
        <Pagina titulo="Séries No Ar">

            <Row md={4}>
                {series.map(item => (
                    <Col key={item.id}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <p>Lançamento: {item.first_air_date}</p>
                                <p>Nota: {item.vote_average}</p>
                                <Link href={'/series/' + item.id} className='btn btn-danger'>Detalhes</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/tv/on_the_air?language=pt-BR')
    const series = resultado.data.results

    return {
        props: {series},
    }
}