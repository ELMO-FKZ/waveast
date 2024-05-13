import SpecialHeading from "../specialHeading/SpecialHeading"
import servicesItems from "../../data/servicesItems"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "./servicesMain.css"

function ServicesMain() {
    return (
        <div className="section__padding container">
            <SpecialHeading title="Services" subtitle="Comprehensive services for every need" />
            <div className="main__services-buttons">
                <button className="main__services-button"><FaChevronLeft /></button>
                <button className="main__services-button"><FaChevronRight /></button>
            </div>
            <div className="main__services-items" >
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
}

export default ServicesMain