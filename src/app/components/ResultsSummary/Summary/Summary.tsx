import styles from '../../../styles/summary.module.scss'
import Category from './Category/Category'
import Categories from "../../../static/data.json";

export default function Summary() {
    return (
      <div className={styles.summary}>
        <h2>Summary</h2>
        {Categories.map((item, i) => (
          <Category key={i} {...item} />
        ))}
        <button>Continue</button>
      </div>
    )
  }
  