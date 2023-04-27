import Fotos from '@/components/Fotos'
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

            <Fotos titulo="Imagens" lista={imagens} foto="file_path" />
            <Fotos titulo="Filmes" lista={filmes} foto="poster_path" link="/filmes/" />
            <Fotos titulo="Séries" lista={series} foto="poster_path" link="/series/" />

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
