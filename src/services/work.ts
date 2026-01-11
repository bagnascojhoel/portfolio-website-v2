import { WorkItemType } from '@/types/work';
import { workItems as localWorkItems } from '@/data/work';

/**
 * Fetch work items from the API with a fallback to local data.
 * Revalidates every hour when used in Next.js server fetch.
 */
export async function getWorkItems(): Promise<WorkItemType[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/work`, {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      return res.json();
    }

    console.warn(`Work API returned non-ok status: ${res.status}`);
  } catch (err) {
    console.warn('Could not fetch from API, falling back to local data during build/linkage.', err);
  }

  return localWorkItems;
}
