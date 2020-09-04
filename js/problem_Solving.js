// bai1

// var n = parseInt(prompt('Nhap vao so n: '));
// var firstNum = parseInt(prompt('Nhao vao firstNum: '));
// function findOppositeNumber(n, firstNum){
//     if(n< firstNum && n%2!=0){
//         alert('Nhap lai dau vao !');
//     }else{
//     if(n/2 < firstNum){
//         return firstNum - n/2;
//     }
//     else{
//         return n/2 + firstNum ;
//     }
//     }
// }
// // findOppositeNumber(10, 2);
// console.log(findOppositeNumber(n, firstNum));


// bai2
let s1 = prompt('nhap chuoi s1');
let s2 = prompt('nhap s2');
function merge2String(a, b){
    var merge = "";
    a = Array.from(a);
    b = Array.from(b);
    while(a.length > 0 || b.length > 0){
        if(a.length > 0)
          merge += a.splice(0,1);
        if(b.length > 0)
          merge += b.splice(0,1);
      }
      return merge;
}

console.log(merge2String(s1, s2));

