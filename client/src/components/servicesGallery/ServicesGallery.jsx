import { useState } from "react"
import SpecialHeadingTwo from "../specialHeadingTwo/SpecialHeadingTwo"
import Lightbox from "yet-another-react-lightbox";
import "./servicesGallery.css"

function ServicesGallery() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="section__padding container">
        <SpecialHeadingTwo title="Water park installation" />
      </div>

      <button type="button" onClick={() => setOpen(true)}>Open Lightbox</button>

      <Lightbox open={open} close={() => setOpen(false)} slides={[{ src: "/image1.jpg" }, { src: "/image2.jpg" }, { src: "/image3.jpg" },]}
    />
    </>
  )
}

export default ServicesGallery