import Modal from "react-modal";
import styles from "../styles/Modal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#__next");

export default function ModalBox({ modalIsOpen, closeModal, sortNumber }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className={styles.titleModal}>O numero Sorteado foi</h1>
        <p className={styles.winner}>{sortNumber}</p>

        <button className={styles.closeModal} onClick={closeModal}>
          Sair
        </button>
      </Modal>
    </div>
  );
}
