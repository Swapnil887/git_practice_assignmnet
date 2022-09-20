
function prime_number(number){
var factors=0
for(var i=1;i<=num;i++)
{
    if(number%i)
    {
        factors++;
    }
}
if(factors>2)
{
    return false
}
return true}

console.log(prime_number(13))