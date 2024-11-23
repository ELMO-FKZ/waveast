import { useState } from "react"
// import { Link as LinkRouter} from "react-router-dom"
import { BiX, BiCheck, BiChevronDown } from "react-icons/bi"
import PropTypes from "prop-types"
import "./cookieConsent.css"

function SecondBanner({preferences, handleCloseModal, handleCloseModalEnter, handleCheckboxChange, handleSaveSettings}) {

    const [openAccordion, setOpenAccordion] = useState(null)

    const handleAccordionToggle = (index) => {
        setOpenAccordion(openAccordion === index ? null : index)
    };

    const handleAccordionEnter = (e, index) => {
        if (e.keyCode === 13) {
            handleAccordionToggle(index)
        }
    }

    return (
        
    <div className="banner__overlay">
        <div className="banner">
            <div className="banner__header">
                <span className="banner__title">Manage Your Preferences</span>
                <div className="banner__icon banner__icon--second" onClick={handleCloseModal} onKeyDown={handleCloseModalEnter}><BiX /></div>
            </div>
            <div className="second-banner__content">
                <div className="second-banner__usage">
                    <div className="banner__subtitle">Cookie usage</div>
                    <div className="banner__text">I use cookies to ensure the basic functionalities of the website and to enhance your online experience. 
                        You can choose for each category to opt-in/out whenever you want. 
                        For more details relative to cookies and other sensitive data, please read the full <a target="_blank" className="banner__link" href="/privacy">privacy policy.</a>
                    </div>
                </div>
                <div className="second-banner__accordion">
                    <div className={`second-banner__accordion-top ${openAccordion === 0 ? "second-banner__accordion-top--open" : ""}`} onClick={() => handleAccordionToggle(0)} onKeyDown={() => handleAccordionEnter(0)} role="button" tabIndex={0}>
                        <BiChevronDown className={`second-banner__accordion-chevron ${openAccordion === 0 ? "second-banner__accordion-chevron--open" : ""}`} />
                        <span className="second-banner__accordion-span">Strictly Necessary Cookies</span>
                        <div className="second-banner__accordion-checkbox" onClick={(e) => e.stopPropagation()}>
                            <BiCheck className="second-banner__accordion-svg" />
                            <input className="second-banner__accordion-input second-banner__accordion-input--notallowed" type="checkbox" checked readOnly />
                            <BiX className="second-banner__accordion-svg" />
                        </div>
                    </div>
                    <div className={`second-banner__accordion-bottom ${openAccordion === 0 ? "second-banner__accordion-bottom--open" : ""}`}>
                        These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.
                    </div>
                </div>
                <div className="second-banner__accordion">
                    <div className={`second-banner__accordion-top ${openAccordion === 1 ? "second-banner__accordion-top--open" : ""}`} onClick={() => handleAccordionToggle(1)} onKeyDown={() => handleAccordionEnter(1)} role="button" tabIndex={0}>
                        <BiChevronDown className={`second-banner__accordion-chevron ${openAccordion === 1 ? "second-banner__accordion-chevron--open" : ""}`} />
                        <span className="second-banner__accordion-span">Performance and Analytics Cookies</span>
                        <div className="second-banner__accordion-checkbox" onClick={(e) => e.stopPropagation()}>
                            <BiCheck className="second-banner__accordion-svg" />
                            <input className="second-banner__accordion-input" type="checkbox" checked={preferences.analytics}  onChange={(e) => handleCheckboxChange('analytics', e.target.checked)} />
                            <BiX className="second-banner__accordion-svg" />
                        </div>
                    </div>
                    <div className={`second-banner__accordion-bottom ${openAccordion === 1 ? "second-banner__accordion-bottom--open" : ""}`}>
                        These cookies allow the website to remember the choices you have made in the past.
                        <ul>
                            <li className="second-banner__accordion-bottom-li">
                                <span className="second-banner__accordion-bottom-span">^_ga</span>
                                <span>Used by Google Analytics to distinguish one visitor from another and lasts for 2 years.</span>
                            </li>
                            <li className="second-banner__accordion-bottom-li">
                                <span className="second-banner__accordion-bottom-span">_gat</span>
                                <span>Used by Google Analytics to limit the collection of data on high traffic sites. This cookie expires after 1 day.</span>
                            </li>
                            <li className="second-banner__accordion-bottom-li">
                                <span className="second-banner__accordion-bottom-span">_gid</span>
                                <span>Used by Google Analytics to generate statistical data on how the visitor uses the website. This cookie expires after 1 day.</span>
                            </li>
                            <li className="second-banner__accordion-bottom-li">
                                <span className="second-banner__accordion-bottom-span">lng</span> 
                                <span>Stores the user's preferred language setting for the website. It expires after the session ends.</span>
                            </li>
                            <li className="second-banner__accordion-bottom-li">
                                <span className="second-banner__accordion-bottom-span">dark-mode</span> 
                                <span>Saves the user's preference for dark mode or light mode display. It expires after the session ends.</span>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div className="second-banner__accordion">
                    <div className={`second-banner__accordion-top ${openAccordion === 2 ? "second-banner__accordion-top--open" : ""}`} onClick={() => handleAccordionToggle(2)} onKeyDown={() => handleAccordionEnter(2)} role="button" tabIndex={0}>
                        <BiChevronDown className={`second-banner__accordion-chevron ${openAccordion === 2 ? "second-banner__accordion-chevron--open" : ""}`} />
                        <span className="second-banner__accordion-span">Advertisement and Targeting Cookies</span>
                        <div className="second-banner__accordion-checkbox" onClick={(e) => e.stopPropagation()}>
                            <BiCheck className="second-banner__accordion-svg" />
                            <input className="second-banner__accordion-input" type="checkbox" checked={preferences.targeting}  onChange={(e) => {handleCheckboxChange('targeting', e.target.checked)}} />
                            <BiX className="second-banner__accordion-svg" />
                        </div>
                    </div>
                    <div className={`second-banner__accordion-bottom ${openAccordion === 2 ? "second-banner__accordion-bottom--open" : ""}`}>
                        These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.
                    </div>
                </div>
            </div>
            <div className="second-banner__action">
                <button className="btn second-banner__save-btn" onClick={handleSaveSettings}>Save Settings</button>
            </div>
        </div>
    </div>
    )
}

export default SecondBanner


SecondBanner.propTypes = {
    preferences: PropTypes.object.isRequired, 
    handleCloseModal: PropTypes.func.isRequired,
    handleCloseModalEnter: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleSaveSettings: PropTypes.func.isRequired
}