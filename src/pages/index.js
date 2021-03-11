import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sorteio | Home</title>
      </Head>
      <h1>Escolha o Tipo de Sorteio</h1>

      <div className={styles.boxContainer}>
        <div className={styles.button}>
          <Link href="SortNumbers">
            <button>Sorteio de Números</button>
          </Link>
        </div>
        <div className={styles.button}>
          <Link href="SortWords">
            <button>Sorteio de Palavras</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
