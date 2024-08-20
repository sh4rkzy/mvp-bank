export interface CreateAccount {
    name: string;
    email: string;
    balance: number;
}

export interface AccountProfile {
    currency: string;
    balance: string;
    profileType: string;
}