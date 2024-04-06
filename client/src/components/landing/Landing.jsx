import { useState, useEffect } from "react"
import { images, interval } from "../../data/slides"
import mainLogo from "../../assets/logoNavOne.webp"
import Waves from "../waves/Waves"
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
                    {/* We provide engineering, installation, maintenance, expansion, renovation, and consultancy services for amusement items and water parks. */}
                    Riding the Waves of Exceptional Installations and Water Park Services
                </p>
            </div>
            <Waves />
        </main>
    )
}

export default Landing