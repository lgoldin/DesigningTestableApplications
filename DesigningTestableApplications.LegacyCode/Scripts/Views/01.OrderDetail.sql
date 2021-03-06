SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[OrderDetail]
AS
SELECT
	[order].Id,
	product.Name,
	item.Quantity,
	dbo.GetPrice(product.Id, [order].CurrencyId) AS Price,
	dbo.GetPrice(product.Id, [order].CurrencyId) * item.Quantity AS SubTotal,
	currency.Code
FROM
	OrderItem item
INNER JOIN [Order] [order] ON [order].Id = item.OrderId
INNER JOIN Product product ON product.Id = item.ProductId
INNER JOIN Currency currency ON currency.Id = [order].CurrencyId

GO
