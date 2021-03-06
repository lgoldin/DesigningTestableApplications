IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetPrice]') AND type in (N'FN')) 
DROP FUNCTION [dbo].[GetPrice] 

GO
/****** Object:  UserDefinedFunction [dbo].[GetPrice]    Script Date: 16/06/2015 10:50:49 a.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[GetPrice] 
(
	@ProductId int,
	@CurrencyId int
)

RETURNS decimal(18,4)
AS
BEGIN
	DECLARE @Price decimal(18,4)

	SELECT 
		@Price = price.Amount 
	FROM Price price 
	WHERE 
		price.ProductId = @ProductId AND 
		price.CurrencyId = @CurrencyId

	RETURN @Price

END

GO
