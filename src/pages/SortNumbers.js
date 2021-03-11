import Link from "next/link";
import { useState } from "react";

import styles from "../styles/SortNumbers.module.css";
import Modal from "../components/Modal";

export default function SortNumbers() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [numeroSorteado, setNumeroSorteado] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function Sort() {
    const min = Math.ceil(from);
    const max = Math.floor(to);

    const sortNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    setNumeroSorteado(sortNumber);

    openModal();
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function resetSort() {
    setFrom(0);
    setTo(0);
  }

  return (
    <div className={styles.container}>
      <h1>Digite o intevalo dos números para sorteio</h1>

      <div className={styles.inputNumberContainer}>
        <div className={styles.input}>
          <span>De: </span>
          <input
            type="number"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <span>Até: </span>
          <input
            type="number"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={Sort}>Sortear</button>
        <button onClick={resetSort}>Resetar</button>
        <Link href="/">
          <button>Inicio</button>
        </Link>
      </div>

      <Modal
        sortNumber={numeroSorteado}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
