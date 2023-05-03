import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from './authApiSlice'
import { Link } from 'react-router-dom'
import { setCredentials } from './authSlice'
import usePersist from '../../hooks/usePersist'
import PulseLoader from "react-spinners/PulseLoader";
import useTitle from '../../hooks/useTitle'

const Login = () => {
  useTitle("Student login")
  const userRef = useRef()
  const errRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [persist, setPersist] = usePersist()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, password])


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { accessToken } = await login({ username, password }).unwrap()
      dispatch(setCredentials({ accessToken }))
      setUsername('')
      setPassword('')
      navigate("/dash")
    } catch (error) {
      if (!error.status) {
        setErrMsg("No Server Response");
      } else if (error.status === 400) {
        setErrMsg("Missing username or password");
      } else if (error.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(error?.data?.message);
      }
      errRef.current.focus();
    }
  }

  const handleUserInput = e => setUsername(e.target.value)
  const handlePwdInput = e => setPassword(e.target.value)
  const handleToggle = () => setPersist(prev => !prev)

  const errClass = errMsg ? "errmsg" : "offscreen"

  if (isLoading) {
    return <PulseLoader color={"FFF"} />
  }


  const content = (
    <>
        <header className='public__header'>
          <h1>Login</h1>
        </header>
      <section className='public'>
        <main className='login'>
          <p ref={errRef} className={errClass} aria-live='assertive'>{errMsg}</p>
          <form className='form' onSubmit={handleSubmit} >
            <label className='highlight' htmlFor="username">Username: </label>
            <input
              type="text"
              className='form__input'
              id='username'
              ref={userRef}
              value={username}
              onChange={handleUserInput}
              placeholder='Enter Username'
              autoComplete='off'
              required
            />
            <label className='highlight' htmlFor="password">Password: </label>
            <input
              type="password"
              className='form__input'
              id='password'
              onChange={handlePwdInput}
              value={password}
              placeholder='Enter Password'
              required
            />
            <button className='form__submit-button'>Sign In</button>
            <label htmlFor="persist" className='form__persist highlight'>Trust this device
              <input
                type="checkbox"
                id="persist"
                className='form__checkbox'
                onChange={handleToggle}
                checked={persist}
              />
            </label>
          </form>
        </main>
        <footer>
          <Link to='/'>Back to Home</Link>
        </footer>
      </section>
    </>
  )

  return content;
}

export default Login