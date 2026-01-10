import { useParams, useNavigate } from "react-router-dom";
import { startups } from "@/data/startups";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Tv, Users, IndianRupee } from "lucide-react";

const StartupDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const startup = startups.find((s) => s.id === id);

  if (!startup) {
    return (
      <div className="p-10 text-center text-white">
        <h2 className="text-2xl font-bold">Startup not found 😢</h2>
        <Button className="mt-4" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto text-white space-y-8">

      {/* 🔙 Back Button */}
      <Button variant="ghost" onClick={() => navigate(-1)}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      {/* 🔥 Header */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">{startup.name}</h1>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{startup.category}</Badge>

          <Badge
            className={
              startup.deal === "Yes"
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                : "bg-rose-500/20 text-rose-400 border-rose-500/30"
            }
          >
            {startup.deal === "Yes" ? "Deal" : "No Deal"}
          </Badge>
        </div>
      </div>

      {/* 📝 Description */}
      {startup.description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {startup.description}
        </p>
      )}

      {/* 📊 Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <div className="p-4 rounded-xl glass-card border border-border/40 space-y-1">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Tv className="h-4 w-4" /> Season / Episode
          </p>
          <p className="font-semibold">
            Season {startup.season}, Episode {startup.episode}
          </p>
        </div>

        <div className="p-4 rounded-xl glass-card border border-border/40 space-y-1">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="h-4 w-4" /> City
          </p>
          <p className="font-semibold">{startup.city}</p>
        </div>

        <div className="p-4 rounded-xl glass-card border border-border/40 space-y-1">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <IndianRupee className="h-4 w-4" /> Ask
          </p>
          <p className="font-semibold">{startup.ask}</p>
        </div>

        <div className="p-4 rounded-xl glass-card border border-border/40 space-y-1">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <IndianRupee className="h-4 w-4" /> Final Deal
          </p>
          <p className="font-semibold">
            {startup.deal === "Yes" ? startup.dealAmount : "No Deal"}
          </p>
        </div>

      </div>

      {/* 🦈 Sharks */}
      {startup.sharks && startup.sharks.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            Sharks Involved
          </h3>

          <div className="flex flex-wrap gap-2">
            {startup.sharks.map((shark) => (
              <Badge key={shark} variant="secondary">
                {shark}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* 🌐 Website */}
      {startup.website && (
        <a
          href={startup.website}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 text-primary hover:underline"
        >
          Visit Official Website →
        </a>
      )}
    </div>
  );
};

export default StartupDetails;
