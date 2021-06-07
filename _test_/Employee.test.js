const { test } = require('@jest/globals');
const Employee = require ('../lib/Employee');

const employee = new Employee('Hello', 'Kitty', 1974);

test('creates employee object', () => {
    (employee.firstName,'Hello');
    (employee.lastName, 'Kitty');
    (employee.id);
    (employee.email, '@');
    (employee.role, 'Employee');
});

test('gets employee\'s name', () => {
    (employee.getName(), `${employee.firstName} ${employee.lastName}`);
});

test('gets employee\'s ID', () => {
    (employee.getId(), `${employee.id}`);
});

test('gets employee\'s email', () => {
    (employee.getEmail(), employee.email);
});

test('gets employee\'s role', () => {
    (employee.getRole(), employee.role);
});