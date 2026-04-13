type Role = "admin" | "staff";

interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
}

