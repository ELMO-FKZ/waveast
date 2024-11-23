import { useEffect, useState, createContext, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { availableLanguages } from "../data/availableLanguages"
import PropTypes from "prop-types"

export const LanguageContext = createContext()

export const LanguageContextProvider = ({ children }) => {

    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem("lng") || 'en');
    //const [currentLanguages, setCurrentLanguages] = useState(availableLanguages.map(language => {...language, active: }))
    const {i18n} = useTranslation();

    useEffect(() => {
        const language = availableLanguages.find(language => language.symbol === currentLanguage)
        if (language) {
            i18n.changeLanguage(language.symbol)
        }
    }, [currentLanguage, i18n]);

    const handleCurrentLanguageChange = (newLanguage) => {
        setCurrentLanguage(newLanguage);
      };

      const contextValues = useMemo(() => {
        return {currentLanguage, handleCurrentLanguageChange} /*list everything to be shared here*/
      }, [currentLanguage]) /*dependencies*/
    
      return (
        <LanguageContext.Provider value={contextValues}>
          {children}
        </LanguageContext.Provider>
      )
}

LanguageContextProvider.propTypes = {
    children: PropTypes.any.isRequired
}