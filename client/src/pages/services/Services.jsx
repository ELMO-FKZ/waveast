import { Helmet } from "react-helmet-async"
import PageHeader from "../../components/pageHeader/PageHeader"
import ServicesServ from "../../components/servicesServ/ServicesServ"
import ServicesGallery from "../../components/servicesGallery/ServicesGallery"
import "./services.css"

function Services() {
    return (
        <>
        <Helmet>
            <title>Services - Waveast</title>
            <link rel="canonical" href="/services" />
            <meta name="description" 
                content="Water Park Services Engineering Design and calculations of the structures according to European Norms. Installation Both “Only supervisor” or “ Full Scope Installation” services with our skilled and expert engineers, technicians and installers. Maintenance Periodical maintenance, re-painting ,re-locating services with our talented technicians and repairment. Expansion Advising and supplying expansion parts for the current parks. … Water Park Services Read More »" />
        </Helmet>
        <PageHeader pageTitle="Our services" />
        <p className="services__overview container"><span className="company-name">Waveast</span> Installation & Park Services is a leading provider of comprehensive services for amusement items and water parks. With a strong commitment to excellence, we specialize in delivering exceptional engineering, installation, maintenance, expansion, renovation, and consultancy services.</p>
        <ServicesServ />
        <ServicesGallery />
        </>
    )
}

export default Services