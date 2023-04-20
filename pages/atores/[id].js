import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ ator, imagens, filmes, tvs }) => {
    return (
        <Pagina titulo={ator.name}>

            <Row>
                <Col md={3}>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                </Col>

                <Col md={9}>
                    <p><strong>Data de Nascimento: </strong>{ator.birthday}</p>
                    <p><strong>Local de Nascimento: </strong>{ator.place_of_birth}</p>
                    <p>{ator.biography}</p>
                </Col>
            </Row>

            <h2 className='mt-4'>Imagens</h2>
            <Row>
                {imagens.map(item => (
                    <Col className='mb-4' md={1}>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.file_path} />
                    </Col>
                ))}
            </Row>

            <h2 className='mt-4'>Filmes em que atuou</h2>
            <Row>
                {filmes.map(item => (
                    <Col className='mb-4' md={2} title={item.name}>
                        <Link href={'/filmes/' + item.id}>
                            <Card.Img title={item.name} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                        </Link>
                    </Col>
                ))}
            </Row>

            <h2 className='mt-4'>Séries de TV em que atuou</h2>
            <Row>
                {tvs.map(item => (
                    <Col className='mb-4' md={2} title={item.name}>
                        <Link href={'/filmes/' + item.id}>
                            <Card.Img title={item.name} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
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

    const resultado = await apiFilmes.get('/person/' + id + '?language=pt-BR')
    const ator = resultado.data

    const resImages = await apiFilmes.get('/person/' + id + '/images?language=pt-BR')
    const imagens = resImages.data.profiles

    const resFilmes = await apiFilmes.get('/person/' + id + '/movie_credits?language=pt-BR')
    const filmes = resFilmes.data.cast

    const resTv = await apiFilmes.get('/person/' + id + '/tv_credits?language=pt-BR')
    const tvs = resTv.data.cast

    return {
        props: { ator, imagens, filmes, tvs }
    }
}
