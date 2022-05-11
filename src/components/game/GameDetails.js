import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleGame } from "./GameManager"

export const GameDetails = (props) => {
    const { gameId } = useParams()
    const [game, setGame] = useState({})

    
    useEffect(
        () => {
             getSingleGame(gameId)
            .then((data => {
                setGame(data)
            }))
        },
        []
    )


    return (
        <>
        <h2> Game Details </h2>
        
        <section className="gameDetails">
        <h3 className="game__title">{ game.title }</h3>
        <div className="game__description">Game Description - {game.description} </div>
        <div className="game__designer">Designed by - {game.designer} </div>
        <div className="game__yearReleased"> Released on {game.year_released} and Playable on {game.estimated_time_to_play}</div> 
        <div className="game__numberOfPPlayers"> Recommended number of players - {game.number_of_players} </div>
        <h4 className="game__ageRecommendation">Recommended for Ages { game.age_recommendation } and up! </h4>
        
        </section>
    </>
    )


}