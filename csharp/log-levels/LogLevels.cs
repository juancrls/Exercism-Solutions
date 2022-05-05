using System;
using System.Text.RegularExpressions;

static class LogLine
{
    public static string Message(string logLine)
    {
        logLine = logLine.Substring(logLine.IndexOf(":") + 2).Trim();
        return Regex.Replace(logLine, @"\t|\r|\n", String.Empty);
    }

    public static string LogLevel(string logLine)
    {
        return logLine.Substring(logLine.IndexOf("["), logLine.IndexOf("]")).Remove(0,1).ToLower();
    }

    public static string Reformat(string logLine)
    {
        return $"{LogLine.Message(logLine)} ({LogLine.LogLevel(logLine)})";
    }
}
