import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Info from "../../../../assets/icons/info.svg";

const Button = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  font-size: 16px;
  &:active {
    opacity: 0.8;
  }
`;

const ModalBody = styled.div`
  position: relative;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  max-height: calc(100vh-16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
`;

type ModalType = {
  modalTitle: string;
  descripton: string;
  top: string;
  left: string;
};

const ModalShow: FunctionComponent<ModalType> = ({
  modalTitle,
  descripton,
  top,
  left,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <img src={Info} alt="Information" />
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalBody style={{ top: top, left: left }}>
          <span>{modalTitle}</span>
          <p>{descripton}</p>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalShow;
