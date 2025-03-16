const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

const m = 3;
const n = 3
const startTime = performance.now() 
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i : number = m - 1;
    let j : number = n - 1;
    let k : number = (m+n) - 1;
    for( ; k >= 0 ; k-- ){
        if  (j < 0)  break;
        if ( i >= 0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }else {
            nums1[k] = nums2[j];
            j--;
        }
    }
};
const endTime = performance.now()
console.log(`Time Taken : ${endTime - startTime}`);
merge(nums1, m, nums2, n);
console.log(nums1);