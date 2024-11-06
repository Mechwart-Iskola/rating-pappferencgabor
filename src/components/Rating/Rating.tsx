import React, { FormEvent, useState } from 'react'
import '../../app.css'
import styles from './Rating.module.css'
import { motion } from 'framer-motion'

const Rating = () => {
  const [isSubmited, setIsSubmited] = useState(true);
  const [rate, setRate] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmited(!setIsSubmited);
  }

  const handleRateChange = (rate: number) => {
    setRate(rate);
  }

  return (
    <>
      {
        isSubmited ? 
        (
          <motion.form className={styles.rating} onSubmit={handleSubmit} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}} exit={{opacity: 0}}>
            <img src="../images/icon-star.svg" alt="" />

            <h1>How did we do?</h1>

            <p>Please let us know how did with your support request. All feedback is appreaciated to help us improve our offering!</p>

            <div className={styles.valueContainer}>
                <button type="button" onClick={() => handleRateChange(1)} className={styles.valueItem}>1</button>
                <button type="button" onClick={() => handleRateChange(2)} className={styles.valueItem}>2</button>
                <button type="button" onClick={() => handleRateChange(3)} className={styles.valueItem}>3</button>
                <button type="button" onClick={() => handleRateChange(4)} className={styles.valueItem}>4</button>
                <button type="button" onClick={() => handleRateChange(5)} className={styles.valueItem}>5</button>
            </div>

            <button type="submit" className={styles.btnSubmit}>Submit</button>
          </motion.form>
        ) : 
        (
          <motion.div className={`${styles.rating} ${styles.thankYou}`} initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} exit={{scale: 0}}>
            <img src="../images/illustration-thank-you.svg" alt="" />

            <p className={styles.selectedRate}>You selected {rate} out of 5</p>

            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </motion.div>
        )
      }
    </>
  )
}

export default Rating