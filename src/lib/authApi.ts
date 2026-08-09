// Mock Authentication API Service for AdCommand

export interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  avatarUrl?: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

const STORAGE_KEY = 'adcommand_auth_user';

export const authApi = {
  // Get current logged-in user from storage
  getCurrentUser(): User | null {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  // Save current user to storage
  setCurrentUser(user: User | null): void {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  },

  // Mock Sign In Endpoint
  async signIn(email: string, password: string): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API delay

    if (!email || !password) {
      return { success: false, message: 'Email and password are required.' };
    }

    // Mock validation
    const mockUser: User = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email: email,
      company: 'AdCommand Corp',
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${email}`
    };

    authApi.setCurrentUser(mockUser);

    return {
      success: true,
      user: mockUser,
      token: 'jwt_mock_token_' + Date.now(),
      message: 'Successfully authenticated.'
    };
  },

  // Mock Google Sign In Endpoint
  async signInWithGoogle(): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 900));

    const mockUser: User = {
      id: 'usr_goog_' + Math.random().toString(36).substr(2, 9),
      name: 'Commander User',
      email: 'commander@adcommand.ai',
      company: 'Enterprise Account',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=commander'
    };

    authApi.setCurrentUser(mockUser);

    return {
      success: true,
      user: mockUser,
      token: 'jwt_google_mock_' + Date.now(),
      message: 'Authenticated with Google.'
    };
  },

  // Mock Sign Up Endpoint
  async signUp(fullName: string, company: string, email: string, password: string): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!email || !password || !fullName) {
      return { success: false, message: 'Please fill in all required fields.' };
    }

    const mockUser: User = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      name: fullName,
      email: email,
      company: company || 'AdCommand Partner',
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${fullName}`
    };

    authApi.setCurrentUser(mockUser);

    return {
      success: true,
      user: mockUser,
      token: 'jwt_signup_mock_' + Date.now(),
      message: 'Account created successfully.'
    };
  },

  // Mock Password Reset Endpoint
  async resetPassword(email: string): Promise<AuthResponse> {
    await new Promise((resolve) => setTimeout(resolve, 750));

    if (!email) {
      return { success: false, message: 'Please enter a valid email address.' };
    }

    return {
      success: true,
      message: `Recovery link sent to ${email}`
    };
  },

  // Logout
  signOut(): void {
    authApi.setCurrentUser(null);
  }
};
