import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AdminNavbar from '../AdminNavbar';
import { NavItem } from 'react-bootstrap';

const ViewPrograms = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Fetch details based on the ID
    axios.get("http://127.0.0.1:8000/api/display-programs/"+id)
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching details:', error);
      });
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <AdminNavbar/>
   <Card className="text-center">
          <Card.Header className='fs-3 fw-bold'>Program Details</Card.Header>
      <Card.Body>
        <Card.Title className='fs-4'>{details.name}</Card.Title>
        <Card.Text className='text-center'>
          {details.description}
          </Card.Text>
           <Card.Text>
          <span className='fw-bold'>Level: </span>{details.level}
          </Card.Text>
          <Card.Text>
          <span className='fw-bold'>Course Fee: </span>{details.fee}
          </Card.Text>
          <Card.Text>
          <span className='fw-bold'>Duration: </span>{details.duration}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="primary">Apply</Button></Card.Footer>
    </Card>
      </>
  );
};

export default ViewPrograms;