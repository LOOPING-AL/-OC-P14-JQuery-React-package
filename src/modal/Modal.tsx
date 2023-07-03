import { useEffect, useState } from "react";
import "./Modal.css";
import React from "react";

const defaultProps = { information: undefined };

const Modal = ({
  open,
  title,
  information,
  handleClose,
}: {
  open: boolean;
  title: string;
  information?: string;
  handleClose: () => void;
}) => {
  const [openModal, setOpenModal] = useState(open);
  const closeModal = () => {
    setOpenModal(false);
    handleClose();
  };
  const handleClickClose = () => closeModal();

  const handleClickOutside = (e: any) =>
    e.target.id === "modal" && closeModal();

  useEffect(() => {
    setOpenModal(open);
  }, [open]);

  return (
    <div
      id="modal"
      className={`modal ${openModal && "modalOpen"}`}
      onClick={handleClickOutside}
      onKeyDown={handleClickOutside}
      role="button"
      tabIndex={0}
    >
      <dialog className="modalContent" open={openModal}>
        <button type="button" className="close" onClick={handleClickClose}>
          &times;
        </button>
        <div className="text">
          <h2 className="title">{title}</h2>
          {information && <p>{information}</p>}
        </div>
      </dialog>
    </div>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
