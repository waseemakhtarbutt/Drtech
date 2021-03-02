using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrTech.Amal.SQLDataAccess.CustomModels
{
    public class SegregatedDataViewModel
    {
        public string Type { get; set; }
        public int RecycleID { get; set; }
        public decimal? Weight { get; set; }
        public decimal? rate { get; set; }
        public decimal? total { get; set; }
        public int RowNumber { get; set; }
    }
}
