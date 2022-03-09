import React, { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap';
import BookService from '../services/BookServices';

export default function Dashbaoard() {
  
  const [books, setbooks] = useState([]);
  useEffect(()=>{
      let bookService = new BookService();
      bookService.getBook().then
      (result=>setbooks(result.data.data))
  },[])
    return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>bookName</th>
                    <th>sayfa sayısı</th>
                    <th>writer name</th>
                    <th>writer lastname</th>
                </tr>
            </thead>
            <tbody>
            {
            books.map(books => (
              <tr key={books.id}>
                <td>{books.name}</td>
                <td>{books.numberOfPages}</td>
                <td>{books.writer.name}</td>
                <td>{books.writer.lastname}</td>
              </tr>
            ))
          }
            </tbody>
            </Table>
    </div>
    
  )
}
