// Types for Business Setup form and Terminal creation

export interface SupplierData {
  supplierId: string;
  isMultiSupplier: boolean;
  shortAddress: string;
  dealerNumber: string;
}

export interface AcquiringMatrixRow {
  psp: string;
  pspSupplierNumber: string;
  isracardAcquirer?: string;
  amexAcquirer?: string;
  visaAcquirer?: string;
  dinersAcquirer?: string;
  mastercardAcquirer?: string;
}

export interface BusinessDetails {
  businessName: string;
  fullAddress: string;
  city: string;
  postalCode: string;
  phonePrefix: string;
  phoneNumber: string;
  mobilePrefix: string;
  mobileNumber: string;
  contactPerson: string;
  formFillerName: string;
  updateRecordType: 'פתיחה' | 'חידוש פעילות';
  businessType: string; // MCC code
  terminalCategory: 'ברירת מחדל' | 'מכונות ממכר' | 'שרות עצמי' | 'סחר אלקטרוני' | 'MPOS';
  terminalType: 'אין דרישות מיוחדות' | 'מסוף דלק';
  blockedFileSize: string;
  pinPadCode: string;
  technologies: {
    emv: boolean;
    magnetic: boolean;
    ctl: boolean;
  };
}

export interface CreateTerminalRequest {
  RetailerUserName: string;
  RetailerPassword: string;
  KidometMefic: string;
  HPMefic: string;
  TerminalNumber: string;
  TerminalPassword: string;
  TerminalUserName: string;
  DepositType: number; // 1=auto, 2=manual, 3=scheduled, 4=none
  DepositTime?: string; // Required if DepositType = 3, format: HH:mm
  BusinessName: string;
  BusinessNumber: string;
  AllowRefund: boolean;
  AllowTokenization: boolean;
  AllowSMS: boolean;
  SMSShortCode?: string;
  Allow3DS: boolean;
  MerchantAmExID?: string;
  MastercardMCC: string;
  ViseMCC: string;
  AmexMCC: string;
  DinersMCC: string;
  EnableRavMutav: boolean;
}

export interface CreateTerminalResponse {
  TerminalNumber: string;
  HasError: boolean;
  Errors?: {
    Code: number;
    Message: string;
    Severity: number;
  };
}

