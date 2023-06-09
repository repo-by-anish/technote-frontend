import { Link } from "react-router-dom"
import useTitle from "../hooks/useTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import Counter from "./Counter"



const Public = () => {
    useTitle("welcome")

    const content = (
        <>
                <header className="public__header">
                    <h1>NPS</h1>
                    <Link className="highlight"  to="/login">Login</Link>
                </header>
            <section className="public">
                <main className="public__main">
                    <div className="public--main__left">
                        <p className="welc">Welcome to <span className="highlight"> Nodel Public School. A next generation education system.</span></p>
                        <h3 className="gen__content">Always choose <span className="highlight">One</span> but <span className="highlight">Best</span> option!</h3>
                        <p className="gen__content-detail">At our school, we are dedicated to providing a high-quality education that prepares our students for success in college, career, and life. We offer a wide range of academic programs, extracurricular activities, and support services to meet the diverse needs and interests of our students.</p>
                        <div className="public__button">
                            <Link to="/about" className="arrow__link">Know more <FontAwesomeIcon icon={faArrowCircleRight} /> </Link>
                        </div>

                    </div>
                    <div className="public--main__right">
                        <img src="studyHome.png" alt="studyHome.png" />
                    </div>

                </main>
            </section >
            <footer className="public__footer">
                <div className="p-footer__left">
                    <div>
                        <p>Total Students</p>
                        <Counter endCount={1126} />+
                    </div>
                    <div>
                        <p>Total Teachers</p>
                        <Counter endCount={500} />+
                    </div>
                </div>
                <hr />

                <address className="public__addr">
                    NPS Burdwan<br />
                    555 Golapbag <br />
                    Burdwan City, West Bengal 713104<br />
                    <a href="tel:+91555555555">(91) 55555-55555</a>
                </address>
            </footer>
        </>

    )
    return content
}

export default Public