import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Album from '../Components/Album'


export default function album() {
    const router = useRouter()
    const [album, setAlbum] = useState(null)
    const { fart } = router.query
    
    useEffect(() => {
        if (router.query) {
            // console.log(router.query.album)
            // console.log(router.query)
            setAlbum(router.query.album)
        }
    },[router.query])
  return (
      <Album album={album}/>

  )
}
