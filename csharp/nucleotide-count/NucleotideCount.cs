using System;
using System.Collections.Generic;
using System.Linq;

public static class NucleotideCount
{
    public static IDictionary<char, int> Count(string sequence)
    {
        var Nucleotides = new Dictionary<char, int>
        {
            {'A', 0},
            {'C', 0},
            {'T', 0},
            {'G', 0},
        };

        if (!sequence.All("ACGT".Contains)) 
        {
            throw new ArgumentException();
        };

        for(int i = 0; i < sequence.Length; i++)
        {
            Nucleotides[sequence[i]]++;
        }
        
        return Nucleotides;
    }
}