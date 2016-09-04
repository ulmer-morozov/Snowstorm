using System;
using System.Collections.Generic;
using SnowstormWeb.Core.Models;
using SnowstormWeb.Core.Repositories;

namespace SnowstormWeb.Core
{
    public class AuthorRepository : MemoryRepository<Author>
    {
        public AuthorRepository()
            : base(Authors)
        {
        }

        public static IList<Image> DefaultImages => new List<Image>
        {
            new Image("http://lorempixel.com/314/430/abstract?" + Guid.NewGuid()),
            new Image("http://lorempixel.com/314/430/city?" + Guid.NewGuid()),
            new Image("http://lorempixel.com/314/430/people?" + Guid.NewGuid()),
            new Image("http://lorempixel.com/314/430/transport?" + Guid.NewGuid()),
            new Image("http://lorempixel.com/314/430/animals?" + Guid.NewGuid()),
            new Image("http://lorempixel.com/314/430/food?" + Guid.NewGuid()),
            new Image("http://lorempixel.com/314/430/nature?" + Guid.NewGuid())
        };

        public static IList<Author> Authors { get; } = new List<Author>
        {
            new Author("Lyuba", "Berezina","This character is a man in his early thirties, who can be quite mysterious. He comes from a comfortable background, lives in a fantasy world and tends to always say the wrong thing.",DefaultImages),
            new Author("Hariwini", "Ali","This character is a man in his early thirties, who is very daring. He comes from a comfortable background, lives in a converted barn and tends to be a little paranoid.",DefaultImages),
            new Author("Carmelo", "Cândido","This character is a man in his early twenties, who can be quite dishonest. He comes from a wealthy background, lives in a caravan and tends to a huge collection of pot plants.",DefaultImages),
			//
			new Author("Dubaku", "Nikola","This character is a man in his late forties, who can be quite restless. He comes from a comfortable background, lives in a mansion and tends to cry a lot.",DefaultImages),
            new Author("Agim", "Pastor","This character is a man in his late forties, who is very imaginative. He comes from a comfortable background, lives in a terraced house and tends to eat too much.",DefaultImages),
            new Author("Bacchus", "Janko","This character is a man in his late twenties, who is very timid. He comes from a wealthy background, lives in the suburbs and tends to be a bit forgetful.",DefaultImages),
			//
			new Author("Ǫrvar", "Albert","This character is a woman in her sixties, who is very spontaneous. She comes from a comfortable background, lives in a mining town and tends to drink too much.",DefaultImages),
            new Author("Valérian", "Aulis","This character is a woman in her early thirties, who is very rude. She comes from a wealthy background, lives in a remote farmhouse and tends to be rather lazy.",DefaultImages),
            new Author("Meinard", "Ferdinand","This character is a young man in his late teens, who can be quite judgemental. He comes from a poor background, lives in a caravan and tends to spend too much money.",DefaultImages),
			//
			new Author("Basit", "Orbán","This character is a woman in her early forties, who is very stubborn. She comes from a poor background, lives in a fantasy world and tends to complain a lot.",DefaultImages),
            new Author("Jafar", "Hubert","This character is a woman in her late thirties, who is very considerate. She comes from a poor background, lives in a terraced house and tends to drink too much.",DefaultImages),
            new Author("Elisabeth"," Sunitha","This character is a man in his late forties, who is very secretive. He comes from a poor background, lives in a caravan and tends to work too hard.",DefaultImages),
			//
			new Author("Quintillus", "Ben","This character is a young woman in her late teens, who is very rude. She comes from a comfortable background, lives in a converted barn and tends to spend too much money.",DefaultImages),
            new Author("Mìcheal", "Carlito","This character is a woman in her late twenties, who can be quite cruel. She comes from a comfortable background, lives in a rough neighbourhood and tends to have difficulty saying No.",DefaultImages),
            new Author("Tito", "Lavi","This character is a woman in her late forties, who can be quite naive. She comes from a wealthy background, lives in a fisherman's cottage and tends to spend too much money.",DefaultImages),
			//
			new Author("Audovacar", "Tayler","This character is a woman in her early thirties, who can be quite compassionate. She comes from a comfortable background, lives in the suburbs and tends to spend too much money.",DefaultImages),
            new Author("Rowan", "Aleksej","This character is a man in his late twenties, who is very considerate. He comes from a comfortable background, lives in an eco-friendly home and tends to spend too much money.",DefaultImages),
            new Author("Jamsheed", "Giosuè","This character is a woman in her late forties, who is very sensitive. She comes from a wealthy background, lives in a mansion and tends to be a little clumsy.",DefaultImages),
			//
			new Author("Firdaus", "Eric","This character is a woman in her late thirties, who can be quite stubborn. She comes from a wealthy background, lives in a mining town and tends to have difficulty saying No.",DefaultImages),
            new Author("Barış", "Kayden","This character is a man in his early thirties, who can be quite judgemental. He comes from a wealthy background, lives in a converted barn and tends to be a little gullible.",DefaultImages),
            new Author("Phillip", "Ingólfr","This character is a man in his early thirties, who is very mysterious. He comes from a poor background, lives in a mansion and tends to eat too much.",DefaultImages)
        };
    }
}