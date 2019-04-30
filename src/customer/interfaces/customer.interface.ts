// ./src/customer/interfaces/customer.interface.ts
import { Document } from 'mongoose';


export interface Customer extends Document {
  readonly shipmentId: {
    readonly serviceSpeed: number;
    readonly shipmentType: number;
    readonly shipmentCategory: number;
    readonly shipmentWeight: number;
    readonly totalPackages: number;
    readonly invoiceAmount: number;
    readonly shipmentContents: number;
    readonly commentPublic: string;
    readonly commentPrivate: number;
    readonly personalDelivery: boolean;
    readonly returnSignedInvoices: boolean;
    readonly returnSignedConfirmation: boolean;
    readonly returnPackage: boolean;
    readonly payType: number;
    readonly payToSender: number;
    readonly payToSenderViaAccount: boolean;
    readonly sendersAccountNumber: string;
    readonly bankTransferComment: string;
    readonly tasks: [
      {
        readonly type: number;
        readonly nameType: number;
        readonly name1: string;
        readonly name2: string;
        readonly taxId: number;
        readonly adressType: number;
        readonly municipalites: number;
        readonly place: number;
        readonly street: number;
        readonly houseNumber: number;
        readonly apartment: number;
        readonly contactPerson: string;
        readonly phone: number;
        readonly date: Date;
        readonly timeFrom: TimeRanges;
        readonly timeTo: TimeRanges;
        readonly preNotification: number;
        readonly comment: string;
      }
    ],
    readonly reports: [
      {
        readonly mode: number;
        readonly type: number;
        readonly adress: string;
      }
    ],

    readonly lang: number;
    readonly cust: number;

  }

}