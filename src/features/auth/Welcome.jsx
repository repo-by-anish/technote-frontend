import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";


const Welcome = () => {
    useTitle("dashboard")
    const date = new Date();
    const today = new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "long" }).format(date);

    const { username, isHod } = useAuth()
    const content = (
        <section className="welcome">
            <p className="time">{today}</p>
            <h1>Welcome {username}</h1>

            <p><Link to={"/dash/notes"}>View Issues</Link></p>
            <p><Link to={"/dash/notes/new"}>Add New Issue</Link></p>
            {(isHod) && <p><Link to={"/dash/users"}>View User Settings</Link></p>}
            {(isHod) && <p><Link to={"/dash/users/new"}>Add New User</Link></p>}
        </section>
    )

    return content
}

export default Welcome