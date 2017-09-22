﻿using System.Linq;
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
            return Context.Products.FirstOrDefault(x => x.Id == id);
        }
    }
}
