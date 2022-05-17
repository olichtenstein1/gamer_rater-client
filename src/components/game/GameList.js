import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { getGames } from "./GameManager"

export const GameList = (props) => {
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])



    return (
        <article className="games">

            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>

            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title"><Link to={`/games/${game.id}`}>{game.title}</Link> Description: {game.description}</div>
                        <div className="game__players">{game.number_of_players} players needed.</div>
                        <div className="game__ageRecommendation">Recommended for ages {game.age_recommendation} and above.</div>
                        <div className="game__estimatedTime"> Expected play time: {game.estimated_time_to_play}!</div>
                        <button className="btn btn-2 btn-sep icon-create"
                        onClick={() => {
                            history.push({ pathname: `/games/edit/${game.id}` })
                        }}
                    // <Link to={`/games/${game.id}`}> Game </Link>
                    >Edit/Update Game</button>
                    </section>
                })
            }
        </article>
    )

}