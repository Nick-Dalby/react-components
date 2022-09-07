import styles from './pagination.module.css'


const PageButton = ({ pg, setPage }) => {
  return <button className={styles.navButton} onClick={() => setPage(pg)}>{pg}</button>
}

export default PageButton