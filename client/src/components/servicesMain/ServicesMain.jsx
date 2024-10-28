import { useRef, memo } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import SpecialHeading from "../specialHeading/SpecialHeading"
import servicesItems from "../../data/servicesItems"
import "./servicesMain.css"

const ServicesMain = memo(function ServicesMain() {

    const {t} = useTranslation()

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
            <SpecialHeading title={t(`sectionHeadings.services.title`)} subtitle={t(`sectionHeadings.services.subTitle`)} />
            <div className="carousel-buttons">
                <button className="carousel-button btn--primary" aria-label={t(`carouselBtnAriaLabel.left`)} onClick={handleLeftClick}><FaChevronLeft /></button>
                <button className="carousel-button btn--primary" aria-label={t(`carouselBtnAriaLabel.right`)} onClick={handleRightClick}><FaChevronRight /></button>
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
                                {t(service.titleKey)}
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