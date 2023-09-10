import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/button'


const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://www.cultrix.co.uk/uploads/news/training.jpg" fill={true} className={styles.img} alt='img'/>
          <div className={styles.imgText}>
        <h1  className={styles.imgTitle}>Deltoxx</h1>
        <h2  className={styles.imgDesc}>Best DIgital Experience</h2>

</div>
      </div>



      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>who are we</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus 
          <br />
          <br />
          nihil minus autem animi a sed repellendus quisquam culpa quis repudiandae, possimus laboriosam, incidunt iure ullam. Facilis quisquam harum suscipit velit ipsam, voluptatibus a sunt atque distinctio! Explicabo esse quasi laborum. Quis aut tempore eaque quisquam vel, itaque accusamus voluptatibus cumque voluptatum fugiat!</p>

</div>
<div className={styles.item}>
        <h1 className={styles.title}>who are we</h1>
        <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus 
          <br />
          <br />
          nihil minus autem animi a sed repellendus quisquam culpa quis repudiandae, possimus laboriosam, incidunt iure ullam. Facilis quisquam harum suscipit velit ipsam, voluptatibus a sunt atque distinctio! Explicabo esse quasi laborum. Quis aut tempore eaque quisquam vel, itaque accusamus voluptatibus cumque voluptatum fugiat!</p>

<Button url="contact" text="contact"></Button>
</div>

    </div>
    </div>
  )
}

export default About
