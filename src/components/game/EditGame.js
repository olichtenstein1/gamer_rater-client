import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getCategories, updateGame } from "./GameManager"


 

// // function for updating/editing a game instance
export const EditGame = () => {
    const [game, assignGame] = useState({})
    const [categories, setCategories] = useState([])
    const { gameId } = useParams()
    const history = useHistory()


    useEffect(
        () => {
            return fetch(`http://localhost:8000/games/${gameId}`, {
                headers:{
                    "Authorization": `Token ${localStorage.getItem("lu_token")}`
                }}
            )
            .then(response => response.json())
            .then((data => {
                assignGame(data)
            }))
        },
        [ gameId ]
    )

    useEffect(() => { getCategories()
        .then((data => { 
            setCategories(data)})) 
        

    }, [])

    const changeGameState = (domEvent) => {
        // TODO: Complete the onChange function
        const newGame = {...game}
        newGame[domEvent.target.name] = domEvent.target.value
        assignGame(newGame)
    }

return(
    <form className= "gameform">
        <h2 className="gameForm__title">Edit Current Game</h2>

        <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={game.title}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={game.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={game.designer}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="year_released">Year Released: </label>
                    <input type="date" name="year_released" required autoFocus className="form-control"
                        value={game.year_released}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="number_of_players">Number of players: </label>
                    <input type="number" name="number_of_players" required autoFocus className="form-control"
                        value={game.number_of_players}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimated_time_to_play">Estimated time to play: </label>
                    <input type="text" name="estimated_time_to_play" required autoFocus className="form-control"
                        value={game.estimated_time_to_play}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="age_recommendation">Age Recommendation: </label>
                    <input type="number" name="age_recommendation" required autoFocus className="form-control"
                        value={game.age_recommendation}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            {/* <fieldset>
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
                </fieldset> */}

                <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const newGame = {
                        designer: game.designer,
                        description: game.description,
                        year_released: game.year_released,
                        title: game.title,
                        number_of_players: parseInt(game.number_of_players),
                        age_recommendation: parseInt(game.age_recommendation),
                        estimated_time_to_play: game.estimated_time_to_play,
                        // categories: game.categories
                    }

                    // Send POST request to your API
                    updateGame(newGame, gameId)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Update</button>

    </form>
    
)

}