import { SimpleRegex } from '../index'

const TestVariables = {
  EconetNumber1: "0770000000", 
  NetoneNumber1: "0710000000",
  TelecelNumber1: "0730000000",
  MockPassportNumber : "AA000000", 
  MockIDNumber: " 00-000000A00"
}

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
})

test('Validate National ID Number', () => {
  expect(SimpleRegex.NationalID.test(TestVariables.MockIDNumber)).toBe(true);
})