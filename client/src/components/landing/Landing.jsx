import { useState, useEffect, memo } from "react"
import { BiChevronDown } from "react-icons/bi"
import imageOne from "../../assets/slideOne.webp"
import imageTwo from "../../assets/slideTwo.webp"
import imageThree from "../../assets/slideThree.webp"
import imageFour from "../../assets/slideFour.webp"
import imageFive from "../../assets/slideFive.webp"
import Slide from "../../assets/Slide.webm"

import "./landing.css"

const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive
]

const interval = 3000

const Landing = memo(function Landing() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [nextImageIndex, setNextImageIndex] = useState(1)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNextImageIndex((currentImageIndex + 1) % images.length)
            setTimeout(() => {
                setCurrentImageIndex((currentImageIndex + 1) % images.length)
            }, 1000)
        }, interval)

        return () => clearInterval(intervalId)
    }, [currentImageIndex])

    return (
        
        <main className="main">
            <div className="main__background">
                <video autoPlay loop muted className="background-video">
                <source src={Slide} type="video/webm" />
                Your browser does not support the video tag.
        </video>
            </div>
            {/* <div 
                className="main__background current"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`
                }}
            />
            <div 
                className="main__background next"
                style={{
                    backgroundImage: `url(${images[nextImageIndex]})`
                }}
            /> */}
            <div className="main__scroll-down">
                <div className="main__chevron-text">Scroll Down</div>
                <div className="main__chevron-icon"><BiChevronDown /></div>
                {/* <div className="main__chevron"></div>
                <div className="main__chevron"></div>
                <div className="main__chevron"></div> */}
            </div>
            <svg className="main__waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="0 24 150 28" >
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" ></path>
                </defs>
                <g className="main__parallax">
                    <use x="48" fill="var(--wave-one-color)" xlinkHref="#gentle-wave"></use>
                    <use x="48" y="3" fill="var(--wave-two-color)" xlinkHref="#gentle-wave"></use>
                    <use x="48" y="5" fill="var(--wave-three-color)" xlinkHref="#gentle-wave"></use>
                    <use x="48" y="7" fill="var(--wave-four-color)" xlinkHref="#gentle-wave"></use>
                </g>
            </svg>
        </main>
    )
})

export default Landing