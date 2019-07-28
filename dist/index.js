"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleRegex = {
    EmailAddress: RegExp('^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$'),
    MobileNumber: {
        Econet: RegExp(/^(((\+)*263)|0)7(7|8)[0-9]{7}$/gm),
        Netone: RegExp(/^(((\+)*263)|0)71[0-9]{7}$/gm),
        Telecel: RegExp(/^(((\+)*263)|0)73[0-9]{7}$/gm),
    },
    NationalID: RegExp(/^[0-9]{2}(-|s)[0-9]{6}s*[A-Z]s*[0-9]{2}$/gm),
    PassportNumber: RegExp(/^[A-Z]{2}[0-9]{6}$/gm),
};
