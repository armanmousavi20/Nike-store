import React from 'react'
import {
  Cart,
  FlexContent,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
} from './components'
import {
  heroapi,
  topratedsales,
  popularsales,
  highlight,
  sneaker,
  story,
  footerAPI,
} from './data/data'

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales {...popularsales} ifExists />
        <FlexContent {...highlight} ifExists />
        <Sales {...topratedsales} />
        <FlexContent {...sneaker} />
        <Stories {...story} />
      </main>
      <Footer {...footerAPI} />
    </>
  )
}

export default App
