import { Helmet } from "react-helmet-async"
import PageHeader from "../../components/pageHeader/PageHeader"

function Experience() {
    return (
        <>
        <Helmet>
            <title>Projects - Waveast</title>
            <link rel="canonical" href="/projects" />
            <meta name="description" 
                content="We have been in… Aqua Magica | Spain Land of Legends | Turkey Aqua Park | Albania Aquaterra | Moldova Baghdadland | Iraq Cartoon Network Amazone | Thailand Hotel Izvor | Serbia Marina Aquapark Hillah | Iraq Suntago Waterpark | Poland Maritim Crystal Beach Hotel | Mauritius Oasis Aquapark | Turkey The Wave Coventry | England" />
        </Helmet>
        <PageHeader pageTitle="Our projects" />
        <div>Experience</div>
        </>
    )
}

export default Experience