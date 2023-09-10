import Link from 'next/link'
import React from 'react'
import styles from "./button.module.css"


function Button({text,url}) {
  return (
    <div>


        <Link href={url}>
<button className={styles.container}>{text}</button>

        </Link>
      
    </div>
  )
}

export default Button
