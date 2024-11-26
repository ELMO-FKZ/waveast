import { useState, memo } from "react"
import { servicesImages } from "../../data/servicesImages"
import { useTranslation } from "react-i18next"
import SpecialHeadingTwo from "../specialHeadingTwo/SpecialHeadingTwo"
import Lightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions"
import Download from "yet-another-react-lightbox/plugins/download"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Counter from "yet-another-react-lightbox/plugins/counter"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/captions.css"
import "yet-another-react-lightbox/plugins/counter.css"
import "./servicesGallery.css"

const ServicesGallery = memo(function ServicesGallery() {

  const {t} = useTranslation()

  const [index, setIndex] = useState(-1)

  const [filterItems, setFilterItems] = useState([
    { id: 1, option: "Installation", optionTranslation: "servicesFilter.installation", active: true },
    { id: 2, option: "Maintenance", optionTranslation: "servicesFilter.maintenance", active: false }
  ])

  const [activeFilter, setActiveFilter] = useState("Installation")

  const handleFilter = (id, option) => {
    setFilterItems((prev) =>
      prev.map((item) => ({
        ...item, active: item.id === id,
      }))
    )
    setActiveFilter(option)
  }

  const FilteredImages = servicesImages.filter(
    (image) => (image.category).toLocaleLowerCase() === activeFilter.toLocaleLowerCase()
  )

  return (
    <div className="container section__padding--block">
      <div className="section__padding">
        <SpecialHeadingTwo title={t(`specialHeadings.servicesGallery`)} />
      </div>

      <div className="service-filter">
        {filterItems.map((item) => (
          <button key={item.id} className={`btn__filter ${item.active ? "btn__filter--active" : ""}`} onClick={() => handleFilter(item.id, item.option)} >
            {t(item.optionTranslation)}
          </button>
        ))}
      </div>

      <div className="image-gallery">
        {FilteredImages.map((image, index) => (
          <div key={index} className="image-gallery__image" onClick={() => setIndex(index)}>
            <img className="image-gallery__img" src={image.src} alt={image.description} />
          </div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={FilteredImages}
        plugins={[Captions, Download, Fullscreen, Counter, Zoom, Thumbnails]}
      />
    </div>
  )
})

export default ServicesGallery