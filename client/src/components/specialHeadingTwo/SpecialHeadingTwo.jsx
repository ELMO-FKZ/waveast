import { memo } from "react"
import PropTypes from "prop-types"
import "./specialHeadingTwo.css"


const SpecialHeadingTwo= memo(function SpecialHeadingTwo({ title }) {

    return (
        <div className="special-heading-two">
            <h2 className="special-title-two">{title}</h2>
        </div>
    )
})

export default SpecialHeadingTwo

SpecialHeadingTwo.propTypes = {
    title: PropTypes.string.isRequired
}