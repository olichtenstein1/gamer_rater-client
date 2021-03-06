import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { createGame, getCategories } from "./GameManager"

export const GameForm = () => {
    
    const [currentGame, setGame] = useState({
        title: "",
        description: "",
        designer: "",
        year_released: "",
        number_of_players: 0,
        estimated_time_to_play: "",
        age_recommendation: 0,
        categories: []
    })

    const [categories, setCategories] = useState([])

    const history = useHistory()
    
    const changeGameState = (domEvent) => {
        // TODO: Complete the onChange function
        const newGame = {...currentGame}
        if (domEvent.target.name === "categories"){
            newGame.categories.push(parseInt(domEvent.target.id))
        } else 
        newGame[domEvent.target.name] = domEvent.target.value
        setGame(newGame)

    }

    useEffect(() => { getCategories()
        .then((data => { 
            setCategories(data)})) 
        

    }, [])


    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="year_released">Year Released: </label>
                    <input type="date" name="year_released" required autoFocus className="form-control"
                        value={currentGame.year_released}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="number_of_players">Number of players: </label>
                    <input type="number" name="number_of_players" required autoFocus className="form-control"
                        value={currentGame.number_of_players}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimated_time_to_play">Estimated time to play: </label>
                    <input type="text" name="estimated_time_to_play" required autoFocus className="form-control"
                        value={currentGame.estimated_time_to_play}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="age_recommendation">Age Recommendation: </label>
                    <input type="number" name="age_recommendation" required autoFocus className="form-control"
                        value={currentGame.age_recommendation}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>

                        {categories.map(
                            category => {
                                return <> <label>
                                    {
                                        category.label
                                    }
                                </label>
                                <input type="checkbox" id= {category.id} name="categories" required autoFocus className="form-control"
                                
                                onChange={changeGameState}
                                /> </>
                                
                            }
                        )}
                        
                    </div>
                </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        designer: currentGame.designer,
                        description: currentGame.description,
                        year_released: currentGame.year_released,
                        title: currentGame.title,
                        number_of_players: parseInt(currentGame.number_of_players),
                        age_recommendation: parseInt(currentGame.age_recommendation),
                        estimated_time_to_play: currentGame.estimated_time_to_play,
                        categories: currentGame.categories
                    }

                    // Send POST request to your API
                    createGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )

}