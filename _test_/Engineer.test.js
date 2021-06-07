const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Hello', 'Kitty', 1975, 'hellokitty');

test('creates an engineer object', () => {
    (engineer.firstName, 'Hello');
    (engineer.lastName, 'Kitty');
    (engineer.id);
    (engineer.email, '@');
    (engineer.role, 'Engineer');
});

test('gets engineer\'s name', () => {
    (engineer.getName(), `${engineer.firstName} ${engineer.lastName}`);
});

test('gets engineer\'s github', () => {
    (engineer.getGithub(), engineer.github);
});