import { useTranslation } from "react-i18next"
import "./statistics.css"

const statistics = [
    {id: 1, title: "+15", statisticsKey: "statistics.0"},
    {id: 2, title: "+60", statisticsKey: "statistics.1"},
    {id: 3, title: "12", statisticsKey: "statistics.2"},
    {id: 4, title: "3", statisticsKey: "statistics.3"}
]

function Statistics() {

    const {t} = useTranslation()

    return (
        <div className="statistics container" >
            {
                statistics.map((statistic) => {
                    return (
                        <div className="statistic" key={statistic.id}>
                            <div className="statistic__title">{statistic.title}</div>
                            <p>{t(statistic.statisticsKey)}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Statistics