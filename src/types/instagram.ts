/**
 * Instagram Graph API Types
 * @see https://developers.facebook.com/docs/instagram-api/reference/ig-user/media
 */

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  url: string;
  timestamp?: string;
  mediaType?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
}

export interface InstagramMediaResponse {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url?: string;
}

export interface InstagramApiResponse {
  data: InstagramMediaResponse[];
  paging?: {
    cursors?: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export interface InstagramUserResponse {
  id: string;
  username: string;
  media_count?: number;
}

export interface InstagramCacheData {
  posts: InstagramPost[];
  lastUpdated: string;
  source: "api" | "mock";
}
