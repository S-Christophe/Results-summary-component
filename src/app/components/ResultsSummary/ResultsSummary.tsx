import Results from './Results/Results'
import Summary from './Summary/Summary'
import styles from '../../styles/resultsSummary.module.scss'

export default function ResultsSummary() {
  return (
    <div className={styles.resultsSummary}>
      <Results />
      <Summary />
    </div>
  )
}
