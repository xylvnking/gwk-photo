import React from 'react'
import styles from './Main.module.scss'
import Image from 'next/image'

import photo from '../public/unsplash.jpg'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
        <h1>GWK PHOTOGRAPHY</h1>
        <div className={styles.heroPhotoWrapperWrapper}>
            <div className={styles.heroPhotoWrapper}>
            {/* <Image src={'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'} objectFit='contain' height={100} width={100}/> */}
                {/* <Image src={'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'} objectFit='contain' /> */}
                {/* <Image src={'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'} objectFit='contain' layout='fill'/> */}
                {/* <Image src={photo} objectFit='contain'/> */}
                {/* <Image src={'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'} objectFit='cover' layout='fill'/> */}
                <Image src={'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'} objectFit='contain' layout='fill'/>
            </div>
        </div>
    </div>
  )
}
