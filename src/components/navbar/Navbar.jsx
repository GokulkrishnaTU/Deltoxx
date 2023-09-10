import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import DarkModeToggle from '../DarkMode/Darkmode'

const links=[
    {id:1,
    title:"home",
    url:"/"
},
{id:2,
    title:"portfolio",
    url:"/portfolio"
},
{id:3,
    title:"Blog",
    url:"/blog"
},
{id:4,
    title:"About",
    url:"/about"
},
{id:5,
    title:"Contact",
    url:"/contact"
}
]

function Navbar() {
  return (
    <div className={styles.container}>
        <Link  className={styles.logo } href="/">Deltox</Link>

        <div  className={styles.links}>
        <DarkModeToggle/>


            {links.map((item)=>{

                return(
                    <Link key={item.id} href={item.url}  className={styles.link}>{item.title}</Link>
                    )
        
    })}

    <button  className={styles.logout} >Logout</button>
        </div>
      
    </div>
  )
}

export default Navbar
