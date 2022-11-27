export function binary_search(payload: number[], search_value: number): number{
    let start = 0;
    let end = payload.length - 1;
    while(start <= end){
        let middle = Math.round((end + start) / 2);
        let value_found = payload[middle];
        if(search_value === value_found){
            return middle;
        }
        if( search_value < value_found){
            end = middle - 1;
        }
        if(search_value > value_found){
            start = middle + 1;
        }
    }
    return -1;
}
export default binary_search;