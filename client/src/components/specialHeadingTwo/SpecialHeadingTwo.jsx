import { memo } from "react"
import PropTypes from "prop-types"
import "./specialHeadingTwo.css"


const SpecialHeadingTwo= memo(function SpecialHeadingTwo({ title }) {

    return (
        <div className="special-heading-two">
            <h2 className="special-title-two">
                <span className="special-span-two">
                    {title.charAt(0)}
                    {/* <svg className="special-span-svg" width={68} height={67} viewBox="0 0 68 67" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path id="path62" fill="var(--mint-cream)" stroke="var(--warm-orange)" strokeWidth={2.33333} strokeMiterlimit={10} d="M33.6493 1L22.832 7.62534L10.4693 10.6507L7.572 22.8747L1 33.6307L7.72133 44.296L10.788 56.4787L23.1893 59.3373L34.1027 65.8147L44.92 59.1893L57.2827 56.164L60.1813 43.94L66.752 33.1853L60.0307 22.5213L56.964 10.3347L44.56 7.47733L33.6493 1Z" />
                    </svg> */}
                </span>
                {title.slice(1)}
            </h2>
        </div>
    )
})

export default SpecialHeadingTwo

SpecialHeadingTwo.propTypes = {
    title: PropTypes.string.isRequired
}