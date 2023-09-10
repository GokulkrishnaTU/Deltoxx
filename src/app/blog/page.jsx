import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>

      {data.map(item=>(

     
        <Link href="/blog/test" className={styles.container} key={item.id} >
          <div className={styles.imageContainer}>
            <Image
            src="https://avatars.mds.yandex.net/get-pdb/2821159/f35f6fda-9c43-437e-8565-a7dd3f7c08e4/s1200"
            alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
         ))}

       
    </div>
  );
};

export default Blog;