using System.Collections.Generic;
using SnowstormWeb.Core.Contracts;

namespace SnowstormWeb.Core.Repositories
{
	public class MemoryRepository<T>:IRepository<T>
	{
		private readonly IList<T> _list;

		public MemoryRepository(IList<T> list)
		{
			_list = list;
		}

		public IList<T> GetMany()
		{
			return _list;
		}
	}
}