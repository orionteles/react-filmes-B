import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React, { useState } from 'react'
import { Accordion, Button, Card, Col, Modal, Row, Table } from 'react-bootstrap'

const Detalhes = ({ serie, atores }) => {

    const [show, setShow] = useState(false);
    const [temporada, setTemporada] = useState({});

    const handleClose = () => setShow(false);

    async function handleShow(season_number) {
        const temporada = await apiFilmes.get(`/tv/${serie.id}/season/${season_number}`)
        setTemporada(temporada.data)
        setShow(true);
    }

    return (
        <Pagina titulo={serie.title}>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{temporada.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={4}>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + temporada.poster_path} />
                        </Col>
                        <Col md={8}>
                            <Accordion defaultActiveKey="0">
                                {temporada.episodes && temporada.episodes.map(item => (
                                    <Accordion.Item eventKey={item.id}>
                                        <Accordion.Header>{item.name}</Accordion.Header>
                                        <Accordion.Body>
                                            <Card className="mb-3">
                                                {item.still_path &&
                                                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.still_path} />
                                                }
                                                <Card.Body>
                                                    {item.overview}
                                                </Card.Body>
                                            </Card>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <Col md={3}>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} />
                </Col>

                <Col md={9}>
                    <p><strong>Data de Lançamento: </strong>{serie.release_date}</p>
                    <p><strong>Orçamento: </strong>{serie.budget}</p>
                    <p><strong>Duração: </strong>{serie.runtime} min</p>
                    <p><strong>Nota: </strong>{serie.vote_average}</p>
                    <div>
                        <ul>
                            {serie.genres.map(item => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>

            <h2 className='mt-3'>Temporadas</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Capa</th>
                        <th>Temporada</th>
                        <th>Episódios</th>
                        <th>Sinopse</th>
                    </tr>
                </thead>
                <tbody>
                    {serie.seasons.map(item => (

                        <tr key={item.id}>
                            <td width="10%">
                                <Card.Img onClick={() => handleShow(item.season_number)} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                            </td>
                            <td width="15%">{item.name}</td>
                            <td width="5%">{item.episode_count}</td>
                            <td>{item.overview}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h2>Atores</h2>
            <Row>
                {atores.map(item => (
                    <Col key={item.id} className='mb-3' title={item.name + ' - ' + item.character} md={2}>
                        <Link href={'/atores/' + item.id}>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
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

    const resultado = await apiFilmes.get('/tv/' + id + '?language=pt-BR')
    const serie = resultado.data

    const resAtores = await apiFilmes.get('/tv/' + id + '/credits?language=pt-BR')
    const atores = resAtores.data.cast

    return {
        props: { serie, atores }
    }
}
