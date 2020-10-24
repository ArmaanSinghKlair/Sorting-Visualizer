export default function selectionSort(arr, animations){
    if(animations.current.length != 0)
        return;

        for(let i = 0; i < arr.length; i++) {
            //animations.current.push(new Array(...arr))

            let largest = i;
            for(let j = i; j < arr.length; j++){
                if(arr[j] > arr[largest]) {
                    largest=j; 
                }
                //animations.current.push(new Array(...arr))

             }
             if (largest != i) {
                 let tmp = arr[i]; 
                 arr[i] = arr[largest];
                 arr[largest] = tmp;      
            }
            animations.current.push(new Array(...arr))

        }
        animations.current.push(new Array(...arr))
        console.log(arr)


}

