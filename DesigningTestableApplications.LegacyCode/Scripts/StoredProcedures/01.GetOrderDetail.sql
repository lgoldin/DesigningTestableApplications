IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetOrderDetail]') AND type in (N'P', N'PC')) 
DROP PROCEDURE [dbo].[GetOrderDetail]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetOrderDetail] 
	@OrderId int
AS
BEGIN
	SELECT
		*
	FROM OrderDetail detail
	WHERE detail.Id = @OrderId
END

GO
