using DrTech.Amal.SQLDatabase;
using DrTech.Amal.SQLModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrTech.Amal.SQLDataAccess.Repository
{
   public class DriverRepository : Repository<Driver>
    {
        public DriverRepository(Amal_Entities context)
          : base(context)
        {
            dbSet = context.Set<Driver>();
        }
        
        public List<object> GetAllDrivers()
        {
            List<object> mdlDrivers = (from drv in context.Drivers
                                       join vch in context.VehicleTypes on drv.VehicleID equals vch.ID
                                       where drv.IsActive != false
                                       select new
                                       {
                                           drv.ID,
                                           fullName = string.Concat(drv.FirstName, " " ,drv.LastName),
                                           vch.VehicleName,
                                           drv.RegNumber,
                                           drv.Phone,
                                           drv.FileName,
                                           drv.LicienceFileName,                                          
                                       }).OrderBy(o => o.fullName).ToList<object>();

            return mdlDrivers;
        }

       
        public bool CheckPhoneNumber(string phoneNumber)
        {
            bool data = context.Drivers.Any(x => x.Phone == phoneNumber);

            return data;
        }



        public object GetDriverByID(int ID)
        {
            object mdlDrivers = (from drv in context.Drivers
                                 where drv.ID == ID
                                 select new
                                 {
                                     drv.ID,
                                     drv.FirstName,
                                     drv.LastName,
                                     fullName = string.Concat(drv.FirstName, " ", drv.LastName),
                                     drv.VehicleType.VehicleName,
                                     drv.RegNumber,
                                     drv.Phone,
                                     drv.VehicleID,
                                     drv.Address,
                                     drv.FileName,
                                     drv.LicienceFileName,
                                     drv.PIN,
                                     drv.GreenShopID
                                 }).OrderBy(o => o.fullName).FirstOrDefault();

            return mdlDrivers;
        }

        public Driver GetDriverByPhoneAndPIN(string Phone, string PIN)
        {
            Driver mdlUser = (from des in context.Drivers
                            where des.Phone == Phone && des.PIN == PIN
                              select des).FirstOrDefault();
            return mdlUser;
        }


    }
}
