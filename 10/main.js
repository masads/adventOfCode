const fs=require("fs");
const path=require("path");

const data=fs.readFileSync(path.join(__dirname,'input.txt'),'utf8').toString().trim().split("\n").flatMap((item)=>{
    const data=item.split("\r")[0].split(" ")
    
    if(data[0]=="noop")
    {
        return [{cmd:"noop"}]
    }else
    {
        return [{cmd:"noop"},{cmd:"addx",number:Number(data[1])}]
    }
});

let strengths=new Map();
let count=1;
for(let i=1;i<data.length;i++)
{
    const j=i-1;
    const {cmd,number}=data[j];
    strengths.set(i,i*count);
    if(cmd=="addx")
    {
        count+=number;
    }
}

const sum=strengths.get(20)+strengths.get(60)+strengths.get(100)+strengths.get(140)+strengths.get(180)+strengths.get(220);
console.log(sum)