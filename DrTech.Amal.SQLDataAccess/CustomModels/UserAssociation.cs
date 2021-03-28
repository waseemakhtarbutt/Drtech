using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrTech.Amal.SQLDataAccess.CustomModels
{
    public class UserAssociation
    {
        public string Type { get; set; }
        public string Name { get; set; }
    }
    public class TopGPViewModel
    {
        public string Name { get; set; }
        public int GP { get; set; }
    }
    public class UserRequestDto
    {
        public string Type { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
    public class SchoolRequestDto
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
    public class OrganizationRequestDto
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
    public class BusinesssRequestDto
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
    public class DriverRequestDto
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
