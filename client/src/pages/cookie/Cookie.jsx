import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import PageHeader from "../../components/pageHeader/PageHeader"
import "./cookie.css"


function Cookie() {

    const {t} = useTranslation()

    return (
        <>
        <Helmet>
            <title>Cookie Policy - Waveast</title>
            <link rel="canonical" href="/contact" />
            <meta name="description" 
                content="Waveast Installation & Park Services is a company that provides engineering, installation, maintenance, expansion, renovation, and consultancy services for amusement items and water parks. It was created in 2021 in Warsaw, Poland." />
        </Helmet>
        <PageHeader pageTitle={t(`pageTitles.cookie`)} />
        </>
    )
}

export default Cookie