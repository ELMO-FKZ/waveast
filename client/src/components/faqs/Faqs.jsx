import { useState, memo } from "react" 
import { FaCaretDown } from "react-icons/fa"
import { BiPlus, BiMinus } from "react-icons/bi"
import SpecialHeading from "../specialHeading/SpecialHeading"
import faqs from "../../data/faqs"
import "./faqs.css"

const Faqs = memo(function Faqs() {

    const [itemsToShow, setItemsToShow] = useState(3)
    const [expandedItems, setExpandedItems] = useState([])

    const handleShowMore = () => {
        setItemsToShow((prevItems) => prevItems + 3)
    }

    const handleClick = (faqId) => {
        setExpandedItems((prevExpandedItems) => {
            if (prevExpandedItems.includes(faqId)) {
                return prevExpandedItems.filter((id) => id !== faqId)
            } else {
                return [...prevExpandedItems, faqId]
            }
        })
    }

    return (
        <div className="section__padding container">
            <SpecialHeading title="F.A.Q." subtitle="Frequently asked questions" />
            <div className="faqs">
                {faqs.slice(0, itemsToShow).map((faq) => {
                    const isExpanded = expandedItems.includes(faq.id)
                    return (
                        <div key={faq.id} className={`faq ${isExpanded ? "faq--clicked" : ""}`} >
                            <p className={`faq__question ${isExpanded ? "faq__question--clicked" : ""}`} onClick={() => handleClick(faq.id)}>
                                {faq.question}
                                <span className='faq__extend'>
                                    <BiPlus className={`faq__icon ${isExpanded ? "faq__icon--hide" : ""}`} />
                                    <BiMinus className={`faq__icon ${isExpanded ? "" : "faq__icon--hide"}`}/>
                                </span>
                            </p>
                            <p className={`faq__answer ${isExpanded ? "faq__answer--show" : ""}`}>
                                {faq.answer}
                            </p>
                        </div>
                    )
                })}
                {itemsToShow < faqs.length && (
                    <div className="faq__show-more">
                        <button className="btn btn--primary" onClick={handleShowMore}>Show more<FaCaretDown /></button>
                    </div>
                )}
            </div> 
        </div>
    )
})

export default Faqs