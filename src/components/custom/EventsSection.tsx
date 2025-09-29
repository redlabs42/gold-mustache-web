import { Badge } from "@/components/ui/badge";
import { VideoEmbed } from "@/components/ui/video-embed";
import { EVENTS_SECTION } from "@/config/events";
import { PartyPopperIcon } from "lucide-react";

export function EventsSection() {
  const { heading, subheading, videoId, strong } = EVENTS_SECTION;

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <Badge variant="outline" className="mb-4">
            <PartyPopperIcon className="h-4 w-4 mr-2" />
            Eventos
          </Badge>
          <h2 className="text-3xl font-bold md:text-4xl">
            {heading} <span className="text-primary">{strong}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{subheading}</p>
        </div>
        <div className="mx-auto max-w-4xl">
          <VideoEmbed videoId={videoId} title={heading} />
        </div>
      </div>
    </section>
  );
}
