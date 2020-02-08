import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <h1>Avatar the Last Airbender</h1>
      </Link>
    </header>
  );
}
