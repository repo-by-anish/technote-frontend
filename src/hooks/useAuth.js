
import jwtDecode from "jwt-decode"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../features/auth/authSlice"
const useAuth = () => {
    const token = useSelector(selectCurrentToken)

    let isHod = false
    let isTeacher = false
    let status = "Student"

    if (token) {
        const decoded = jwtDecode(token)
        const { username, roles } = decoded.UserInfo

        isTeacher = roles.includes('Teacher')
        isHod = roles.includes('Hod')

        if (isTeacher) status = "Teacher"
        if (isHod) status = "Hod"

        return { username, roles, status, isTeacher, isHod }

    }

    return { username: '', roles: [], isTeacher, isHod, status }
}

export default useAuth