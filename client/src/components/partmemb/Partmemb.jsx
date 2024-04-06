import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "./partmemb.css"

function Partmemb({items}) {
    return (
    <>
    <div className="partmemb-buttons">
        <button className="partmemb-button"><FaChevronLeft /></button>
        <button className="partmemb-button"><FaChevronRight /></button>
    </div>
    <div className="partmemb-items" >
        {
            items.map((item) => {
                return (
                    <div className="partmemb-item" key={item.id}>
                        <img className="partmemb-img" src={item.src} alt={item.alt} />
                    </div>
                )
            })
        }
    </div>
    </>
    )
}

export default Partmemb