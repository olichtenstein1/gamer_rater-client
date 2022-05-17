import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { createRating, getSingleGame } from "./GameManager"

export const GameDetails = (props) => {
    const { gameId } = useParams()
    const [game, setGame] = useState({ categories: [], reviews: [], ratings: [] })
    const history = useHistory()


    useEffect(
        () => {
            getSingleGame(gameId)
                .then((data => {
                    setGame(data)
                }))
        },
        []
    )

    const changeGameState = (domEvent) => {
        // TODO: Complete the onChange function
        const newGame = { ...game }
        newGame[domEvent.target.name] = domEvent.target.value
        setGame(newGame)
    }


        return (
            <>
                <h2> Game Details </h2>

                <section className="gameDetails">
                    <h3 className="game__title">{game.title}</h3>
                    <div className="game__description">Game Description - {game.description} </div>
                    <div className="game__designer">Designed by - {game.designer} </div>
                    <div className="game__yearReleased"> Released on {game.year_released} and Playable on {game.estimated_time_to_play}</div>
                    <div className="game__numberOfPPlayers"> Recommended number of players - {game.number_of_players} </div>
                    <h4 className="game__ageRecommendation">Recommended for Ages {game.age_recommendation} and up! </h4>
                    <div className="game__categories"> Categories: {game.categories.map(
                        category => <p>{category.label}</p>
                    )}</div>

                    <button className="btn btn-2 btn-sep icon-create"
                        onClick={() => {
                            history.push({ pathname: `/games/${game.id}/review` })
                        }}
                    >Review Game</button>
                    <div className="game__reviews"> Reviews: {game.reviews.map(
                        review => <p>{review.description}</p>
                    )}</div>

                    
                        <div className="game_rating">
                            <label htmlFor="game_rating">Game Rating: </label>
                            <input type="number" min="1" max="10" name="rating" required autoFocus className="form-control"
                                value={game.rating}
                                onChange={
                                    evt => {
                                        evt.preventDefault()
                                        const newRating = {
                                            rating: game.rating,
                                            game: gameId
                                        }
                                        createRating(newRating)
                                        .then(() => getSingleGame(gameId)
                                        .then((data) => {
                                            setGame(data)
                                        }))
                                    }
                                }
                            />
                        </div>

                </section>
            </>
        )

                    }
                    