import { useState, useEffect, memo } from "react"
import { FaArrowUp } from "react-icons/fa"
import "./control.css"

const Control = memo(function Control() {

    const [isPageOnScroll, setIsPageOnScroll] = useState(false)

    useEffect(() => {
        function handlePageOnScroll() {
            window.scrollY > "700" ? setIsPageOnScroll(true) : setIsPageOnScroll(false)
        }
        window.addEventListener("scroll", handlePageOnScroll)
        return () => {
            window.removeEventListener("scroll", handlePageOnScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    
    return (
        <>
        {
            isPageOnScroll && 
            <button className="up-control" onClick={handleScrollToTop} >
                <span className="control__icon"><FaArrowUp /></span>
            </button>
        }
        </>
    )
})

export default Control