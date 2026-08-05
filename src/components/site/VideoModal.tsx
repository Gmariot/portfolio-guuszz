import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getYouTubeEmbedUrl } from "@/lib/youtube";

type VideoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  videoUrl: string;
};

export function VideoModal({ open, onOpenChange, title, videoUrl }: VideoModalProps) {
  const embed = getYouTubeEmbedUrl(videoUrl);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl border-border bg-card p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-left text-base sm:text-lg">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-2 aspect-video w-full overflow-hidden rounded-xl bg-background">
          {embed ? (
            <iframe
              key={embed}
              src={embed}
              title={title}
              className="size-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="flex size-full items-center justify-center p-6 text-center text-sm text-muted-foreground">
              Ainda não tem link de vídeo aqui — adicione a URL do YouTube em src/data/portfolio.ts
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
