export interface IUser {
    avatarPath: string;
    email: string;
    description: string;
    username: string;
    isActivated: boolean;
    iconActive: string;
    id: string;
    level: number;
    subscribers: [string];
    roles: [string];
    subscriptions: [string];
    private: string;
}