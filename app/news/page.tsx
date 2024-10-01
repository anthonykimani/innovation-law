import Footer from '@/components/landing/Footer'
import Navbar from '@/components/landing/Navbar'
import News from '@/components/landing/News'
import React from 'react'

const NewsPage = () => {
  return (
    <section>
        <Navbar />
        <News />
        <Footer />
    </section>
  )
}

export default NewsPage