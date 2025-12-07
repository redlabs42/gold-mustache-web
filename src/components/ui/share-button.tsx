"use client";

import { Check, Share2 } from "lucide-react";
import { useCallback, useState } from "react";

interface ShareButtonProps {
  title: string;
  url: string;
}

export function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Clipboard access denied
      }
    }
  }, [title, url]);

  return (
    <button
      type="button"
      onClick={handleShare}
      className="ml-auto flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      aria-label="Share"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Share2 className="h-4 w-4" />
      )}
    </button>
  );
}
