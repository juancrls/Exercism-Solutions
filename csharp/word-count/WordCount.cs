using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public static class WordCount
{
    public static IDictionary<string, int> CountWords(string phrase)
    {
        phrase = phrase.Trim().ToLower();
        var regex = new Regex("\\b(?:\\w+['’]?\\w*|\\d+)\\b");

        var words = regex.Matches(phrase);
        var countedWords = new Dictionary<string, int>();

        for(int i = 0; i < words.Count; i++)
        {
            var word = words[i].Value;

            if (countedWords.TryGetValue(word, out int value))
            {
                countedWords[word]++;
            } else
            {
                countedWords.Add(word, 1);
            }
        }

        return countedWords;
    }
}