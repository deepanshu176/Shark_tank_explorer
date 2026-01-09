import { useState, useMemo } from "react";
import { startups } from "@/data/startups";
import StartupCard from "@/components/StartupCard";
import SearchFilters from "@/components/SearchFilters";
import SharkScene from "@/components/SharkScene";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, XCircle } from "lucide-react";

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
    <div className="min-h-screen ocean-gradient">
      {/* Hero Section with 3D Shark */}
      <header className="relative overflow-hidden border-b border-border/30">
        <SharkScene />
        
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="inline-block text-5xl md:text-7xl">🦈</span>{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-glow">
                Shark Tank India
              </span>
            </motion.h1>
            
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore all startups that pitched on Shark Tank India. Filter by season, shark, or deal status.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Badge variant="outline" className="glass px-5 py-2.5 text-sm font-medium border-border/30">
                <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                {stats.total} Startups
              </Badge>
              <Badge variant="outline" className="glass px-5 py-2.5 text-sm font-medium bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                <Sparkles className="h-4 w-4 mr-2" />
                {stats.deals} Deals
              </Badge>
              <Badge variant="outline" className="glass px-5 py-2.5 text-sm font-medium bg-rose-500/10 text-rose-400 border-rose-500/20">
                <XCircle className="h-4 w-4 mr-2" />
                {stats.noDeals} No Deals
              </Badge>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-10">
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
        <motion.div 
          className="mb-8 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-bold text-primary">{filtered.length}</span> of {stats.total} startups
          </p>
        </motion.div>

        {/* Startup Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((startup, index) => (
              <StartupCard key={startup.id} startup={startup} index={index} />
            ))}
          </div>
        ) : (
          <motion.div 
            className="flex flex-col items-center justify-center py-20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-foreground">No startups found</h3>
            <p className="mt-3 text-muted-foreground max-w-md">
              Try adjusting your filters or search term to discover amazing startups
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Index;
