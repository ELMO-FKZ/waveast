import { useRef, useEffect, memo } from "react"
import PropTypes from "prop-types"
import "./partmemb.css"

const currentYear = new Date().getFullYear().toString()

const Partmemb = memo(function Partmemb({items}) {

    const scrollersRef = useRef([]);

    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, []);

    const addAnimation = () => {
        scrollersRef.current.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    };



    return (
        <div className="scroller" data-direction="left" data-speed="slow" ref={el => scrollersRef.current.push(el)}>
            <div className="scroller__inner">
                {items.map((item) => (
                    <div key={item.id}  className={`partmemb-item partmemb-item--${item?.category}`} >
                        <img className="partmemb-img" src={item.src} alt={item.altKey} />
                        {item.altKey === "iaapaAlt" ? <span className="partmemb-img-span">{currentYear}</span> : ""}
                    </div>
                ))}
            </div>
        </div>
    )
})

Partmemb.propTypes = {
    items: PropTypes.array,
    targetClick: PropTypes.string
}

export default Partmemb