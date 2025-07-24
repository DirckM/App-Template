import { db } from '@/db/drizzle';
import { profiles } from '@/db/schema';
import { eq } from 'drizzle-orm';
import type { Profile, NewProfile } from '@/db/schema';

export class ProfileQueries {
  // Get profile by user ID
  static async getProfile(
    userId: string,
  ): Promise<{ success: boolean; data?: Profile; error?: any }> {
    try {
      const result = await db
        .select()
        .from(profiles)
        .where(eq(profiles.id, userId));

      if (result.length === 0) {
        return { success: true, data: undefined };
      }

      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Error fetching profile:', error);
      return { success: false, error };
    }
  }

  // Create new profile
  static async createProfile(
    profileData: NewProfile,
  ): Promise<{ success: boolean; data?: Profile; error?: any }> {
    try {
      const result = await db.insert(profiles).values(profileData).returning();

      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Error creating profile:', error);
      return { success: false, error };
    }
  }

  // Update profile
  static async updateProfile(
    userId: string,
    profileData: Partial<NewProfile>,
  ): Promise<{ success: boolean; data?: Profile; error?: any }> {
    try {
      const result = await db
        .update(profiles)
        .set({ ...profileData, updatedAt: new Date() })
        .where(eq(profiles.id, userId))
        .returning();

      if (result.length === 0) {
        return { success: false, error: 'Profile not found' };
      }

      return { success: true, data: result[0] };
    } catch (error) {
      console.error('Error updating profile:', error);
      return { success: false, error };
    }
  }

  // Delete profile
  static async deleteProfile(
    userId: string,
  ): Promise<{ success: boolean; error?: any }> {
    try {
      const result = await db
        .delete(profiles)
        .where(eq(profiles.id, userId))
        .returning();

      return { success: true };
    } catch (error) {
      console.error('Error deleting profile:', error);
      return { success: false, error };
    }
  }

  // Get all profiles (for admin purposes)
  static async getAllProfiles(): Promise<{
    success: boolean;
    data?: Profile[];
    error?: any;
  }> {
    try {
      const result = await db.select().from(profiles);

      return { success: true, data: result };
    } catch (error) {
      console.error('Error fetching all profiles:', error);
      return { success: false, error };
    }
  }
}
