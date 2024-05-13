import SpecialHeadingTwo from "../specialHeadingTwo/SpecialHeadingTwo"
import servicesItems from "../../data/servicesItems"
import "./servicesServ.css"

function ServicesServ() {

  return (
    <>
        <div className="services__overview container"> 
            <p><span className="company-name">Waveast</span> Installation & Park Services is a leading provider of comprehensive services for amusement items and water parks. With a strong commitment to excellence, we specialize in delivering exceptional engineering, installation, maintenance, expansion, renovation, and consultancy services.</p>
        </div>
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
        <div className="section__padding container">
            <SpecialHeadingTwo title="Water park installation" />
        </div>
    </>
  )
}

export default ServicesServ