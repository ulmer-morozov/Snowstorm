using System.Collections.Generic;

namespace SnowstormWeb.Core.Contracts
{
	public interface IRepository<T>
	{
		IList<T> GetMany();
	}
}