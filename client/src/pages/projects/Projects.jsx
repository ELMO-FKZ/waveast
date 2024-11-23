import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { projectsImages } from "../../data/projectsImages"
import { wrapCompanyName } from "../../utils/wrapCompanyName"
import PageHeader from "../../components/pageHeader/PageHeader"
import Lightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions"
import Download from "yet-another-react-lightbox/plugins/download"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Counter from "yet-another-react-lightbox/plugins/counter"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/captions.css"
import "yet-another-react-lightbox/plugins/counter.css"
import "./projects.css"

function Projects() {

    const {t} = useTranslation()

    const [index, setIndex] = useState(-1)

    // Map projectsImages to include translated captions
    const slides = projectsImages.map(image => {
        return {
            src: image.src,
            description: t(image.description)
        }
    })

    // At Waveast Installation & Park Services, we believe in creating memorable experiences for our clients and their customers. Our team of dedicated professionals combines expertise and innovation to provide top-notch services that enhance the enjoyment and safety of amusement and entertainment venues. We understand that each project is unique, and we are committed to delivering solutions that exceed expectations.

    return (
        <>
        <Helmet>
            <title>Projects - Waveast</title>
            <link rel="canonical" href="/projects" />
            <meta name="description" 
                content="We have been in… Aqua Magica | Spain Land of Legends | Turkey Aqua Park | Albania Aquaterra | Moldova Baghdadland | Iraq Cartoon Network Amazone | Thailand Hotel Izvor | Serbia Marina Aquapark Hillah | Iraq Suntago Waterpark | Poland Maritim Crystal Beach Hotel | Mauritius Oasis Aquapark | Turkey The Wave Coventry | England" />
        </Helmet>
        <div className="projects__page">
            <PageHeader pageTitle={t(`pageTitles.projects`)} />
            <div className="projects__overview container section__padding--block">
                <p>{wrapCompanyName(t(`projectsCompany.0`))}</p>
                <p>{wrapCompanyName(t(`projectsCompany.1`))}</p>
            </div>
            <div className="projectImage-gallery container section__padding--bottom">
                {projectsImages.map((image, index) => (
                    <div key={index} className="projectImage-gallery__image" onClick={() => setIndex(index)}>
                        <img className="projectImage-gallery__img" src={image.src} alt={t(image.description)} />
                        <div className="projectImage-gallery__overlay"></div>
                        <span className="projectImage-gallery__span">{t(image.description)}</span>
                    </div>
                ))}
            </div>
            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Captions, Download, Fullscreen, Counter, Zoom, Thumbnails]}
                captions={{ descriptionTextAlign: "center" }}
            
            />
        </div>
        </>
    )
}

export default Projects