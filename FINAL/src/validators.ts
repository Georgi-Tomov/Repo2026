import type { TestUser } from './models.ts';

export function isValidUser(user: TestUser): boolean {
  if (!user || !user.name || !user.role) {
    return false;
  }

  const isNameValid = user.name.trim().length >= 3;
  const isRoleValid = user.role === "admin" || user.role === "engineer" || user.role === "tester" || user.role === "user";
  const isUserActive = user.isActive === true;

  return isNameValid && isRoleValid && isUserActive;
}
