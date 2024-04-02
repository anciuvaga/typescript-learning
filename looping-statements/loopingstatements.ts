var i:number=1;

while(i<=10) 
{
console.log(i);
i++;
}


var i:number=1;

do
{

console.log(i);
i++;
}while(i<10);


for(var i:number=1;i<=10;i++){
    if(i==5) {
        break;
    }
    console.log(i);
}

for(var i:number=1;i<=10;i++){
    if(i==5) {
        continue;
    }
    console.log(i);
}
