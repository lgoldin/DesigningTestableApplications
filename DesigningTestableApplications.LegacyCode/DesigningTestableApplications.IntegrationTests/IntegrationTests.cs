﻿using System;
using System.Collections.Generic;
using System.Linq;
using DesigningTestableApplications.Model;
using DesigningTestableApplications.ORM;
using DesigningTestableApplications.Repositories;
using DesigningTestableApplications.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DesigningTestableApplications.IntegrationTests
{
    [TestClass]
    public class IntegrationTests
    {
        private DummyContext context;

        [TestInitialize]
        public void SetUp()
        {
            this.context = Repository.Context;
        }

        [TestMethod]
        public void AddOrderWithGift()
        {
            var ordersService = new OrdersService();

            ordersService.AddOrder(new Order
            {
                CurrencyId = 1,
                CustomerId = 1,
                Date = new DateTime(2015, 10, 20),
                OrderItems = new List<OrderItem>
                {
                    new OrderItem { ProductId = 2, Quantity = 1 },
                    new OrderItem { ProductId = 4, Quantity = 2 }
                }
            });

            Order order = this.context.Orders.FirstOrDefault();
            Assert.IsNotNull(order);
            Assert.AreEqual(1, order.CustomerId);
            Assert.AreEqual(1, order.Customer.Id);
            Assert.AreEqual(1, order.CurrencyId);
            Assert.AreEqual(3, order.OrderItems.Count);
            Assert.AreEqual(2, order.OrderItems.ElementAt(0).ProductId);
            Assert.AreEqual(1, order.OrderItems.ElementAt(0).Quantity);
            Assert.AreEqual(4, order.OrderItems.ElementAt(1).ProductId);
            Assert.AreEqual(2, order.OrderItems.ElementAt(1).Quantity);
            Assert.AreEqual(6, order.OrderItems.ElementAt(2).ProductId);
            Assert.AreEqual(1, order.OrderItems.ElementAt(2).Quantity);
        }

        [TestMethod]
        public void AddOrderWithoutGift()
        {
            var ordersService = new OrdersService();

            ordersService.AddOrder(new Order
            {
                CurrencyId = 1,
                CustomerId = 2,
                Date = new DateTime(2015, 10, 20),
                OrderItems = new List<OrderItem>
                {
                    new OrderItem { ProductId = 3, Quantity = 1 }
                }
            });

            Order order = this.context.Orders.FirstOrDefault();
            Assert.IsNotNull(order);
            Assert.AreEqual(2, order.CustomerId);
            Assert.AreEqual(2, order.Customer.Id);
            Assert.AreEqual(1, order.CurrencyId);
            Assert.AreEqual(1, order.OrderItems.Count);
            Assert.AreEqual(3, order.OrderItems.ElementAt(0).ProductId);
            Assert.AreEqual(1, order.OrderItems.ElementAt(0).Quantity);
        }

        [TestCleanup]
        public void CleanUp()
        {
            Repository.Dispose();
        }
    }
}
