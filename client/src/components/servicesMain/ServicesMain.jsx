import { useRef, memo } from "react"
import SpecialHeading from "../specialHeading/SpecialHeading"
import servicesItems from "../../data/servicesItems"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "./servicesMain.css"

const ServicesMain = memo(function ServicesMain() {

    const carousel = useRef()

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <div className="section__padding container">
            <SpecialHeading title="Services" subtitle="Comprehensive services for every need" />
            <div className="main__services-buttons">
                <button className="main__services-button" onClick={handleLeftClick}><FaChevronLeft /></button>
                <button className="main__services-button" onClick={handleRightClick}><FaChevronRight /></button>
            </div>
            <div className="main__services-items" ref={carousel} >
                {
                    servicesItems.map((service) => {
                        return (
                            <div key={service.id}>
                            <div className="main__services-item" >
                                <div className="main__services-icon">
                                    <span className="main__services-hidden"></span>
                                    {service.icon}
                                </div>
                                {service.title}
                            </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
})

export default ServicesMain