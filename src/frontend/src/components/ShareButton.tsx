import { Share2, Check } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { useState } from 'react';

export default function ShareButton() {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            toast.success('Link copied to clipboard! 💖', {
                description: 'Share this Valentine page with your loved ones'
            });
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            toast.error('Could not copy link', {
                description: 'Please try again or copy the URL manually from your browser'
            });
        }
    };

    return (
        <Button
            onClick={handleShare}
            variant="outline"
            size="lg"
            className="gap-2 hover:bg-romantic-blush hover:border-romantic-pink min-h-[44px] min-w-[120px] touch-manipulation"
        >
            {copied ? (
                <>
                    <Check className="w-4 h-4" />
                    Copied!
                </>
            ) : (
                <>
                    <Share2 className="w-4 h-4" />
                    Share
                </>
            )}
        </Button>
    );
}
