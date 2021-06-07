const Intern = require('../lib/Intern');

const intern = new Intern('Hello', 'Kitty', 1974, 'UCD');

test('creates an intern object', () => {
    (intern.firstName, 'Hello');
    (intern.lastName, 'Kitty');
    (intern.id);
    (intern.email, '@');
    (intern.role, 'Intern');
    (intern.school, 'UCD');
});

test('gets intern\'s name', () => {
    (intern.getName(), `${intern.firstName} ${intern.lastName}`);
});
