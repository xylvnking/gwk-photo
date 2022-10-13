import React, { useState, useEffect, useRef } from 'react'
import styles from './Main.module.scss'
import Image from 'next/image'

export default function Lightbox(props) {

    // <Lightbox 
    //     photos={albums[props.category][props.index].photoURLsLQ}
    //     setLightboxOpen={setLightboxOpen}
    //     indexOfPhotoClickedOn={indexOfPhotoClickedOn}
    // />
    // useEffect(() => {
    //     setcu
    // })

    const [currentPhoto, setCurrentPhoto] = useState(props.indexOfPhotoClickedOn)
    // const [count, setCount] = useState(0)

    const key = useRef()
    const count = useRef(0)
    // console.log(currentPhoto)
    // const [currentControl, setCurrentControl] = useState()


    // console.log(props.currentControl)




    const handleInput = (input) => {
        // console.log('ye')
        // let x = count
        key.current = input
        // console.log(key.current)
        if (key.current == 'ArrowLeft') {
            count.current = count.current - 1

        } else if (key.current == 'ArrowRight') {
            count.current = count.current + 1

        }

        if (count.current > props.photos.length - 1) {
            count.current = 0
        } else if (count.current < 0 ) {
            count.current = props.photos.length - 1
        }
        // console.log(count.current)
        setCurrentPhoto(count.current)
        // navigate()
        // if (input == 'ArrowLeft'){
            //     console.log('left')
            //     setCount(count - 2)
            //     // setCurrentControl(input)
            
            // }
            // if (input == 'ArrowRight') {
                //     console.log('right')
                //     setCount(count + 2)
                //     // setCurrentControl(input)
                
                // }
            }
            
    const navigate = (direction) => {
        // console.log('navigate')
        // setCount(count + 10)
        

    }



    useEffect(() => { // gets user input
        // console.log('ye')
        // setCount(0)
        // document.addEventListener('keydown', (e) => navigate(e.key))
        document.addEventListener('keydown', (e) => handleInput(e.key))
        return () => {
            count.current = 0
            key.current = null
        }
    }, [])



  return (
    //   <div id={styles["lightboxContainerContainer"]}>
    //     <div id={styles["lightboxContainer"]}>
    //         <h1 onClick={() => props.setLightboxOpen(false)}>EXIT</h1>
    //         <div id={styles["lightboxGrid"]}>
    //         {
    //             props.photos.map((photo, index) => {
    //                 return (
    //                     <div>
    //                         <Image 
    //                             src={photo}
    //                             layout='fill'
    //                             // objectFit='cover'
    //                             objectFit='contain'
    //                         />
    //                     </div>
    //                     )
    //                 })
    //         }
    //         </div>
    //     </div>
    //   </div>
    <div id={styles["lightboxContainer2"]}>
        <nav id={styles["navigation"]}>
        <h1 onClick={() => props.setLightboxOpen(false)}>EXIT</h1>
            <div id={styles["navigationArrows"]}>
                <div className={styles.arrowButton} onClick={() => handleInput('ArrowLeft')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m22.35 38.95-13.9-13.9q-.25-.25-.35-.5Q8 24.3 8 24q0-.3.1-.55.1-.25.35-.5L22.4 9q.4-.4 1-.4t1.05.45q.45.45.45 1.05 0 .6-.45 1.05L13.1 22.5h24.8q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075-.425.425-1.075.425H13.1l11.4 11.4q.4.4.4 1t-.45 1.05q-.45.45-1.05.45-.6 0-1.05-.45Z"/></svg>
                </div>
                <div className={styles.arrowButton} onClick={() => handleInput('ArrowRight')}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.95 38.9q-.4-.4-.4-1.05t.4-1.05l11.3-11.3H9.5q-.65 0-1.075-.425Q8 24.65 8 24q0-.65.425-1.075Q8.85 22.5 9.5 22.5h24.75l-11.3-11.3q-.4-.4-.4-1.075 0-.675.4-1.075.4-.4 1.05-.4t1.05.4l13.9 13.9q.25.25.35.5.1.25.1.55 0 .25-.1.525t-.35.525l-13.9 13.9q-.4.4-1.05.375-.65-.025-1.05-.425Z"/></svg>
                </div>
            </div>
        </nav>
        <div className={styles.lightboxImageWrapper}>
            {/* <div className={styles.imageWrapper} key={index} style={heights && {height: heights[index]}}>
            <div className={styles.imageWrapper} key={index}> */}
                <Image 
                    src={props.photos[currentPhoto]}
                    // objectFit='cover'
                    objectFit='contain'
                    layout='fill'
                    // height={200}
                    // width={200}
                />
            </div>
        {/* <h1>{props.photos[currentPhoto]}</h1> */}
        

    </div>
  )
}
