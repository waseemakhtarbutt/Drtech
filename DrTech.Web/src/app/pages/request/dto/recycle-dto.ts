import { RecycleSubItemDTO } from "./recycle-subitem-dto";
import { CommentsDTO } from "./comments-dto";

export class RecycleDTO {
  id: number;
  longitude: number;
  latitude: number;
  fileNameTakenByUser: string;
  collectedPendingConfirmation: boolean;
  deliveredPendingConfirmation: boolean;
  description: string;
  userId: string;
  orderID: string;
  userID: number;
  userName: string;
  userPhone: string;
  userAddress: string;
  statusName: string;
  assignTo: number;
  recycleSubItems: Array<RecycleSubItemDTO>;
  collectTime: Date;
  collectDate: Date;
  collectorDate: string;
  gpv: number;
  totalGP: number;
  orderStatusID: number;
  cash: number;
  comments: string;
  recycleComments:Array<CommentsDTO>;
}
