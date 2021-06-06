const { test } = require('@jest/globals');
const Employee = require ('../lib/Employee');

const employee = new Employee('Hello', 'Kitty', 1974);

test('creates employee object', () => {
    expectToBe(employee.firstName,'Hello');
    expectToBe(employee.lastName, 'DKittyoe');
    expectNum(employee.id);
    expectStr(employee.email, '@');
    expectToBe(employee.role, 'Employee');
});