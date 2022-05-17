import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { createReview } from "./GameManager"


export const ReviewForm = () => {
    const history = useHistory()
    const { gameId } = useParams()
    const [currentReview, setReview] = useState({
        description: "",
        game: gameId
    })

    

    const changeReviewState = (domEvent) => {
        // TODO: Complete the onChange function
        const newReview = {...currentReview}
        newReview[domEvent.target.name] = domEvent.target.value
        setReview(newReview)
    }



    return (
        <>
        <form className="gameReview">
            <h2 className="gameReview__title">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Review: </label>
                        <input type="text" name="description" required autoFocus className="form-control"
                            value={currentReview.description}
                            onChange={changeReviewState}
                        />
                    </div>
                </fieldset>
                <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const review = {
                        description: currentReview.description,
                        game: currentReview.game
                    }

                    // Send POST request to your API
                    createReview(review)
                        .then(() => history.push(`/games/${gameId}`))
                }}
                className="btn btn-primary">Save</button>
            </h2>
        </form>
        </>
    )
}
