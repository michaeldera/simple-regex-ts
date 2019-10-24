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
  /**
   * Provides regular expression for email addresses
   */
  EmailAddress,
  /**
   * Regular expressions for mobile phone network operators in Zimbabwe.
   */
  MobileNumber,
  /**
   * Regular expression for National Identity Numbers in Zimbabwe
   */
  NationalID,
  /**
   * Regular expression for ordinary motor vehicle licence plate numbers in Zimbabwe.
   */
  NumberPlate,
  /**
   * Regular expression passport numbers in Zimbabwe.
   */ 
  PassportNumber
}
