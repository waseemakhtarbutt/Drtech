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
    
    public partial class Refuse
    {
        public int ID { get; set; }
        public string FileName { get; set; }
        public string Idea { get; set; }
        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public int StatusID { get; set; }
        public int GreenPoints { get; set; }
        public int UserID { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> UpdatedBy { get; set; }
        public System.DateTime UpdatedDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
    
        public virtual Status Status { get; set; }
        public virtual User User { get; set; }
    }
}
