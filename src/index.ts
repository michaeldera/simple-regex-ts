/**
 * Provides a way to test if a number is in one of the valid mobile number patterns
 */
const TestMobileNumber = (mobileNumber: string): boolean => {
  const isValidMobileNumber: boolean = MobileNumber.Econet.test(mobileNumber) || MobileNumber.Telecel.test(mobileNumber) || MobileNumber.Netone.test(mobileNumber);
  return isValidMobileNumber;  
}

export const EmailAddress = RegExp('^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$');
export const MobileNumber = {
  Econet: RegExp(/^(((\+)*263)|0)7(7|8)[0-9]{7}$/gm),
  Netone: RegExp(/^(((\+)*263)|0)71[0-9]{7}$/gm),
  Telecel: RegExp(/^(((\+)*263)|0)73[0-9]{7}$/gm),
  test: TestMobileNumber
};
export const NationalID = RegExp(/^[0-9]{2}(-|s)[0-9]{6,7}s*[A-Z]s*[0-9]{2}$/gm);
export const NumberPlate = RegExp(/^[A-Z]{3}(-|[[:blank:]])[0-9]{3}$/gm);
export const PassportNumber = RegExp(/^[A-Z]{2}[0-9]{6}$/gm);
export const DriversLicence = RegExp(/^\b\d{5}[a-zA-Z]{2}\b/gm);
export const SSN = RegExp(/^\b([0-9]){7}([a-zA-Z]){1}\b/gm);

export const SimpleRegex = {
  /**
   * Provides regular expression for Drivers' Licences in Zimbabwe
   */
  DriversLicence,
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
  PassportNumber,
  /**
   * Regular expression for social security number by National Social Security Authority of Zimbabwe.
   */
  SSN,
};
