import React, { useState, useEffect } from 'react'
import DailyRoutineService from '../services/DailyRoutineServices';
import { Container, Table, Accordion, Card } from 'react-bootstrap';
export default function DailyRoutineList() {


  const [personWithBooksWithWriterWithdailyRoutinesDtos, setpersonWithBooksWithWriterWithdailyRoutinesDtos] = useState([]);
  useEffect(() => {
    let dailyRoutineService = new DailyRoutineService();
    dailyRoutineService.getPersonWithBookWithWriterWithDailyRoutine().then
      (result => setpersonWithBooksWithWriterWithdailyRoutinesDtos(result.data.data))
  }, [])

  return (
    <Container>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Daily Routines</th>
            </tr>
          </thead>
          <tbody>
            {
              personWithBooksWithWriterWithdailyRoutinesDtos.map((personWithBooksWithWriterWithdailyRoutinesDtos, index) => (
                <tr key={index}>
                  <td>
                    <Card>
                      <Card.Header as="h5">{personWithBooksWithWriterWithdailyRoutinesDtos.date}</Card.Header>
                      <Card.Body>
                        <Card.Title>
                          <Table striped bordered hover>
                            <thead>
                              <td>isim</td>
                              <td>soy isim</td>
                              <td>okunan kitap</td>
                              
                            </thead>
                            <tbody>
                              <tr>
                                <td> {personWithBooksWithWriterWithdailyRoutinesDtos.personName} </td>
                                <td>{personWithBooksWithWriterWithdailyRoutinesDtos.personLastName}</td>
                                <td>{personWithBooksWithWriterWithdailyRoutinesDtos.bookName}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Card.Title>
                        <Card.Text>
                          <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <td>detaylar</td>
                                      <td>yazar isim</td>
                                      <td>yazar soy isim</td>
                                      <td>sayfa sayısı</td>
                                    </tr>

                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>detalar için tıklayın</td>
                                      <td> {personWithBooksWithWriterWithdailyRoutinesDtos.writerName} </td>
                                      <td>{personWithBooksWithWriterWithdailyRoutinesDtos.writerLastName}</td>
                                      <td>{personWithBooksWithWriterWithdailyRoutinesDtos.numberOfPages}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </Accordion.Header>
                              <Accordion.Body>
                              <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <td>okunan sayfa sayısı</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>                                  
                                      <td> {personWithBooksWithWriterWithdailyRoutinesDtos.countOfPages} </td>
                                    </tr>
                                  </tbody>

                                </Table>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <td>günlük not</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>                                  
                                      <td> {personWithBooksWithWriterWithdailyRoutinesDtos.dailyNote} </td>
                                    </tr>
                                  </tbody>
                                  
                                </Table>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </Container>
  )
}
