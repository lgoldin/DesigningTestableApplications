using System.Linq;
using DesigningTestableApplications.Model;

namespace DesigningTestableApplications.Repositories
{
    public class ProductsRepository : Repository
    {
        public Product GetGift()
        {
            return Context.Products.FirstOrDefault(x => x.Name == "Pen Drive Gift");
        }

        public Product GetById(int id)
        {
            var prices = Context.Prices.Where(x => x.ProductId == id).ToList();
            var product = Context.Products.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                product.Prices = prices;
                return product;
            }

            return null;
        }
    }
}
