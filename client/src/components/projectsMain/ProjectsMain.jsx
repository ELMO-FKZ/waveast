import { useTranslation } from "react-i18next"
import { VectorMap } from "@react-jvectormap/core"
import { worldMill } from "@react-jvectormap/world"
import SpecialHeading from "../specialHeading/SpecialHeading"

const projectPlaces = [
    /*{latLng: [N, E], name: ""}*/
    {latLng: [37.3891, -5.9845], name: "Seville, Spain"},
    {latLng: [36.8969, 30.7133], name: "Antalya, Turkey"}, 
    {latLng: [41.3445, 19.7235], name: "Kashar, Albania"},
    {latLng: [47.0105, 28.8638], name: "Chișinău, Moldova"},
    {latLng: [33.3152, 44.3661], name: "Baghdad, Iraq"},
    {latLng: [12.9236, 100.8825], name: "Pattaya, Thailand"},
    {latLng: [44.3107, 20.5526], name: "Aranđelovac, Serbia"},
    {latLng: [32.4736, 44.4252], name: "Hillah, Iraq"},
    {latLng: [51.9953, 20.4528], name: "Wręcza, Poland"},
    {latLng: [-20.1996, 57.7772], name: "Belle Mare, Mauritius"},
    {latLng: [38.2887, 26.3778], name: "Alaçatı, Turkey"},
    {latLng: [52.4128, -1.5090], name: "Coventry, England"}
]

function ProjectsMain() {

    const {t} = useTranslation()

    return (
        <div className="section__padding container">
            <SpecialHeading title={t(`sectionHeadings.projects.title`)} subtitle={t(`sectionHeadings.projects.subTitle`)} />
            <div style={{maxWidth: "700px", height: "400px", margin: "auto"}}>
                <VectorMap map={worldMill}
                containerStyle={{with: "100%", height: "100%"}}
                backgroundColor="var(--secondary-blue)"
                markers= {projectPlaces}
                markerStyle= {{initial: {fill: '#ffe066', stroke: '#383f47'}}}
                />
            </div>
        </div>
    )
}

export default ProjectsMain