import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModalButton = (props) => {
    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);


    return (
        <div>
        <Button color="danger" onClick={toggle}>See More</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>More Info For: {props.personData.name}</ModalHeader>
          <ModalBody>
            <h3><strong>Height: </strong>{props.personData.height}</h3>
            <h3><strong>Mass: </strong>{props.personData.mass}</h3>
            <h3><strong>Hair: </strong>{props.personData.hair_color}</h3>
            <h3><strong>Skin Color: </strong>{props.personData.skin_color}</h3>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default ModalButton;