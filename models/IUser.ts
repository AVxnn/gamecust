export interface IUser {
    email: string;
    username: string;
    isActivated: boolean;
    id: string;
    subscribers: [string];
    subscriptions: [string];
    private: string;
    avatarPath: string;
    description: string;
}