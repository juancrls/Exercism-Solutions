using System;

public static class CollatzConjecture
{
    public static int Steps(int number, int steps=0)
    {
        if(number < 1) throw new ArgumentOutOfRangeException();
        while(number != 1)
        {
            if(number % 2 == 0)
            {
                number = number / 2;
                steps++;
            } 
            else 
            {
                if(number != 1)
                {
                    number = (number * 3) + 1;
                    steps++;
                }
            }
        }
        return steps;
    }
}