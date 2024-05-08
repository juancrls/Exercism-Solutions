using System;
using System.Collections.Generic;

public static class WordCount
{
    public static IDictionary<string, int> CountWords(string phrase)
    {
        var dict = new Dictionary<string, int>();

        dict.Add("palavra", 1);

        return dict;
    }
}