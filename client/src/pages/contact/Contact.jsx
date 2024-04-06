import { Helmet } from "react-helmet-async"
import PageHeader from "../../components/pageHeader/PageHeader"

function Contact() {
    return (
        <>
        <Helmet>
            <title>Contact - Waveast</title>
            <link rel="canonical" href="/contact" />
            <meta name="description" 
                content="Waveast Installation & Park Services is a company that provides engineering, installation, maintenance, expansion, renovation, and consultancy services for amusement items and water parks. It was created in 2021 in Warsaw, Poland." />
        </Helmet>
        <PageHeader pageTitle="Contact us" />
        <div>Contact</div>
        </>
    )
}

export default Contact