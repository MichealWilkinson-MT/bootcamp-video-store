const calculate_cost = (movie_type, days) => {
    if(movie_type == "NEW_RELEASE") {
        return 3.00
    }
    return 2.00
}

module.exports = {
    calculate_cost
}