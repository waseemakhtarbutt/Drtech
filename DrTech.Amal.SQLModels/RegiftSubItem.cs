//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DrTech.Amal.SQLModels
{
    using System;
    using System.Collections.Generic;
    
    public partial class RegiftSubItem
    {
        public int ID { get; set; }
        public int RegiftID { get; set; }
        public Nullable<int> TypeID { get; set; }
        public Nullable<int> SubTypeID { get; set; }
        public Nullable<int> Qty { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsParent { get; set; }
        public Nullable<int> GreenPoints { get; set; }
    
        public virtual LookupType LookupType { get; set; }
        public virtual LookupType LookupType1 { get; set; }
        public virtual Regift Regift { get; set; }
    }
}