import { useState, useContext } from "react"
import { useTranslation } from "react-i18next"
import { BiGlobe } from "react-icons/bi"
import { availableLanguages } from "../../data/availableLanguages"
import { LanguageContext } from "../../contexts/LanguageContext"
import PropTypes from "prop-types"
import "./cookieConsent.css"

function FirstBanner({handleShowPreferences, handleAcceptAll, handleRejectAll}) {

    const [isLanguageBoxShown, setIsLanguageBoxShown] = useState(false)
    const {t} = useTranslation()
    const {currentLanguage, handleCurrentLanguageChange} = useContext(LanguageContext)

    // Changing the language
    const handleLanguageIconClick = () => {
        setIsLanguageBoxShown(prevState => !prevState)
    }

    const handleLanguageChange = (ID) => {
        const selectedLanguage = availableLanguages.find(language => language.id === ID)
        if (selectedLanguage) {
          handleCurrentLanguageChange(selectedLanguage.symbol)
            localStorage.setItem("lng", selectedLanguage.symbol)
        }
        setIsLanguageBoxShown(false)
    }

    return (

    <div className="banner__overlay">
        <div className="banner">
            <div className="banner__header">
                <span className="banner__title">We Use Cookies!</span>
                <div className="first-banner__language">
                    <div className="banner__icon banner__icon--first" onClick={handleLanguageIconClick} onKeyDown={handleLanguageIconClick} tabIndex={0}>
                        <BiGlobe />
                    </div>
                    <div className={`first-banner__language-box ${!isLanguageBoxShown ? "first-banner__language-box--hidden" : ""}`}>
                        {availableLanguages.map(language => (
                            <div key={language.id} className={`first-banner__language-radios ${currentLanguage === language.symbol ? "first-banner__language-radios--active" : ""}`} >
                                <input className="first-banner__language-radio" 
                                aria-label={t(`nav.langIconAriaLabel`)}
                                type="radio" 
                                name="language" 
                                id={`language-${language.id}`} 
                                value={language.id} 
                                checked={currentLanguage === language.symbol} 
                                onChange={() => handleLanguageChange(language.id)} 
                                required 
                                />
                                <label htmlFor={`language-${language.id}`}>{language.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="first-banner__content">
                <div className="banner__text">
                    This website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button className="banner__link" onClick={handleShowPreferences}>Let me choose</button>
                </div>
                <div className="first-banner__action-buttons">
                    <button className="btn first-banner__accept-btn" onClick={handleAcceptAll}>Accept All</button>
                    <button className="btn first-banner__reject-btn" onClick={handleRejectAll}>Reject All</button>
                </div>
            </div>   
        </div>
    </div>
    )
}

export default FirstBanner


FirstBanner.propTypes = {
    handleShowPreferences: PropTypes.func.isRequired,
    handleAcceptAll: PropTypes.func.isRequired,
    handleRejectAll: PropTypes.func.isRequired
}