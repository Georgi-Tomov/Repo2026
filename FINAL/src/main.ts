import type{ TestUser, UserRole } from './models.ts';
import { createUserReport } from './reporters.ts';

function generateUser(id: number, role: UserRole): TestUser {
  return {
    id,
    name: `user${id}`,
    role,
    isActive: true,
  };
}

const validUsers: TestUser[] = [];
const roles: UserRole[] = ['admin', 'engineer', 'tester', 'user'];

for (let i = 1; i <= 7; i++) {
  validUsers.push(generateUser(i, roles[i % roles.length]));
}

const invalidUsers: TestUser[] = [
  { id: 0, name: 'user4', role: 'user', isActive: true },                     
  { id: -1, name: 'user5', role: 'engineer', isActive: true },                
  { id: 9, name: 'user9', role: 'invalid_role' as UserRole, isActive: true }, 
];

const allUsers: TestUser[] = [...validUsers, ...invalidUsers];
const report = createUserReport(allUsers);

const invalidNames = report.invalidUsers.map((user) => user.name).join(', ');

console.log(`Total users: ${report.totalUsers}`);
console.log(`Valid users: ${report.validUsers.length}`);
console.log(`Invalid users: ${report.invalidUsers.length}`);
console.log('');
console.log('Invalid users:');
console.log(`- ${invalidNames}`);
