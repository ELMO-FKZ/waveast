import { VectorMap } from "@react-jvectormap/core"
import { worldMill } from "@react-jvectormap/world"
import { projectPlaces } from "../../data/projectPlaces"
import SpecialHeading from "../specialHeading/SpecialHeading"

function WorldMap() {
    return (
        <div className="section__padding container">
            <SpecialHeading title="Projects" subtitle="Our projects presence across the globe" />
            <div style={{maxWidth: "700px", height: "400px", margin: "auto"}}>
                <VectorMap map={worldMill}
                containerStyle={{with: "100%", height: "100%"}}
                backgroundColor="var(--yellow-color)"
                markers= {projectPlaces}
                markerStyle= {{
                    initial: {
                        fill: '#ffe066',
                        stroke: '#383f47'
                    }
                }}
                />
            </div>
        </div>
    )
}

export default WorldMap