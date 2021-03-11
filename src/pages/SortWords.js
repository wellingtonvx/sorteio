import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import ModalBoxWord from "../components/ModalWords";

export default function SortWords() {
  const [words, setWords] = useState([]);
  const [numeroSorteado, setNumeroSorteado] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function Sort() {
    const min = 0;
    const max = Math.floor(words.length);

    const sortNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    setNumeroSorteado(sortNumber);

    openModal();
  }

  console.log(words[numeroSorteado]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function addWords() {
    const part = document.getElementById("input").value;
    setWords([...words, part]);

    document.getElementById("input").value = "";
  }

  function resetSort() {
    setWords([]);
  }

  return (
    <div className={styles.container}>
      <h1>Participantes do Sorteio</h1>

      <div className={styles.paricipantes}>
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </div>

      <div className={styles.inputContainer}>
        <div>
          <span>participates : </span>
          <input type="text" id="input" />
          <button id="adicionar" onClick={addWords}>
            Adicionar
          </button>
        </div>
      </div>

      <div className={styles.buttons}>
        <button onClick={Sort}>Sortear</button>
        <button onClick={resetSort}>Resetar</button>
        <Link href="/">
          <button>Inicio</button>
        </Link>
      </div>

      <ModalBoxWord
        sortNumber={words[numeroSorteado]}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
