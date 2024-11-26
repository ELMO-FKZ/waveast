import React from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { wrapCompanyName } from "../../utils/wrapCompanyName"
import { getProjectsCount, countUniqueCountries, yearFounded, teamSize } from "../../utils/companyCounter"
import Vision from "../../components/svg/Vision"
import Mission from "../../components/svg/Mission"
import Values from "../../components/svg/Values"
import PageHeader from "../../components/pageHeader/PageHeader"
import SpecialHeadingTwo from "../../components/specialHeadingTwo/SpecialHeadingTwo"
import Partmemb from "../../components/partmemb/Partmemb"
import iaapa from "../../assets/IAAPAMember.png"
import basenprof from "../../assets/basenprof.png"
import isaba from "../../assets/isaba.jpg"
import apex from "../../assets/Apex.jpg"
import "./about.css"

const memberships = [
    {id: 1, src: iaapa, altKey: "iaapaAlt"},
    {id: 2, src: basenprof, altKey: "basenprofAlt"}
]

const partners = [
    {id: 1, src: isaba, altKey: "isabaAlt"},
    {id: 2, src: apex, altKey: "apexAlt"},
]

const reasons = [
    {id: 1, titleKey:"whyWe.0.title", paragraphKey:"whyWe.0.paragraph"},
    {id: 2, titleKey:"whyWe.1.title", paragraphKey:"whyWe.1.paragraph"},
    {id: 3, titleKey:"whyWe.2.title", paragraphKey:"whyWe.2.paragraph"},
    {id: 4, titleKey:"whyWe.3.title", paragraphKey:"whyWe.3.paragraph"},
    {id: 5, titleKey:"whyWe.4.title", paragraphKey:"whyWe.4.paragraph"},
    {id: 7, titleKey:"whyWe.5.title", paragraphKey:"whyWe.5.paragraph"},
    {id: 8, titleKey:"whyWe.6.title", paragraphKey:"whyWe.6.paragraph"}
]

const values = [
    {id: 1, valueKey: "companyValues.paragraph.0"},
    {id: 2, valueKey: "companyValues.paragraph.1"},
    {id: 3, valueKey: "companyValues.paragraph.2"},
    {id: 4, valueKey: "companyValues.paragraph.3"},
    {id: 5, valueKey: "companyValues.paragraph.4"},
    {id: 6, valueKey: "companyValues.paragraph.5"}
]

function About() {

    const {t} = useTranslation()
    const projectCount = getProjectsCount()
    const countryCount = countUniqueCountries()

    return (
        <>
        <Helmet>
            <title>About - Waveast</title>
            <link rel="canonical" href="/about" />
            <meta name="description" 
                content="Waveast Installation & Park Services is a leading company based in Warsaw, Poland, specializing in a wide range of services for amusement items and water parks. Since our establishment in 2021, we have been dedicated to providing exceptional engineering, installation, maintenance, expansion, renovation, and consultancy services." />
        </Helmet>
        <div className="about__page">
            <PageHeader pageTitle={t(`pageTitles.about`)} />
            <div className="about__company container section__padding--block">
                <p>{wrapCompanyName(t(`aboutCompany.0`, { yearFounded, teamSize }))}</p>
                <p>{wrapCompanyName(t(`aboutCompany.1`, { projectCount, countryCount }))}</p>
                <p>{wrapCompanyName(t(`aboutCompany.2`))}</p>
            </div>
            <div className="section__padding--block container">
                <SpecialHeadingTwo title={t(`specialHeadings.whyWe`)} />
                {reasons.map((reason) => (
                    <div className="reason__container" key={reason.id}>
                        <div className="reason__number">{reason.id}</div>
                        <div className="reason__content">
                            <h3 className="reason__title">{t(reason.titleKey)}</h3>
                            <p className="reason__para">{t(reason.paragraphKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="section__padding--block container">
                <SpecialHeadingTwo title={t(`specialHeadings.visionMissionValues`)} />
                <div className="statements">
                    <div className="statement">
                        <div className="statement__icon"><Vision /></div>
                        <div className="statement__container">
                            <div className="statement__hidden"></div>
                            <h3 className="statement__title">{t(`companyVision.title`)}</h3>
                            <p className="statement__content">{t(`companyVision.paragraph`)}</p>
                        </div>
                    </div>
                    <div className="statement">
                        <div className="statement__icon"><Mission /></div>
                        <div className="statement__container">
                            <div className="statement__hidden"></div>
                            <h3 className="statement__title">{t(`companyMission.title`)}</h3>
                            <p className="statement__content">{t(`companyMission.paragraph`)}</p>
                        </div>
                    </div>
                    <div className="statement">
                        <div className="statement__icon"><Values /></div>
                        <div className="statement__container">
                            <div className="statement__hidden"></div>
                            <h3 className="statement__title">{t(`companyValues.title`)}</h3>
                            <p className="statement__content">
                                {values.map((value) => (
                                    <React.Fragment key={value.id}>
                                        {t(value.valueKey)}<br/>
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section__people">
                <div className="section__padding--block container">
                    <SpecialHeadingTwo title={t(`specialHeadings.people`)} />
                    <div className="company__people">
                        <p>{wrapCompanyName(t(`companyPeople.0`))}</p>
                        <p>{wrapCompanyName(t(`companyPeople.1`))}</p>
                    </div>
                </div>
            </div>
            <div className="section__padding--block container">
                <SpecialHeadingTwo title={t(`specialHeadings.partners`)} />
                <Partmemb items={partners} targetClick="partners" />
            </div>
            <div className="section__padding--block container">
                <SpecialHeadingTwo title={t(`specialHeadings.memberships`)} />
                <Partmemb items={memberships} targetClick="members" />
            </div>
        </div>
        </>
    )
}

export default About