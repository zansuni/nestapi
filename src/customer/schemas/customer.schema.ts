// ./src/customer/schemas/customer.schema.ts
import * as mongoose from 'mongoose';


export const CustomerSchema = new mongoose.Schema({

  shipmentId: {
    serviceSpeed: Number,
    shipmentType: Number,
    shipmentCategory: Number,
    shipmentWeight: Number,
    totalPackages: Number,
    invoiceAmount: Number,
    shipmentContents: Number,
    commentPublic: String,
    commentPrivate: Number,
    personalDelivery: Boolean,
    returnSignedInvoices: Boolean,
    returnSignedConfirmation: Boolean,
    returnPackage: Boolean,
    payType: Number,
    payToSender: Number,
    payToSenderViaAccount: Boolean,

    sendersAccountNumber: String,
    bankTransferComment: String,
    tasks: [
      {
        type: Number,
        nameType: Number,
        name1: String,
        name2: String,
        taxId: Number,
        adressType: Number,
        municipalites: Number,
        place: Number,
        street: Number,
        houseNumber: Number,
        apartment: Number,
        contactPerson: String,
        phone: Number,
        date: Date,
        timeFrom: TimeRanges,
        timeTo: TimeRanges,
        preNotification: Number,
        comment: String,
      }
    ],
    reports: [
      {
        mode: Number,
        type: Number,
        adress: String,
      }
    ],
    lang: Number,
    cust: Number,
  }

})