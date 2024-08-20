import React from 'react'
import HOC from '../Hgher Order Component/HOC'
import './movies.css'
import MainPage from '../Main page/MainPage'

function Movies() {
  return (
    <div style={{paddingBottom: 30, backgroundColor: 'black'}}>
      <HOC
        className="mainPage3"
        title="Movies"
        rating="U/A 7+"
        name="Hi Nanna"
        content="A 6-year-old with cystic fibrosis recruits the help of an enigmatic new friend to convince her single dad to tell her about her mother. Find out how the events turn out to be a romantic movie and the love between the father and his daughter"
      />
      <MainPage
        heading1="Today's Top Pick For You"
        heading2="Hollywood Movies"
      />
    </div>
  )
}

export default Movies