export default function mergeSort(arr, l, r, animations){
    if(l==0 && r== arr.length-1 && animations.current.length != 0){
        return;
    }
    if( l< r){
        let mid = Math.floor((r-l)/2) +l
        mergeSort(arr, l, mid, animations)
        mergeSort(arr, mid+1, r, animations)

        merge(arr, l, mid, r, arr.slice(l, r+1), animations)

    }

}

function merge(arr, l, mid, r, sliced, animations){
    //animations.current.push(new Array(...arr))

    let i=0
    let k=0
    let j=mid-l+1
    while(i <= mid-l && j <= r-l){
        //animations.current.push(new Array(...arr))

        if( sliced[i] > sliced[j]){
            arr[l+k++] = sliced[i++]
            //animations.current.push(new Array(...arr))

          
        } else{
            arr[l+k++] = sliced[j++]
           // animations.current.push(new Array(...arr))

          
        }
        //animations.current.push(new Array(...arr))

    }

   // animations.current.push(new Array(...arr))

    while(i<=mid-l) arr[l+k++]= sliced[i++]
    while(j<=r-l) arr[l+k++]= sliced[j++]
    animations.current.push(new Array(...arr))


}