import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ ator, imagens, filmes, series }) => {
    return (
        <Pagina titulo={ator.name}>

            <Row>
                <Col md={3}>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                </Col>
                <Col md={9}>
                    <p><strong>Data de Nascimento: </strong>{ator.birthday}</p>
                    <p><strong>Local de Nascimento: </strong>{ator.place_of_birth}</p>
                    <p><strong>Popularidade: </strong>{ator.popularity}</p>
                    <p>{ator.biography}</p>
                </Col>
            </Row>

            <h2 className='mt-3'>Imagens</h2>
            <Row>
                {imagens.map(item => (
                    <Col className='mb-3' md={2}>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.file_path} />
                    </Col>
                ))}
            </Row>

            <h2 className='mt-3'>Filmes</h2>
            <Row>
                {filmes.map(item => (
                    <Col className='mb-3' md={2}>
                        <Link href={'/filmes/' + item.id}>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                        </Link>
                    </Col>
                ))}
            </Row>

            <h2 className='mt-3'>Séries</h2>
            <Row>
                {series.map(item => (
                    <Col className='mb-3' md={2}>
                        <Link href={'/filmes/' + item.id}>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                        </Link>
                    </Col>
                ))}
            </Row>


        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const res = await apiFilmes.get('/person/' + id + '?language=pt-BR')
    const ator = res.data

    const resImagens = await apiFilmes.get('/person/' + id + '/images?language=pt-BR')
    const imagens = resImagens.data.profiles

    const resFilmes = await apiFilmes.get('/person/' + id + '/movie_credits?language=pt-BR')
    const filmes = resFilmes.data.cast

    const resSeries = await apiFilmes.get('/person/' + id + '/tv_credits?language=pt-BR')
    const series = resSeries.data.cast

    return {
        props: { ator, imagens, filmes, series },
    }
}
