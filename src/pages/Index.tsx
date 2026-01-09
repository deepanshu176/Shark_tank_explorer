import { useState, useMemo } from "react";
import { startups } from "@/data/startups";
import StartupCard from "@/components/StartupCard";
import SearchFilters from "@/components/SearchFilters";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [search, setSearch] = useState("");
  const [season, setSeason] = useState("all");
  const [episode, setEpisode] = useState("all");
  const [shark, setShark] = useState("all");
  const [deal, setDeal] = useState("all");

  const seasonEpisodes = useMemo(() => {
    if (season === "all") return [];
    return [...new Set(
      startups
        .filter((s) => s.season === Number(season))
        .map((s) => s.episode)
    )].sort((a, b) => a - b);
  }, [season]);

  const filtered = useMemo(() => {
    return startups.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchSeason = season === "all" || s.season === Number(season);
      const matchEpisode = episode === "all" || s.episode === Number(episode);
      const matchShark = shark === "all" || (s.sharks && s.sharks.includes(shark));
      const matchDeal =
        deal === "all" ||
        (deal === "deal" && s.deal === "Yes") ||
        (deal === "nodeal" && s.deal === "No");

      return matchSearch && matchSeason && matchEpisode && matchShark && matchDeal;
    });
  }, [search, season, episode, shark, deal]);

  const hasActiveFilters = search !== "" || season !== "all" || shark !== "all" || deal !== "all";

  const clearFilters = () => {
    setSearch("");
    setSeason("all");
    setEpisode("all");
    setShark("all");
    setDeal("all");
  };

  const stats = useMemo(() => {
    const deals = startups.filter(s => s.deal === "Yes").length;
    const noDeals = startups.filter(s => s.deal === "No").length;
    return { total: startups.length, deals, noDeals };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block">🦈</span>{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Shark Tank India
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Explore all startups that pitched on Shark Tank India. Filter by season, shark, or deal status.
            </p>
            
            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                {stats.total} Startups
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                ✓ {stats.deals} Deals
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-rose-500/10 text-rose-600 border-rose-500/20">
                ✗ {stats.noDeals} No Deals
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-8">
          <SearchFilters
            search={search}
            setSearch={setSearch}
            season={season}
            setSeason={setSeason}
            episode={episode}
            setEpisode={setEpisode}
            shark={shark}
            setShark={setShark}
            deal={deal}
            setDeal={setDeal}
            seasonEpisodes={seasonEpisodes}
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {stats.total} startups
          </p>
        </div>

        {/* Startup Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground">No startups found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
