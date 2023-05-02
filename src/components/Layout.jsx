import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (<>
    <div class="video-wrapper">
      <video className='videoTag' autoPlay loop muted>
        <source src="background.mp4" type='video/mp4' />
      </video>
    </div>
    <Outlet />
  </>
  )
}

export default Layout