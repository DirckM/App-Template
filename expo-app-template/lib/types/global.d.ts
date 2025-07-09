export interface UserProfile {
  id: string; // UUID of the user
  updated_at: Date; // Timestamp of the last update
  username: string; // Unique username for the user
  full_name?: string; // Full name of the user (optional)
  avatar_url?: string; // URL to the user's avatar image (optional)
  website?: string; // User's personal or professional website (optional)
}
