
function prime_number(num){
var counter=0
for(var i=1;i<=num;i++)
{
    if(num%i)
    {
        counter++;
    }
}
if(counter>2)
{
    return false
}
return true}

console.log(prime_number(13))