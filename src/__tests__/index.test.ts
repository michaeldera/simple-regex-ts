import { SimpleRegex } from '../index';

const TestVariables = {
  EconetNumber1: '0770000000',
  LongEconetNumber: '07700000000',
  LongNetoneNumber: '07100000000',
  LongTelecelNumber: '07300000000',
  MockIDNumber: '00-000000A00',
  MockNumberPlate: 'AAA-000',
  MockPassportNumber: 'AA000000',
  NetoneNumber1: '0710000000',
  ShortEconetNumber: '077000000',
  ShortNetoneNumber: '071000000',
  ShortTelecelNumber: '073000000',
  TelecelNumber1: '0730000000',
  MockDriversLicense: '00000AA',
  InvalidDriversLicense1: '00000AAA',
  InvalidDriversLicense2: '000000AA',
  ShortDriversLicense: '000000A'
};

test('Validate Econet Number', () => {
  expect(SimpleRegex.MobileNumber.Econet.test(TestVariables.EconetNumber1)).toBe(true);
});

test('Validate Netone Number', () => {
  expect(SimpleRegex.MobileNumber.Netone.test(TestVariables.NetoneNumber1)).toBe(true);
});

test('Validate Telecel Number', () => {
  expect(SimpleRegex.MobileNumber.Telecel.test(TestVariables.TelecelNumber1)).toBe(true);
});

test('Validate Passport Number', () => {
  expect(SimpleRegex.PassportNumber.test(TestVariables.MockPassportNumber)).toBe(true);
});

test('Validate National ID Number', () => {
  expect(SimpleRegex.NationalID.test(TestVariables.MockIDNumber)).toBe(true);
});

test('Invalid Econet Number', () => {
  expect(SimpleRegex.MobileNumber.Econet.test(TestVariables.TelecelNumber1)).toBe(false);
});

test('Invalid Netone Number', () => {
  expect(SimpleRegex.MobileNumber.Netone.test(TestVariables.TelecelNumber1)).toBe(false);
});

test('Invalid Telecel Number', () => {
  expect(SimpleRegex.MobileNumber.Telecel.test(TestVariables.EconetNumber1)).toBe(false);
});

test('Too Long Telecel Number', () => {
  expect(SimpleRegex.MobileNumber.Telecel.test(TestVariables.LongTelecelNumber)).toBe(false);
});

test('Short Telecel Number', () => {
  expect(SimpleRegex.MobileNumber.Telecel.test(TestVariables.LongTelecelNumber)).toBe(false);
});

test('Short Econet Number', () => {
  expect(SimpleRegex.MobileNumber.Telecel.test(TestVariables.ShortEconetNumber)).toBe(false);
});

test('Long Econet Number', () => {
  expect(SimpleRegex.MobileNumber.Telecel.test(TestVariables.LongEconetNumber)).toBe(false);
});

test('Short Netone Number', () => {
  expect(SimpleRegex.MobileNumber.Telecel.test(TestVariables.ShortNetoneNumber)).toBe(false);
});

test('Long Netone Number', () => {
  expect(SimpleRegex.MobileNumber.Telecel.test(TestVariables.LongNetoneNumber)).toBe(false);
});

test('Valid Number Plate', () => {
  expect(SimpleRegex.NumberPlate.test(TestVariables.MockNumberPlate)).toBe(true);
});

test('Valid Driver\'s Licence', () => {
  expect(SimpleRegex.DriversLicence.test(TestVariables.MockDriversLicense)).toBe(true);
});

test('Invalid Driver\'s License', () => {
  expect(SimpleRegex.DriversLicence.test(TestVariables.InvalidDriversLicense1) && SimpleRegex.DriversLicence.test(TestVariables.InvalidDriversLicense2)).toBe(false);
})

test('Invalid Short Driver\'s License', () => {
  expect(SimpleRegex.DriversLicence.test(TestVariables.ShortDriversLicense)).toBe(false);
})