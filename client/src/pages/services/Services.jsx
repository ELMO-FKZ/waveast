import { Helmet } from "react-helmet-async"
import PageHeader from "../../components/pageHeader/PageHeader"

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
        <div>Services</div>
        </>
    )
}

export default Services