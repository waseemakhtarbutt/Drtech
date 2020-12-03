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
    
    public partial class WetWasteSchedule1
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public WetWasteSchedule1()
        {
            this.ScheduleDetails = new HashSet<ScheduleDetail>();
        }
    
        public int ID { get; set; }
        public int AreaID { get; set; }
        public Nullable<int> Month { get; set; }
        public Nullable<int> Day { get; set; }
        public Nullable<int> Year { get; set; }
        public Nullable<System.DateTime> ScheduleDate { get; set; }
        public Nullable<System.TimeSpan> FromTime { get; set; }
        public Nullable<System.TimeSpan> ToTime { get; set; }
        public Nullable<int> DriverID { get; set; }
        public Nullable<int> CompanyID { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> CityID { get; set; }
    
        public virtual Area1 Area { get; set; }
        public virtual Company1 Company { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ScheduleDetail> ScheduleDetails { get; set; }
    }
}