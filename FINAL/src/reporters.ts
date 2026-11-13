import type{ TestUser, UserRole } from './models.ts';

function isValidUser(user: TestUser): boolean {
  const validRoles: UserRole[] = ['admin', 'engineer', 'tester', 'user'];

  const hasValidId = user.id > 0;
  const hasValidName = user.name.trim().length > 0;
  const hasValidRole = validRoles.includes(user.role);

  return hasValidId && hasValidName && hasValidRole;
}

export function createUserReport(users: TestUser[]) {
  const validUsers = users.filter((user) => isValidUser(user));
  const invalidUsers = users.filter((user) => !isValidUser(user));

  return {
    totalUsers: users.length,
    validUsers,
    invalidUsers,
  };
}
