const Manager = require ('../lib/Manager');

const manager = new Manager('Hello', 'Kitty', 1974, 1);

test('creates a manager object', () => {
    (manager.firstName,'Hello');
    (manager.lastName, 'Kitty');
    (manager.id);
    (manager.email, '@');
    (manager.role, 'Manager');
    (manager.officeNumber);
});

test('gets manager\'s name', () => {
    (manager.getName(), `${manager.firstName} ${manager.lastName}`);
});