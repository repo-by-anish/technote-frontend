import { Link } from "react-router-dom"
import Counter from "./Counter"


const KnowMore = () => {
    return (
        <section>
            <header className="public__header">
                <Link className="highlight" to="/">Home</Link>
            </header>
            <p className="welc about">Welcome to our school! <span className="highlight">We are excited to introduce you to all the amazing things our school has to offer.</span></p>
            <ul className="about">
                <li>At our school, we are dedicated to providing a high-quality education that prepares our students for success in college, career, and life. We offer a wide range of academic programs, extracurricular activities, and support services to meet the diverse needs and interests of our students.</li>
                <li>Our faculty and staff are passionate about education and are committed to creating a safe, supportive, and inclusive learning environment for all students. We have a team of experienced and dedicated educators who use a variety of teaching methods and technologies to ensure that each student receives a personalized education that meets their unique needs.</li>
                <li>Our campus is equipped with modern facilities and technology that enhance the learning experience. We have spacious classrooms, fully-equipped science and computer labs, a library, an auditorium, and a gymnasium. Our campus is also accessible to students with disabilities.</li>
                <li>We believe that education is not only about academics, but also about personal growth and development. That's why we offer a wide range of extracurricular activities that allow students to explore their interests, develop new skills, and make lasting friendships. We have clubs for music, arts, sports, robotics, and much more.</li>
                <li>At our school, we prioritize student safety and well-being. We have implemented strict security measures, including surveillance cameras, ID badges, and visitor check-in procedures, to ensure that our students are safe at all times.</li>
                <li>We invite you to learn more about our school and all the amazing opportunities we have to offer. Contact us today to schedule a tour or to speak with one of our admissions representatives. We look forward to welcoming you to our community!</li>

            </ul>
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
                    A. Info Repairs<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
            </footer>
        </section>
    )
}

export default KnowMore