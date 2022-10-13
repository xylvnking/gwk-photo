import React from 'react'
// import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Album from '../Components/Album'




export default function album() {
    const router = useRouter()

    // const [album, setAlbum] = useState(null)
    // const [albumIndex, setAlbumIndex] = useState(null)
    // const { yer } = router.query 
    
    // useEffect(() => {
    //     // if (router.query.album) {
    //     if (router.query) {
    //         console.log(router.query)
    //         // console.log(router.query.album[0])
    //         // console.log(router.query.album)
    //         // console.log(router.query.album[0])
    //         // setAlbum(router.query.album[0])
    //         // setAlbumIndex(router.query.index)
    //     }
    // },[router.query])

  return (
      router.query.album &&
      <Album 
        category={router.query.album[0]}
        albumName={router.query.album[1]}
        index={router.query.album[2]}
      />

  )
}
