import { getGallery } from "@/app/lib/queries"
import Gallery from "./Gallry"

   async function GalleryServer() {


    const img = await getGallery()


    
  return (
  <Gallery images={img} />
  )
}

export default GalleryServer
