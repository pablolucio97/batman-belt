//returns a value from a determined position in an arithmetic progression

function calcArithmeticProgression(sequence: number[], desiredPosition: number){
    const a1 = sequence.slice(0,1)
    const reason = Number(sequence.slice(1, 2)) -  Number(sequence.slice(0, 1))
    const result = Number(a1) + (desiredPosition - 1) * reason
    return result
}


