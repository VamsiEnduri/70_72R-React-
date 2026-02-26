import React, { useEffect, useState } from "react";
import axios from "axios";
// import Spinner from "react-bootstrap/Spinner";
// import Card from "react-bootstrap/Card";
// import Button  from "react-bootstrap/Button";
// import Toastify from "toastify";
import { ToastContainer, toast } from "react-toastify";
import { FaRegHeart } from "react-icons/fa6";
import { Spinner, Card, Button, Modal, Form } from "react-bootstrap";
const ApiCalling = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        console.log(res.data);
        setData(res.data);
        setStatus(!status);
      });
    }, 500);
  }, []);

  if (status) {
    return <Spinner animation="grow" />;
  }

  const modalShow = () => {
    setShow(true);
  };

  const modalClose = () => {
    setShow(false);
    toast.error('Title', 'This is the body of the notification');
    

  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
      }}
    >
        <ToastContainer />
      {data.map((x) => {
        return (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={x.image} />
              <Card.Body>
                <Card.Title>{x.title} <FaRegHeart /></Card.Title>
                <Card.Text>{x.description}</Card.Text>
                <Button variant="primary" onClick={modalShow}>
                  BuyNow
                </Button>
              </Card.Body>
            </Card>
          </>
        );
      })}

      <Modal show={show} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="enter name here"
          ></Form.Control>
          <Form.Control
            type="email"
            placeholder="enter email here"
          ></Form.Control>
          <Form.Control
            type="password"
            placeholder="enter password here"
          ></Form.Control>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">admin</option>
            <option value="2">teacher</option>
            <option value="3">student</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ApiCalling;
