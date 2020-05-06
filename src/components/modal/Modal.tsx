import React from "react";
import { Modal as BModal, Content } from "react-bulma-components";

interface Props {
  title: string;
  children: React.ReactNode;
  submitText: string;
  closeText: string;
  show: boolean;
  closeOnBlur: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

const Modal = (props: Props) => {
  return (
    <BModal
      closeOnBlur={props.closeOnBlur}
      show={props.show}
      onClose={props.onClose}
    >
      <BModal.Card>
        <BModal.Card.Head>
          <BModal.Card.Title>{props.title}</BModal.Card.Title>
        </BModal.Card.Head>
        <BModal.Card.Body>
          <Content>{props.children}</Content>
        </BModal.Card.Body>
        <BModal.Card.Foot
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <button className="button is-primary" onClick={props.onSubmit}>
            {props.submitText}
          </button>
          <button className="button is-danger" onClick={props.onClose}>
            {props.closeText}
          </button>
        </BModal.Card.Foot>
      </BModal.Card>
    </BModal>
  );
};

export default Modal;
