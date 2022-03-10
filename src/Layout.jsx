import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ClickCounter from './ClickCounter'

export default function Layout({ children}) {
    return (
        <div>
            <Header/>
            <ClickCounter/>
            <Footer now={new Date()}/>
        </div>
    )
}