import React, { useContext } from "react";
import { Button, Image, Modal, ModalHeader } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthProvider } from "../../layout/Auth/AuthContext";
import img1 from "../../assets/BKash.png";
import img2 from "../../assets/nogod.png";
import img3 from "../../assets/Rocket.png";
const Premium = () => {
  const premiumData = useLoaderData();
  const { title, image, proFee } = premiumData;
  const { show, setShow } = useContext(AuthProvider);
  const handleClose = () => setShow(false);
  const handlePremium = () => {
    toast.success("Thanks for to get premium Access");
    setShow(false);
  };
  return (
    <>
      <Modal show={show} className="text-info modal-info">
        <ModalHeader>
          <Image width="100%" src={image} />
        </ModalHeader>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're in to become a premium user!</Modal.Body>
        <div className="fs-5 text-center">
          Purchase Fee{" "}
          <span className="fs-4 fw-bold text-danger">{proFee}Tk</span>
        </div>
        <div className="text-center">
          <h5>Payment Method</h5>
          <div className="d-flex justify-content-center align-items-center pointer">
            <Image className="" roundedCircle width={50} src={img1} />
            <Image roundedCircle width={90} src={img2} />
            <Image roundedCircle width={90} src={img3} />
          </div>
        </div>
        <Modal.Footer>
          <Link to="/discover">
            {" "}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Link>
          <Link to="/discover">
            {" "}
            <Button variant="primary" onClick={handlePremium}>
              Submit Premium Access
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Premium;
