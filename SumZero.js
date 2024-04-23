function SumZero ()
{
    var array = [-5,-4,-3,-2,-1,  10, 8,6,4];
    for (let number of array)
    {
        for (let i = 0; i < array.length; i++)
        {
            if (number + array[i] === 0)
            {
                console.log(number, array[i])
                
            }
        }
    }
}

SumZero();  // (O n^2)

