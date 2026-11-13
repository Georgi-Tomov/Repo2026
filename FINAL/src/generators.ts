import { UserRole, TestUser } from './models';

function generateUser(id: number, role: UserRole): TestUser {
  return {
    id,
    name: `user_${id}`,
    role,
    isActive: true,
  };
}

const validUsers: TestUser[] = [];
const roles: UserRole[] = ['admin', 'engineer', 'tester', 'user'];

for (let i = 1; i <= 7; i++) {
  const role = roles[i % roles.length];
  validUsers.push(generateUser(i, role));
}

const invalidUsers: TestUser[] = [
  { id: 0, name: '', role: 'user', isActive: true },                 
  { id: -1, name: 'user_-1', role: 'engineer', isActive: true },     
  { id: 8, name: '   ', role: 'invalid_role' as UserRole, isActive: true }, 
];
