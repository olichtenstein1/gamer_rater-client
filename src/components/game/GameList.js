import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getGames } from "./GameManager"

export const GameList = (props) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])



    return (
        <article className="games">
           

            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title"><Link to={`/games/${game.id}`}>{game.title}</Link> Description: {game.description}</div>
                        <div className="game__players">{game.number_of_players} players needed.</div>
                        <div className="game__ageRecommendation">Recommended for ages {game.age_recommendation} and above.</div>
                        <div className="game__estimatedTime"> Expected to be playable on {game.estimated_time_to_play}!</div>
                    </section>
                })
            }
        </article>
    )

}