import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const DASH_REGEX = /^\/dash(\/)?$/
const NOTE_REGEX = /^\/dash\/notes(\/)?$/
const USER_REGEX = /^\/dash\/users(\/)?$/

const DashHeader = () => {

  const navigate = useNavigate()

  const { pathname } = useLocation()

  const { isHod, isTeacher } = useAuth();

  const [sendLogout, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useSendLogoutMutation()

  useEffect(() => {
    if (isSuccess) {
      navigate("/")
    }
  }, [isSuccess, navigate])

  const onNewNoteClicked = () => navigate("/dash/notes/new")
  const onNewUserClicked = () => navigate("/dash/users/new")
  const onNotesClicked = () => navigate("/dash/notes")
  const onUsersClicked = () => navigate("/dash/users")

  let dashClass = null

  if (!DASH_REGEX.test(pathname) && !NOTE_REGEX.test(pathname) && !USER_REGEX.test(pathname)) {
    dashClass = "dash-header__container--small"
  }

  let newNoteButton = null
  if (NOTE_REGEX.test(pathname)) {
    newNoteButton = (
      <button
        className="nav-button"
        title="New Note"
        onClick={onNewNoteClicked}
      >
        New note
      </button>
    )
  }

  let newUserButton = null
  if (USER_REGEX.test(pathname)) {
    newUserButton = (
      <button
        className="nav-button"
        title="New User"
        onClick={onNewUserClicked}
      >
        New user
      </button>
    )
  }

  let usersButton = null

  if (isTeacher || isHod) {
    if (!USER_REGEX.test(pathname) && pathname.includes('/dash')) {
      usersButton = (
        <button
          className="nav-button"
          title="Users"
          onClick={onUsersClicked}
        >
          View users
        </button>
      )
    }
  }

  let notesButton = null

  if (!NOTE_REGEX.test(pathname) && pathname.includes("/dash")) {
    notesButton = (
      <button
        className="nav-button"
        title="Notes"
        onClick={onNotesClicked}
      >
        View Notes
      </button>
    )
  }

  const logoutButton = (
    <button
      className="nav-button"
      title="Logout"
      onClick={() => sendLogout()}
    >
      Logout
    </button>
  )
  const errClass = isError ? "errmsg" : "offscreen"
let buttonContent
  if(isLoading){
    buttonContent= <p>Logging out...</p>
  }else{
    buttonContent=(
      <>
        {newNoteButton}
        {newUserButton}
        {notesButton}
        {usersButton}
        {logoutButton}
      </>
    )
  }

  const content = (
    <>
    <p className={errClass}>{error?.data?.message}</p>
      <header className="dash-header">
        <div className={`dash-header__container ${dashClass}`}>
          <Link to={"/dash"}>
            <h1 className="dash-header__title">
              NPS
            </h1>
          </Link>
          <nav className="dash-header__nav">
            {buttonContent}
          </nav>
        </div>
      </header>
    </>
  )

  return content
}

export default DashHeader