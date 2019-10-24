"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAddress = RegExp('^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$');
exports.MobileNumber = {
    Econet: RegExp(/^(((\+)*263)|0)7(7|8)[0-9]{7}$/gm),
    Netone: RegExp(/^(((\+)*263)|0)71[0-9]{7}$/gm),
    Telecel: RegExp(/^(((\+)*263)|0)73[0-9]{7}$/gm),
};
exports.NationalID = RegExp(/^[0-9]{2}(-|s)[0-9]{6,7}s*[A-Z]s*[0-9]{2}$/gm);
exports.NumberPlate = RegExp(/^[A-Z]{3}(-|[[:blank:]])[0-9]{3}$/gm);
exports.PassportNumber = RegExp(/^[A-Z]{2}[0-9]{6}$/gm);
exports.SimpleRegex = {
    /**
     * Provides regular expression for email addresses
     */
    EmailAddress: exports.EmailAddress,
    /**
     * Regular expressions for mobile phone network operators in Zimbabwe.
     */
    MobileNumber: exports.MobileNumber,
    /**
     * Regular expression for National Identity Numbers in Zimbabwe
     */
    NationalID: exports.NationalID,
    /**
     * Regular expression for ordinary motor vehicle licence plate numbers in Zimbabwe.
     */
    NumberPlate: exports.NumberPlate,
    /**
     * Regular expression passport numbers in Zimbabwe.
     */
    PassportNumber: exports.PassportNumber
};
