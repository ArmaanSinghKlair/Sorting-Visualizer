export default function bubbleSort(arr, animations){
 if(animations.current.length != 0)
        return;

    for(let i = 0; i < arr.length; i++) {
        animations.current.push(new Array(...arr))

        for(let j = 0; j < arr.length-i; j++){
            if(arr[j+1] > arr[j]) {
                let tmp = arr[j]; 
                arr[j] = arr[j+1];
                arr[j+1] = tmp; 
            }

         }
         animations.current.push(new Array(...arr))


    }
    animations.current.push(new Array(...arr))


}

