import SpecialHeadingTwo from "../specialHeadingTwo/SpecialHeadingTwo"
import servicesItems from "../../data/servicesItems"
import "./servicesServ.css"

function ServicesServ() {

  return (
    <>
        <div className="section__padding container">
            <SpecialHeadingTwo title="Water park services" />
            <div className="services__container">
                {
                    servicesItems.map((service) => {
                        return (
                            <div key={service.id} className="services__service">
                                <div className="services__icon">
                                    {service.icon}
                                </div>
                                <div className="services__content">
                                    <h3 className="services__title">{service.title}</h3>
                                    <p className="services__para">{service.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default ServicesServ