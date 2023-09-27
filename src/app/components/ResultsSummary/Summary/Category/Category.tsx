
import Image from 'next/image'
import styles from '../../../../styles/category.module.scss'
import { ICategory } from '../../../../types/Category'

export default function Category({category, score, icon}: ICategory) {
    return (
      <div className={`${styles.category} ${styles[`${category}`]}`}>
        <Image
              src={icon}
              alt="icon"
              width={24}
              height={24}
            />
        <p className={styles.categoryName}>{category}</p>
        <p className={styles.score}><strong>{score}</strong>/100</p>
      </div>
    )
  }
  