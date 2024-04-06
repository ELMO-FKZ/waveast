import statistics from "../../data/statistics"
import "./statistics.css"

function Statistics() {

    return (
        <div className="statistics container" >
            {
                statistics.map((statistic) => {
                    return (
                        <div className="statistic" key={statistic.id}>
                            <div className="statistic__title">
                                {statistic.title}
                            </div>
                            <p>
                                {statistic.subtitle}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Statistics