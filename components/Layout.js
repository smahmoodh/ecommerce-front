import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Center from './Center'

const Layout = ({children}) => {
  return (
      <div>
          <Header />
          <Center>
              {children}
          </Center>
          <Footer />
    </div>
  )
}

export default Layout