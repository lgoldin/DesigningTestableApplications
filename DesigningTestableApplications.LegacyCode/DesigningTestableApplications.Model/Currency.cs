//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DesigningTestableApplications.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class Currency
    {
        public Currency()
        {
            this.Orders = new HashSet<Order>();
            this.Prices = new HashSet<Price>();
        }
    
        public int Id { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
    
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Price> Prices { get; set; }
    }
}
