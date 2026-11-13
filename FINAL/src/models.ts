export type UserRole = "admin" | "engineer" | "tester" | "user";

export interface TestUser {
  id: number;
  name: string;
  role: UserRole;
  isActive: boolean;
}