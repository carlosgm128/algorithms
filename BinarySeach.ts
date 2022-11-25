export function bSearch(payload: number[], key: number): number{
    let start = 0;
    let end = payload.length - 1;
    let middle;
    let index = -1;
    let steps = 1
    for(let i = 0; i < payload.length; i++){
        middle = Math.round(((end + start) / 2));
        let value_found = payload[middle];
        if(value_found === key){
            index = i;
            console.log("number of Steps >>>", steps)
            break;
        }
        if(value_found > key){
            start = middle + 1;
        }
        if(value_found < key){
            end = middle - 1;
        }
        steps++;
    }
    return index;
}

export default bSearch;