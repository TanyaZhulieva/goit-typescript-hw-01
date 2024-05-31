export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type description = Record<UserRole, string>;

const RoleDescription: description = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

export{RoleDescription}
