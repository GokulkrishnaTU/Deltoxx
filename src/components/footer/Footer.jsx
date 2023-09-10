import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
      <div>Deltox IT solutions</div>
      <div>


      <div className={styles.ImgContainer}>
        <Image  src="/assets/deltoxx.png" fill={true} alt='image'/>

      </div>
    </div>
      </div>
  )
}

export default Footer
