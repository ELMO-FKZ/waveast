import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { wrapCompanyName } from "../../utils/wrapCompanyName"
import PageHeader from "../../components/pageHeader/PageHeader"
import SpecialHeadingTwo from "../../components/specialHeadingTwo/SpecialHeadingTwo"
import ServicesGallery from "../../components/servicesGallery/ServicesGallery"
import servicesItems from "../../data/servicesItems"
import "./services.css"

function Services() {

    const {t} = useTranslation()

    return (
        <>
        <Helmet>
            <title>Services - Waveast</title>
            <link rel="canonical" href="/services" />
            <meta name="description" 
                content="Water Park Services Engineering Design and calculations of the structures according to European Norms. Installation Both “Only supervisor” or “ Full Scope Installation” services with our skilled and expert engineers, technicians and installers. Maintenance Periodical maintenance, re-painting ,re-locating services with our talented technicians and repairment. Expansion Advising and supplying expansion parts for the current parks. … Water Park Services Read More »" />
        </Helmet>
        <PageHeader pageTitle={t(`pageTitles.services`)} />
        <p className="services__overview container">{wrapCompanyName(t(`servicesCompany.0`))}</p>
        <div className="section__padding container">
            <SpecialHeadingTwo title={t(`specialHeadings.waterParkServices`)} />
            <div className="services__container">
                {
                    servicesItems.map((service) => {
                        return (
                            <div key={service.id} className="services__service">
                                <div className="services__icon">
                                    {service.icon}
                                </div>
                                <div className="services__content">
                                    <h3 className="services__title">{t(service.titleKey)}</h3>
                                    <p className="services__para">{t(service.contentKey)}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <ServicesGallery />
        </>
    )
}

export default Services