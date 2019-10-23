export const EmailAddress = RegExp('^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$');
export const  MobileNumber = {
    Econet: RegExp(/^(((\+)*263)|0)7(7|8)[0-9]{7}$/gm),
    Netone: RegExp(/^(((\+)*263)|0)71[0-9]{7}$/gm),
    Telecel: RegExp(/^(((\+)*263)|0)73[0-9]{7}$/gm),
};
  
export const NationalID = RegExp(/^[0-9]{2}(-|s)[0-9]{6,7}s*[A-Z]s*[0-9]{2}$/gm);

export const NumberPlate = RegExp(/^[A-Z]{3}(-|[[:blank:]])[0-9]{3}$/gm);
export const  PassportNumber = RegExp(/^[A-Z]{2}[0-9]{6}$/gm);

export const SimpleRegex = {
  EmailAddress: EmailAddress,
  MobileNumber: MobileNumber,
  NationalID: NationalID,
  NumberPlate: NumberPlate, 
  PassportNumber: PassportNumber
}
