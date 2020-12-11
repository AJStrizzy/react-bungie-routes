function GameDetails(props) {
    return (
        <div>
            <h1>{props.game.name}</h1>
            <p>{props.game.description}</p>
        </div>
    )
}

export default GameDetails