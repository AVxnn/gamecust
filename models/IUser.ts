export interface IUser {
  avatarPath: string;
  bgPath: string;
  email: string;
  premium: boolean;
  description: string;
  website: string;
  username: string;
  isActivated: boolean;
  iconActive: string;
  id: string;
  level: number;
  exp: number;
  subscribers: [string];
  roles: [string];
  subscriptions: [string];
  private: string;
}
