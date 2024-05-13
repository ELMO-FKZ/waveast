import { Helmet } from "react-helmet-async"
import Landing from "../../components/landing/Landing"
import ServicesMain from "../../components/servicesMain/ServicesMain"
import Statistics from "../../components/statistics/Statistics"
import WorldMap from "../../components/worldMap/WorldMap"
import Faqs from "../../components/faqs/Faqs"
import NewsLetter from "../../components/newsLetter/NewsLetter"

function Home() {
    return (
        <>
        <Helmet>
            <title>Home - Waveast</title>
            <link rel="canonical" href="/" />
            <meta name="description" 
                content="Waveast Installation & Park Services is a company that provides engineering, installation, maintenance, expansion, renovation, and consultancy services for amusement items and water parks. It was created in 2021 in Warsaw, Poland." />
        </Helmet>
        <Landing />
        <Statistics />
        <ServicesMain />
        <WorldMap />
        <Faqs />
        <NewsLetter />
        </>
    )
}

export default Home