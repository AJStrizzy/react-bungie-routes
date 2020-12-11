import { BrowserRouter, Route } from 'react-router-dom'

import Contact from './components/Contact'
import Home from './components/Home'
import Games from './components/Games'
import Nav from './components/Nav'
import GameDetails from './components/GameDetails'



import './App.css';

function App() {
  const gameList = [
    {
      name: 'Halo',
      id: 1,
      description: 'The OG'
    },
    {
      name: 'Halo 2',
      id: 2,
      description: 'Dual wielding? Yes please.'
    },
    {
      name: 'Halo 3',
      id: 3,
      description: 'Who got the samurai sword?'
    },
    {
      name: 'Halo 4',
      id: 4,
      description: 'Hologram teabag. '
    },
    {
      name: 'Halo 5',
      id: 5,
      description: 'Pretty damn polished'
    },
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path ='/contact' component={Contact} />
        <Route exact path ='/games'
        render={() => {return <Games gameList = {gameList} /> 
        }} />
        <Route path ='/games/:id'
        render={(routeInfo) => {
          const id = routeInfo.match.params.id
          const targetGame = gameList.find((p) => p.id === parseInt(id))
          return <GameDetails game={targetGame} />
        }} />
      </div>
    </BrowserRouter>  
  );
}

export default App;

     
