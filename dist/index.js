"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Common Zimbabwean Regex patterns */
exports.SimpleRegex = {
    EmailAddress: RegExp('^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$'),
    MobileNumber: {
        Econet: RegExp(/^(((\+)*263)|0)7(7|8)[0-9]{7}$/gm),
        Netone: RegExp(/^(((\+)*263)|0)71[0-9]{7}$/gm),
        Telecel: RegExp(/^(((\+)*263)|0)73[0-9]{7}$/gm),
    },
    NationalID: RegExp(/^[0-9]{2}(-|s)[0-9]{5,9}s*[A-Z]s*[0-9]{2}$/gm),
    NumberPlate: RegExp(/^[A-Z]{3}(-|[[:blank:]])[0-9]{3}$/gm),
    PassportNumber: RegExp(/^[A-Z]{2}[0-9]{6}$/gm),
};
