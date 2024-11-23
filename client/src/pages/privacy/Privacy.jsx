import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import PageHeader from "../../components/pageHeader/PageHeader"
import "./privacy.css"


function Privacy() {

    const {t} = useTranslation()

    const highlightText = (text) => {
    const regex = /--(.*?)--/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
        if (index % 2 !== 0) {
            return <span key={index} className="privacy__highlight">{part}</span>;
        }
        return part;
    });
    }

    return (

    <>
    <Helmet>
        <title>Privacy Policy - Waveast</title>
        <link rel="canonical" href="/contact" />
        <meta name="description" 
            content="Waveast Installation & Park Services is a company that provides engineering, installation, maintenance, expansion, renovation, and consultancy services for amusement items and water parks. It was created in 2021 in Warsaw, Poland." />
    </Helmet>
    <div className="privacy">
        <PageHeader pageTitle={t(`pageTitles.privacy`)} />
        <div className="container section__padding--top">
            <p className="privacy__update"><span>Last Updated:</span> October 31, 2024</p>
            <div className="privacy__text">
                <p>{highlightText("This Privacy Policy explains how --Waveast Sp. z o. o.-- collects, uses, and shares your information when you use our website --https://waveast.pl/--.")} </p>
                <p>By using our website, you agree to let us collect and use your information as described in this policy. We may change this Privacy Policy at any time without notifying you beforehand. We will post the updated policy on our website. The new policy will take effect 180 days after it is posted, and your continued use of the website means you accept the new policy. We recommend that you check this page regularly for updates.</p>
            </div>
        </div>
        <div className="privacy__text container privacy__padding--top">
            <h2 className="privacy__title">How We Collect Your Data?</h2>
            <p>We collect information about you when you use our website. This includes when you:</p>
            <ul className="privacy__list">
                <li>1- Contact us to ask about our services.</li>
                <li>2- Subscribe to our newsletter.</li>
                <li>3- Send us your CV or job application.</li>
            </ul>
            <p>{highlightText("In the --Contact-- section, you will be asked to fill out a simple form with your personal details. By clicking the --Send-- button, you agree that we can use your information to contact you via email or other methods.")}</p>
            <p>{highlightText("In the --Newsletter-- section, you can subscribe by providing your email address. By clicking the --Subscribe-- button, you agree that we can use your email to send you newsletters and other information.")}</p>
            <p>You have the right to access your information and can ask us to update or delete it by contacting us through the form on our contact page.</p>
        </div>
        <div className="privacy__text container privacy__padding--top">
            <h2 className="privacy__title">What Information We Collect?</h2>
            <p>The personal information we collect may include:</p>
            <ul className="privacy__list">
                <li>1- Your name.</li>
                <li>2- Your email address.</li>
                <li>3- Your country.</li>
                <li>4- Your IP address.</li>
                <li>5- Information about the pages you visit on our site.</li>
            </ul>
        </div>
        <div className="privacy__text container privacy__padding--top">
            <h2 className="privacy__title">How We Use Your Data?</h2>
            <p>We use your data to:</p>
            <ul className="privacy__list">
                <li>1- Respond to your inquiries about our services.</li>
                <li>2- Process your job application.</li>
                <li>3- Inform you about changes to our company.</li>
                <li>4- Send you newsletters if you’ve agreed to receive them.</li>
                <li>5- Communicate with you during negotiations.</li>
            </ul>
            <p>We will keep your information only as long as necessary for these activities.</p>
        </div>
        <div className="privacy__text container privacy__padding--top">
            <h2 className="privacy__title">Who Has Access to Your Data?</h2>
            <p>{highlightText("Your data will be stored securely by --Waveast Sp. z o.o.-- We will not sell or share your information with third parties. We take necessary steps to protect your data from loss, misuse, or changes.")}</p>
        </div>
        <div className="privacy__text container privacy__padding--top">
            <h2 className="privacy__title">How to Access, Update, or Delete Your Data?</h2>
            <p>{highlightText("If you want to access, update, or delete your information, you can email us at --we@waveast.pl-- or use our contact form at --https://waveast.pl/contact--")}</p>
            <p>We may need to verify your identity before we can process your request to update or delete your data.</p>
        </div>
    </div>
    </>
    )
}

export default Privacy
