import PropTypes from "prop-types"
import "./pageHeader.css"

function PageHeader({pageTitle}) {
    return (
        <div className="page-header">
            <h1 className="page-header__heading">{pageTitle}</h1>
            <svg className="waves__static" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="0 24 150 28" >
                <defs>
                    <path id="gentle-wave__static" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" ></path>
                </defs>
                <g className="parallax__static">
                    <use x="48" fill="rgba(255,255,255,0.7)" xlinkHref="#gentle-wave__static"></use>
                    <use x="48" y="3" fill="rgba(255,255,255,0.5)" xlinkHref="#gentle-wave__static"></use>
                    <use x="48" y="5" fill="rgba(255,255,255,0.3)" xlinkHref="#gentle-wave__static"></use>
                    <use x="48" y="7" fill="#fff" xlinkHref="#gentle-wave__static"></use>
                </g>
            </svg>
        </div>
    )
}

PageHeader.propTypes = {
    pageTitle: PropTypes.string
}

export default PageHeader

