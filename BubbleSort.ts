export function bubble_sort(payload: number[]): number[]{
    let unsorted_until_index: number = payload.length - 1;
    let sorted: boolean = false;
    while(!sorted){
        sorted = true;
        for(let i = 0; i < unsorted_until_index; i++){
            if(payload[i] > payload[i + 1]){
                let buf = payload[i];
                payload[i] = payload[i + 1];
                payload[i + 1] = buf;
                sorted = false;
            }
        }
        unsorted_until_index -= 1
    }

    return payload;
}

let number = [65,55,45,35,25,15,10];
console.log("payload send -> ", number);
let result = bubble_sort(number);
console.log("payload received -> ", result);


export default bubble_sort;