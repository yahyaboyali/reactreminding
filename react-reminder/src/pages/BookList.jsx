import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookService from '../services/BookServices';

export default function Dashbaoard() {

    const [books, setbooks] = useState([]);
    useEffect(() => {
        let bookService = new BookService();
        bookService.getBook().then
            (result => setbooks(result.data.data))
    }, [])
    return (
        <Container>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>kitap adı</th>
                            <th>sayfa sayısı</th>
                            <th>yazar adı</th>
                            <th>yazar soyadı</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(books => (
                                <tr key={books.id}>
                                    <td><Link to={`/books/${books.id}`}>{books.bookName}</Link></td>
                                    <td>{books.numberOfPages}</td>
                                    <td>{books.writer.writerName}</td>
                                    <td>{books.writer.writerLastName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </Container>


    )
}
