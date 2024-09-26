import React from 'react'
import styles from "./styles.module.css"

const ThirdPage = ({fname,contact,gender}) => {
  console.log(gender)
  return (
    <div className={styles.thirdContainer}>
        <h1>Welcome {fname}</h1>
        <p>Thanks For using our App! {contact}</p>
        <p>Enjoy Using.... {gender}</p>
    </div>
  )
}

export default ThirdPage