import PropTypes from "prop-types"
import "./pageHeader.css"

function PageHeader({pageTitle}) {
    return (
        <div className="page-header">
            <h1>{pageTitle}</h1>
        </div>
    )
}

PageHeader.propTypes = {
    pageTitle: PropTypes.string
}

export default PageHeader

