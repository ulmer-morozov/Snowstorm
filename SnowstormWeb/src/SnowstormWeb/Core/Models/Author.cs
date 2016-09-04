using System.Collections.Generic;

namespace SnowstormWeb.Core.Models
{
	public sealed class Author
	{
		public Name Name { get; }
        public string About { get; }
        public IList<Image> Images { get; }

		public Author(Name name, string about, IList<Image> images)
		{
		    Name = name;
		    About = about;
		    Images = images;
		}

		public Author(string firstname, string lastname, string about, IList<Image> images)
			: this(new Name(firstname, lastname), about, images)
		{
		}
	}
}