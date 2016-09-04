using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SnowstormWeb.Core.Contracts;
using SnowstormWeb.Core.Models;

namespace SnowstormWeb.Controllers
{
	public class AuthorsController : Controller
	{
		private readonly IRepository<Author> _authorManager;

		public AuthorsController(IRepository<Author> authorManager)
		{
			_authorManager = authorManager;
		}

		public IActionResult Index()
		{
		    var authors = _authorManager.GetMany();

            return View("Authors", authors);
		}
	}
}