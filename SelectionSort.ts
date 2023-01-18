export const selectionSort = (payload: number[]):number[] => {
    for(let i = 0; i < payload.length -1; i++){
        let lowestNumberFoundIndex = i;
        for(let j = i + 1; j < payload.length ; j++){
            if(payload[j] < payload[lowestNumberFoundIndex]){
                lowestNumberFoundIndex = j;
            }
        }
        if(lowestNumberFoundIndex !== i){
            let temporal = payload[i];
            payload[i] = payload[lowestNumberFoundIndex];
            payload[lowestNumberFoundIndex] = temporal;
        }
    }
    return payload;
}

export default selectionSort;