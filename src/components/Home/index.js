import React from 'react'
import './../../assets/css/home.css'
import Hero from './Hero'
import Services from './Services'
import CallToAction from './CallToAction'
import Branches from './Branches'

const index = () => {
    return (
        <main className="min-h-100">
            <Hero />
            <Services />
            <CallToAction />
            <Branches />
        </main>
    )
}

export default index
