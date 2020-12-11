import { Link } from 'react-router-dom'

function Games(props) {
    const gameItems = props.gameList.map((p) => {
        return <li><Link to={`/games/${p.id}`}>{p.name}</Link></li>
    })
    return (
       <> 
        <div>
            This is the Games page
        </div>
        <ul>
            {gameItems}
        </ul>
       </> 
    )
}

export default Games