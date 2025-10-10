import type {
  InstagramApiResponse,
  InstagramMediaResponse,
  InstagramPost,
  InstagramUserResponse,
} from "@/types/instagram";

const INSTAGRAM_GRAPH_API_URL = "https://graph.instagram.com";

/**
 * Busca o ID do usuário do Instagram usando o access token
 */
export async function getInstagramUserId(accessToken: string): Promise<string> {
  try {
    const response = await fetch(
      `${INSTAGRAM_GRAPH_API_URL}/me?fields=id,username&access_token=${accessToken}`,
      {
        next: { revalidate: 86400 }, // Cache por 24h
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `Instagram API error: ${error.error?.message || response.statusText}`,
      );
    }

    const data: InstagramUserResponse = await response.json();
    return data.id;
  } catch (error) {
    console.error("[Instagram Service] Error fetching user ID:", error);
    throw error;
  }
}

/**
 * Busca os últimos posts do Instagram via Graph API
 * @param accessToken Access token de longa duração
 * @param userId Instagram User ID
 * @param limit Número de posts (padrão: 10)
 */
export async function fetchInstagramPosts(
  accessToken: string,
  userId: string,
  limit = 10,
): Promise<InstagramPost[]> {
  try {
    const fields =
      "id,caption,media_type,media_url,permalink,timestamp,thumbnail_url";
    const url = `${INSTAGRAM_GRAPH_API_URL}/${userId}/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(url, {
      next: { revalidate: 0 }, // Não usar cache para sync
    });

    if (!response.ok) {
      const error = await response.json();

      // Token expirado ou inválido
      if (response.status === 401 || response.status === 400) {
        throw new Error(
          `Instagram token inválido ou expirado: ${error.error?.message}`,
        );
      }

      throw new Error(
        `Instagram API error (${response.status}): ${error.error?.message || response.statusText}`,
      );
    }

    const data: InstagramApiResponse = await response.json();

    // Transformar dados da API para o formato do app
    const posts: InstagramPost[] = data.data
      .filter(
        (media) =>
          media.media_type === "IMAGE" || media.media_type === "CAROUSEL_ALBUM",
      )
      .map((media: InstagramMediaResponse) => ({
        id: media.id,
        image: media.media_url,
        caption: media.caption || "",
        url: media.permalink,
        timestamp: media.timestamp,
        mediaType: media.media_type,
      }))
      .slice(0, limit);

    return posts;
  } catch (error) {
    console.error("[Instagram Service] Error fetching posts:", error);
    throw error;
  }
}

/**
 * Valida se o access token está configurado
 */
export function validateInstagramConfig(): {
  isValid: boolean;
  accessToken?: string;
  userId?: string;
  error?: string;
} {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!accessToken) {
    return {
      isValid: false,
      error: "INSTAGRAM_ACCESS_TOKEN não configurado",
    };
  }

  if (!userId) {
    return {
      isValid: false,
      error: "INSTAGRAM_USER_ID não configurado",
    };
  }

  return {
    isValid: true,
    accessToken,
    userId,
  };
}
