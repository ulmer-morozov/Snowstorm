namespace SnowstormWeb.Core.Models
{
    public sealed class Name
    {
        public string First { get; }
        public string Last { get; }

        public Name(string first, string last)
        {
            First = first;
            Last = last;
        }

        public string Full => $"{Last} {First}";
    }
}