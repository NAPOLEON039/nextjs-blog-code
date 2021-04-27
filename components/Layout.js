import React from 'react'

const Layout = ({children}) => {
    return (
        <div>
            <h1>This is a header</h1>
            {children}
        </div>
    )
}

export default Layout
