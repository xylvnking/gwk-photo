import React from 'react'
import styles from './Main.module.scss'
import Image from 'next/image'

import photo from '../public/unsplash.jpg'



export default function Hero() {
  return (
    <div className={styles.heroContainer}>
        <div>
            {/* <h1>Gordon King</h1> */}
            <h1>Gordon King Photography</h1>
        </div>
        <div className={styles.heroPhotoWrapperDesktop}>
            <Image 
                src={'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'} 
                // src={'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg'} 
                // objectFit='contain' 
                // height={100}
                // width={100}
                objectFit='cover' 
                layout='fill'
                // layout='fixed'
                quality={3}
                priority='true'
                // placeholder="blur"
                // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1000, 3000))}`}

            />
            
        </div>
        <div className={styles.heroPhotoWrapperMobile}>
            <Image 
                src={'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665636850/GWK/mobileHero_ah3u8a.png'} 
                // src={'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg'} 
                // objectFit='contain' 
                // height={100}
                // width={100}
                objectFit='cover' 
                layout='fill'
                // layout='fixed'
                quality={1}
                // priority='true'
                // placeholder="blur"
                // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1000, 3000))}`}

            />
            
        </div>
    </div>
  )
}
