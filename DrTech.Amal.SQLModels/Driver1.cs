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
    
    public partial class Driver1
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public Nullable<int> CityID { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public Nullable<int> VehicleID { get; set; }
        public string RegNumber { get; set; }
        public string FileName { get; set; }
        public string LicienceFileName { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public string PIN { get; set; }
        public Nullable<int> GreenShopID { get; set; }
        public string Type { get; set; }
    
        public virtual GreenShop1 GreenShop { get; set; }
    }
}