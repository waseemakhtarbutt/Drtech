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
    
    public partial class Replant1
    {
        public int ID { get; set; }
        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public string FileName { get; set; }
        public int PlantID { get; set; }
        public string Description { get; set; }
        public int TreeCount { get; set; }
        public double Height { get; set; }
        public Nullable<int> Reminder { get; set; }
        public int StatusID { get; set; }
        public int GreenPoints { get; set; }
        public int UserID { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public Nullable<int> UpdatedBy { get; set; }
        public System.DateTime UpdatedDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
    }
}
