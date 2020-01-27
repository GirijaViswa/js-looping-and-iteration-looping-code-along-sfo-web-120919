// Code your solutions in this file
function countDown(num)
{   
    while(num >= 0)
    {
        console.log(num);
        num --;
    }

}

function writeCards(str,event)
{
    let message = [];
    for(let i=0;i<str.length;i++)
    {
        message.push(`Thank you, ${str[i]}, for the wonderful surprise gift!`);
    }
    return message;
}
