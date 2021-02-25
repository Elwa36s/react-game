const cleanField = Array(16).fill(0),
      initialState = {
        tiles : cleanField,
        score : {
        currentScore : 0,
        bestScore : 0,
        moves : 0
        },
    };
export default initialState;