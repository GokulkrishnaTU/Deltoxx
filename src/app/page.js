// "use client";

import Image from 'next/image'
import styles from './page.module.css'
import imgONe from 'public/assets/it1.jpg'
// import { useContext } from 'react'
// import { CounterContext } from '../../context/contest'


export default function Home() {

  // const { count, increment, decrement  } = useContext(CounterContext)?
  return (
    <div className={styles.container}>
            <div className={styles.items}>
                <h1 className={styles.title}>Better Digital Experience </h1>
            <p className={styles.desc}> Turining your idea in to reality . we bring togeter the teams from the global tech industry</p>
            {/* <button className={styles.button} onClick={()=>{increment()}}>see our works</button>
            <button className={styles.button} onClick={()=>{decrement()}}>see our works</button> */}
            <button className={styles.button} >see our works</button>
            </div>
    


      

      <div className={styles.items}>

      <Image src={imgONe} className={styles.img} alt='imageMain'  />
      </div>
    </div>
    
   
  )
}
