var i=0;
var sum = 0;
/*  //this is the learnyounode
for(i=2;i<process.argv.length;i++) {
    sum += (+process.argv[i]);
}
console.log(sum);
*/
console.log(process.argv.length);
for(i=0;i<process.argv.length;i++) {
    console.log(i+" "+process.argv[i]);
}
