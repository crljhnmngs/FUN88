import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'

export const Home = () => {

  return (
    <div className='h-maxHeight w-maxWidth font-poppins'>
        <Header></Header>
        <Hero></Hero>
        <Menu></Menu>
        <Footer></Footer>
    </div>
  )
}