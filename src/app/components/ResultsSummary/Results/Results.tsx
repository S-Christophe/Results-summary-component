
import styles from '../../../styles/results.module.scss'

export default function Results() {
    return (
      <div className={styles.results}>
        <h2>Your Result</h2>
        <div className={styles.circle}>
          <p className={styles.result}>76</p>
          <p>of 100</p>
        </div>
        <div className={styles.resultText}>
          <p className={styles.great}>Great</p>
          <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
    )
  }
  