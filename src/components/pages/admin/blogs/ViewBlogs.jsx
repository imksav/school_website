import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AdminNavbar from '../AdminNavbar';

const ViewBlogs = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data based on the ID
    axios.get("http://127.0.0.1:8000/api/display-blogs/"+id)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <AdminNavbar/>
   <Card className="text-center">
          <Card.Header className='fs-3 fw-bold'>Blog Details</Card.Header>
      <Card.Body>
        <Card.Title className='fs-4'>{data.name}</Card.Title>
        <Card.Text className='text-center'>
          {data.description}
          </Card.Text>
           <Card.Text>
          <span className='fw-bold'>Image: </span>{data.image}
          </Card.Text>
          <Card.Text>
          <span className='fw-bold'>Author: </span>{data.author}
          </Card.Text>
          <Card.Text>
          <span className='fw-bold'>Author Details: </span>{data.author_details}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="primary">Apply</Button></Card.Footer>
    </Card>
      </>
  );
};

export default ViewBlogs;