import { Helmet } from "react-helmet-async"
import { FaEye, FaHandshake, FaBullseye } from "react-icons/fa"
import PageHeader from "../../components/pageHeader/PageHeader"
import SpecialHeadingTwo from "../../components/specialHeadingTwo/SpecialHeadingTwo"
import reasons from "../../data/reasons"
import "./about.css"
import Partmemb from "../../components/partmemb/Partmemb"
import partners from "../../data/partners"
import memberships from "../../data/memberships"

function About() {
    return (
        <>
        <Helmet>
            <title>About - Waveast</title>
            <link rel="canonical" href="/about" />
            <meta name="description" 
                content="Waveast Installation & Park Services is a leading company based in Warsaw, Poland, specializing in a wide range of services for amusement items and water parks. Since our establishment in 2021, we have been dedicated to providing exceptional engineering, installation, maintenance, expansion, renovation, and consultancy services." />
        </Helmet>
        <div className="about">
            <PageHeader pageTitle="Who we are?" />
            <div className="about__company container">
                <p><span className="company-name">Waveast</span> Installation & Park Services is a leading company based in Warsaw, Poland, specializing in a wide range of services for amusement items and water parks. Since our establishment in 2021, we have been dedicated to providing exceptional engineering, installation, maintenance, expansion, renovation, and consultancy services.</p>
                <p>At <span className="company-name">Waveast</span>, we take pride in our ability to cater to diverse clients, including hotels, waterparks, and individuals. Our skilled team excels in constructing various types of swimming pools and decorative pools, offering comprehensive solutions that include circulation, filtration, and all mechanical and electrical systems.</p>
                <p>In addition to our exceptional services, <span className="company-name">Waveast</span> also provides a wide selection of high-quality composite materials and plastic raw materials that meet industry standards. We understand the importance of using reliable and durable materials in every project. Moreover, our team of professional and talented engineers and technicians is committed to fulfilling our customers&apos; requests with expertise and dedication.</p>
            </div>
            <div className="section__padding container">
                <SpecialHeadingTwo title="Why we?" />
                {reasons.map((reason) => (
                    <div className="reason__container" key={reason.id}>
                        <div className="reason__number">{reason.id}</div>
                        <div className="reason__content">
                            <h3 className="reason__subtitle">{reason.title}</h3>
                            <p className="reason__para">{reason.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="section__padding container">
                <SpecialHeadingTwo title="Our vision, mission and values" />
                <div className="statements">
                    <div className="statement">
                        <div className="statement__icon"><FaEye /></div>
                        <h3 className="statement__title">Vision</h3>
                        <p className="statement__content">
                            To become the most successful and recognised after-sales service company in the waterpark industry on a global scale.
                        </p>
                    </div>
                    <div className="statement">
                        <div className="statement__icon"><FaBullseye /></div>
                        <h3 className="statement__title">Mission</h3>
                        <p className="statement__content">
                        Waveast strives to meet its client&#39;s needs and safety with the greatest quality at reasonable rates, thanks to its highly qualified technical team.
                        </p>
                    </div>
                    <div className="statement">
                        <div className="statement__icon"><FaHandshake /></div>
                        <h3 className="statement__title">Values</h3>
                        <p className="statement__content">
                            Responsiblity<br/>
                            Professionalism<br/>
                            Reliability<br/>
                            Team work<br/>
                            Quality<br/>
                            Excellence<br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="section__padding container">
                <SpecialHeadingTwo title="Our people" />
                <div className="company__people">
                    <p><span className="company-name">Waveast</span> Installation & Park Services was founded by two engineers with over ten years of industry experience. Additionally, <span className="company-name">Waveast</span> has a global presence due to its dynamic technical team and strategic alliances with partners worldwide.</p>
                    <p>With a customer-focused after-sales team and competent designers and engineers, <span className="company-name">Waveast</span> strives to provide the best service possible to its clients.</p>
                </div>
            </div>
            <div className="section__padding container">
                <SpecialHeadingTwo title="Our partners" />
                <Partmemb items={partners} targetClick="partners" />
            </div>
            <div className="section__padding container section__margin-bottom">
                <SpecialHeadingTwo title="Our memberships" />
                <Partmemb items={memberships} targetClick="members" />
            </div>
        </div>
        </>
    )
}

export default About