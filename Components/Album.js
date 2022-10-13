import React, { useEffect } from 'react'
import { albums } from '../pages'
import Link from 'next/link'
import styles from './Main.module.scss'
import Image from 'next/image'

export default function Album(props) {

    // <Album 
    //     category={router.query.album[0]}
    //     albumName={router.query.album[1]}
    //     index={router.query.album[2]}
    // />

    console.log(albums[props.category][props.index].photoURLs)
    // console.log(props)


    return (
        <div id={styles["albumContainer"]}>
            <nav id={styles["nav"]}>
                <Link href='/'>
                    <div id={styles["home"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z" /></svg>
                        <h1>
                            Home
                        </h1>
                    </div>
                </Link>
            </nav>
            <main>
                <section id={styles["gridContainer"]}>
                    {
                        albums[props.category][props.index].photoURLs.map((photo, index) => {
                            return (
                                <div className={styles.imageWrapper}>
                                    <Image 
                                        src={photo}
                                        objectFit='contain'
                                        layout='fill'
                                        // height={100}
                                        // width={100}
                                    />
                                </div>
                            )
                        })
                    }
                </section>
            </main>
        </div>
    )
}
