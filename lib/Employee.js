// this will act as a base template for the other employee types
class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = `${firstName}.${lastName}@techcompany.com`;
        this.role = 'Employee';
    };

    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getId() {
        return `<span> ID: </span>${this.id}`;
    };

    getEmail() {
        return `<span>Email:</span><a href="mailto:${this.email}" class="has-text-primary"> ${this.email}</a>`;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;