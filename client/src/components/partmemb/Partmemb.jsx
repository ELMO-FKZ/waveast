import { useRef, memo } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import PropTypes from "prop-types"
import "./partmemb.css"

const Partmemb = memo(function Partmemb({items, targetClick}) {

    const partCarousel = useRef()
    const membCarousel = useRef()

    const handleLeftClick = (e) => {
        e.preventDefault()
        if (targetClick== "partners") {
            partCarousel.current.scrollLeft -= partCarousel.current.offsetWidth
        } else {
            membCarousel.current.scrollLeft -= membCarousel.current.offsetWidth
        }
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        if (targetClick== "partners") {
            partCarousel.current.scrollLeft += partCarousel.current.offsetWidth
        } else {
            membCarousel.current.scrollLeft += membCarousel.current.offsetWidth
        }
    }


    return (
    <>
    <div className="partmemb-buttons">
        <button className="partmemb-button" onClick={handleLeftClick} ><FaChevronLeft /></button>
        <button className="partmemb-button" onClick={handleRightClick} ><FaChevronRight /></button>
    </div>
    <div className="partmemb-items" ref={targetClick === "partners" ? partCarousel : membCarousel} >
        {
            items.map((item) => {
                return (
                    <div className="partmemb-item" key={item.id}>
                        <img className="partmemb-img" src={item.src} alt={item.alt} />
                    </div>
                )
            })
        }
    </div>
    </>
    )
})

Partmemb.propTypes = {
    items: PropTypes.array,
    targetClick: PropTypes.string
}

export default Partmemb