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
    
    public partial class UserPayment
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public UserPayment()
        {
            this.BuyBins = new HashSet<BuyBin>();
        }
    
        public int ID { get; set; }
        public Nullable<int> UserID { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<int> PaymentMethodID { get; set; }
        public Nullable<decimal> OrderPrice { get; set; }
        public Nullable<decimal> DeductedFromWallet { get; set; }
        public Nullable<decimal> AmountPaid { get; set; }
        public string IsSuccess { get; set; }
        public string batchNumber { get; set; }
        public string orderRefNumber { get; set; }
        public string transactionResponse { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string StoreId { get; set; }
        public string authorizeId { get; set; }
        public string transactionNumber { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BuyBin> BuyBins { get; set; }
        public virtual PaymentMethod PaymentMethod { get; set; }
        public virtual User User { get; set; }
    }
}