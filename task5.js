//1
function celciusToF(temp) {
    
    var F = temp * 1.8 + 32;
    return F;
}

//2
function avgNum(number)
{
        let sum = 0;
        for (let i = 0; i < array.length; i++)
        {
            sum += array[i];
        }
        return sum / array.length;
}

//3
function numberChecker(number)
{
    if(number> 0)
    {
        if(number % 2 == 0 && number % 3 == 0)
        {
            return "number is divisible by 2 and 3";
        }
        return "number is not divisble by 2 and 3";
    }
    return "number is less than or equal to zero";
}

//4
function primeNumbers()
{
    var isPrime = true;
    var number = 101;
    for(var i = 2; i < number; i++)
    {
        for(var j = 2; j < number; j++)
        {
            if( i != j && i % j == 0)
            {
                isPrime = false;
                break;
            }
        
        }
        if(isPrime)
        {
            console.log(i);
        }
        isPrime = true;
    }
    
}

//5
function checkPrimeNumbers(number)
{
    var isPrime = true;
    for(var i = 2; i <= number; i++)
    {
            if( i != number && number % i == 0)
            {
                isPrime = false;
                return isPrime;
                
            }
        
        if(isPrime)
        {
            return isPrime;
        }
    
    }
    
}

//6
function positiveNumbers(array) 
{
    return array.filter(num => num > -1);
}

//7
function fizzBuzz(number)
{
    if(number % 3 == 0 && number % 5 == 0)
    {
        return "FizzBuzz";
    }
    if(number % 3 == 0)
    {
        return "Fizz";
    }
    if(number % 5 == 0)
    {
        return "Buzz";
    }
    
}


