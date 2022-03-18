import React, { useState, useEffect } from 'react'
import DailyRoutineService from '../services/DailyRoutineServices';
import { Container, Table, Accordion, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export default function DailyRoutineDetail() {
  const {personName} = useParams();
  const [personDtos, setpersonDtos] = useState([]);
  useEffect(() => {
    let dailyRoutineService = new DailyRoutineService();
    dailyRoutineService.getByBookWithPersonWithDailyRoutineDtoByPerson_personName(personName).then
        (result => setpersonDtos(result.data.data))
}, [])
  return (
    <Container>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>tarih</th>
                            <th>kitap adı</th>
                            <th>okunan sayfa sayısı</th>
                            <th>not</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            personDtos.map(personDtos => (
                                <tr key={personDtos.id}>
                                    <td>{personDtos.date}</td>
                                    <td>{personDtos.bookName}</td>
                                    <td>{personDtos.countOfPages}</td>
                                    <td>{personDtos.dailyNote}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
      
     
  )
}
