const find3Numbers = (arr, nums_length, sum) => {
    arr.sort((a, b) => a - b);
    let i = 0;
    while (i < nums_length - 2) {
        let j = i + 1;
        let k = nums_length - 1;//[1, 4, 45, 6, 10, 8] k=5,j=1,i=0
        while (j < k) {
            curr_sum = arr[i] + arr[j] + arr[k];
            if (curr_sum < sum) {
                j++;
                while (j < k && arr[j] == arr[j - 1]) {
                    j++;
                }
            } else if (curr_sum > sum) {
                k--;
                while (j < k && arr[k] == arr[k + 1]) {
                    k--;
                }
            } else {
                return [arr[i], arr[j], arr[k]];
            }
        }
        i++;
        while (i < nums_length - 2 && arr[i] == arr[i - 1]) {
            i++;
        }
    }
    return false;
}


const A = [1, 4, 45, 6, 10, 8];
const x = A.length;
const sum = 18;
console.log(find3Numbers(A, x, sum));