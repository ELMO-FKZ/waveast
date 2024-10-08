import { useState, useEffect } from "react"
import { images, interval } from "../../data/slides"
import mainLogo from "../../assets/logoNavOne.webp"
import "./landing.css"

function Landing() {

    const [backgroundImages] = useState(images)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
    const intervalFunct = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, interval);

    return () => clearInterval(intervalFunct);
    }, [backgroundImages])

    return (
        <main className="main" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }} >
            <div className="main__content container">
                <h1 className="main__image" aria-label="Waveast Installation & Park Services">
                    <img className="main__img" src={mainLogo} alt="logo in the main page" />
                </h1>
                <p className="main__para">
                    Riding the Waves of Exceptional Installations and Water Park Services
                </p>
            </div>
            <svg className="main__waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="0 24 150 28" >
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" ></path>
                </defs>
                <g className="main__parallax">
                    <use x="48" fill="rgba(255,255,255,0.7)" xlinkHref="#gentle-wave"></use>
                    <use x="48" y="3" fill="rgba(255,255,255,0.5)" xlinkHref="#gentle-wave"></use>
                    <use x="48" y="5" fill="rgba(255,255,255,0.3)" xlinkHref="#gentle-wave"></use>
                    <use x="48" y="7" fill="#fff" xlinkHref="#gentle-wave"></use>
                </g>
            </svg>
        </main>
    )
}

export default Landing