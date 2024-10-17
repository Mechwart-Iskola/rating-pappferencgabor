import React from 'react'
import '../../app.css'
import styles from './Rating.module.css'

const Rating = () => {
  return (
    <div className={styles.rating}>
        <img src="../images/icon-star.svg" alt="" />

        <h1>How did we do?</h1>

        <p>Please let us know how did with your support request. All feadback is appreaciated to help us improve our offering!</p>

        <div className={styles.valueContainer}>
            <div className={styles.valueItem}>1</div>
            <div className={styles.valueItem}>2</div>
            <div className={styles.valueItem}>3</div>
            <div className={styles.valueItem}>4</div>
            <div className={styles.valueItem}>5</div>
        </div>

        <button type="submit">Submit</button>
    </div>
  )
}

export default Rating