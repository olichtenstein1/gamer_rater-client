// Function for getting all the games
export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

// Function for getting a single game
export const getSingleGame = (gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }
    )
    .then(response => response.json())
}

export const createGame = (game) => {
    const requestOptions = {
        method: 'POST' ,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(game) 
    }

    return fetch ("http://localhost:8000/games", requestOptions)
    .then(response => response.json())
}

export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers:{ 
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    }  
})
        .then((res) => res.json())
}

export const createReview = (review) => {
    const requestOptions = {
        method: 'POST' ,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(review) 
    }
// fix this fetch return
    return fetch (`http://localhost:8000/reviews`, requestOptions)
    .then(response => response.json())
}

export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const updateGame = (game, gameId) => {
    const requestOptions = {
        method: 'PUT' ,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(game) 
    }

    return fetch (`http://localhost:8000/games/${gameId}`, requestOptions)
    
}


export const createRating = (rating) => {
    const requestOptions = {
        method: 'POST' ,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(rating) 
    }
// fix this fetch return
    return fetch (`http://localhost:8000/ratings`, requestOptions)
    .then(response => response.json())
}



