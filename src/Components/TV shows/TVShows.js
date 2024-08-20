import React from 'react'
import HOC from '../Hgher Order Component/HOC'
import MainPage from '../Main page/MainPage'

function TVShows() {
  return (
    <div style={{paddingBottom: 30, backgroundColor: 'black'}}>
      <HOC
        className="mainPage2"
        title="TV Shows"
        rating="U/A 16+"
        name="Vincenzo"
        content="During a visit to his motherland, a Korean-Italian mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice. Watch all you want. Song Joong-ki ('Descendants of the Sun') delivers cathartic moments as this dramedy's leading anti-hero."
      />
      <MainPage
        heading1="US TV Shows"
        heading2="We think You'll Love These"
      />
    </div>

  )
}

export default TVShows