const fs=require("fs");
const path=require("path");

let elf=[0];
let count=0;
let answer=0;
const data=fs.readFileSync(path.join(__dirname,'input.txt'),'utf8').toString().trim().split("\n").flatMap((item)=>{
    const [data]=item.split('\r');
    if(data=='')
    {

        count++;
        elf.push(0)
    }else
    {
        elf[count]+=Number(data);
    }
});
count=0;
const reverseElfCalories=elf.sort((a,b)=>a-b).reverse()
for(let i=0;i<3;i++)
{
    answer+=reverseElfCalories[i];
}
console.log(answer)
