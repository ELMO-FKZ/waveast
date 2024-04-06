import { useState, useRef } from "react"
import { validateEmail } from "../../utlis/validateEmail"
import SpecialHeading from "../specialHeading/SpecialHeading"
import "./newsLetter.css"

function NewsLetter() {

    const [input, setInput] = useState("")
    const [errors, setErrors] = useState("")
    const refEmail = useRef()

    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        validateEmail(value, refEmail, setErrors)
        setInput(value)
    }

    return (
        <div className="newsletter">
            <div className="container">
                <SpecialHeading title="Newsletter" subtitle="Be the first one to know" />
                <form className="newsletter__form" method="">
                    <div className="newsletter__div" >
                        <input className="newsletter__input" 
                            id="email"
                            ref={refEmail}
                            value={input}
                            onChange={handleChange}
                            autoComplete="on"
                            type="email"  
                            placeholder="Enter your email"
                            required />
                        <button className="newsletter__btn" type="submit" id="submit" value="submit" name="Submit">Subscribe</button>
                        {errors && <div className="newsletter__form-error">{errors}</div>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewsLetter