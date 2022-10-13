import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/Hero'
// import styles from '../styles/Home.module.css'
import styles from './Main.module.scss'
import Link from 'next/link'

import { albums } from '../pages'

// const albums = [
//     {
//         albumName: 'albumName1',
//         thumbnailURL: 'https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665616717/GWK/house1_gckawh.png',
//         photoURLs: [
//             'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665616717/GWK/house1_gckawh.png', 
//             'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665618141/GWK/spacejoy-9M66C_w_ToM-unsplash_byimty.jpg', 
//             'https://res.cloudinary.com/deqrwzr3q/image/upload/v1665619943/GWK/hero1.jpg'
//         ],
//         description: 'Chartreuse cred 8-bit, palo santo air plant four loko migas cliche chambray irony edison bulb bespoke gastropub. Waistcoat sus 8-bit, pok pok actually prism leggings locavore woke godard crucifix. Farm-to-table selvage lo-fi, franzen pug vape four loko synth twee affogato literally. Jianbing pop-up synth cray. Gluten-free messenger bag listicle portland polaroid, vape whatever tote bag 8-bit freegan.',

//     }
// ]




export default function Albums() {
    return (
        <main id={styles["albumsContainer"]}>
            <h1> Exteriors </h1>
            <section className={styles.albumsGrid}>
                {albums.exteriors.map((album, index) => {
                    return (
                        <Link key={index} href={`/${album.albumName}`}>
                            <ul>
                                {/* <Image src={album.thumbnailURL} 
                                    objectFit='contain' 
                                    height={100}
                                    width={100}
                                /> */}
                                <div id={styles["albumImage"]}>
                                    {/* <Image src={album.thumbnailURL}  */}
                                    <Image src={album.thumbnailURLLowQ} 
                                        // objectFit='contain' 
                                        objectFit='cover' 
                                        layout='fill'
                                        quality={1}
                                        // placeholder='blue'
                                        // blurDataURL='https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665636084/GWK/naomi-hebert-MP0bgaS_d1c-unsplash_zrblnm.jpg'
                                    />
                                </div>
                                <li id={styles["albumText"]}>
                                    <h1>{album.albumName}</h1>
                                    <p>{album.description}</p>
                                </li>
                            </ul>
                        </Link>
                    )
                })}
            </section>
            <h1> Interiors </h1>
            <section className={styles.albumsGrid}>
                {albums.interiors.map((album, index) => {
                    return (
                        <Link key={index} href={`/${album.albumName}`}>
                            <ul>
                                {/* <Image src={album.thumbnailURL} 
                                    objectFit='contain' 
                                    height={100}
                                    width={100}
                                /> */}
                                <div id={styles["albumImage"]}>
                                    {/* <Image src={album.thumbnailURL}  */}
                                    <Image src={album.thumbnailURLLowQ} 
                                        // objectFit='contain' 
                                        objectFit='cover' 
                                        layout='fill'
                                        quality={1}
                                        // placeholder='blue'
                                        // blurDataURL='https://res.cloudinary.com/deqrwzr3q/image/upload/c_thumb,w_200,g_face/v1665636084/GWK/naomi-hebert-MP0bgaS_d1c-unsplash_zrblnm.jpg'
                                    />
                                </div>
                                <li id={styles["albumText"]}>
                                    <h1>{album.albumName}</h1>
                                    <p>{album.description}</p>
                                </li>
                            </ul>
                        </Link>
                    )
                })}
            </section>

        </main>
    )
}
// export default function Albums(props) {
//     return (
//         <>
//             {props.albums.map((album, index) => {
//                 return (
//                     <Link href={`/${album.albumName}`}>
//                         <ul>
//                             <li>{album.albumName}</li>
//                             <Image src={album.thumbnailURL} 
//                                 objectFit='contain' 
//                                 height={100}
//                                 width={100}
//                                 />
//                             <li>{album.albumName}</li>
//                         </ul>
//                     </Link>
//                 )
//             })}
//         </>
//     )
// }
