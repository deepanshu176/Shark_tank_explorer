import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, X, Sparkles } from "lucide-react";
import { sharks as allSharks } from "@/data/startups";
import { motion } from "framer-motion";

interface SearchFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  season: string;
  setSeason: (value: string) => void;
  episode: string;
  setEpisode: (value: string) => void;
  shark: string;
  setShark: (value: string) => void;
  deal: string;
  setDeal: (value: string) => void;
  seasonEpisodes: number[];
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const SearchFilters = ({
  search,
  setSearch,
  season,
  setSeason,
  episode,
  setEpisode,
  shark,
  setShark,
  deal,
  setDeal,
  seasonEpisodes,
  onClearFilters,
  hasActiveFilters,
}: SearchFiltersProps) => {

  // ✅ THIS WAS MISSING
  const navigate = useNavigate();

  // ✅ AUTO NAVIGATE WHEN SHARK SELECTED
  useEffect(() => {
    if (shark && shark !== "all" && shark !== "All Sharks") {
      const slug = shark.toLowerCase().replace(/\s+/g, "-");
      navigate(`/shark/${slug}`);
    }
  }, [shark, navigate]);

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Search Bar */}
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          placeholder="Search startups..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-11 h-12 glass border-border/30 focus:border-primary/50 focus:ring-primary/20 focus:glow transition-all duration-300"
        />
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4 text-primary" />
          <span className="font-medium">Filters:</span>
        </div>

        {/* SEASON */}
        <Select value={season} onValueChange={(value) => { setSeason(value); setEpisode("all"); }}>
          <SelectTrigger className="w-[140px] glass border-border/30 hover:border-primary/30 transition-colors">
            <SelectValue placeholder="Season" />
          </SelectTrigger>
          <SelectContent className="glass border-border/30">
            <SelectItem value="all">All Seasons</SelectItem>
            <SelectItem value="1">Season 1</SelectItem>
            <SelectItem value="2">Season 2</SelectItem>
            <SelectItem value="3">Season 3</SelectItem>
            <SelectItem value="4">Season 4</SelectItem>
          </SelectContent>
        </Select>

        {/* 🦈 SHARK FILTER → AUTO PROFILE PAGE */}
        <Select value={shark} onValueChange={setShark}>
          <SelectTrigger className="w-[160px] glass border-border/30 hover:border-primary/30 transition-colors">
            <SelectValue placeholder="Shark" />
          </SelectTrigger>
          <SelectContent className="glass border-border/30">
            <SelectItem value="all">All Sharks</SelectItem>
            {allSharks.map((sh) => (
              <SelectItem key={sh} value={sh}>{sh}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* DEAL */}
        <Select value={deal} onValueChange={setDeal}>
          <SelectTrigger className="w-[130px] glass border-border/30 hover:border-primary/30 transition-colors">
            <SelectValue placeholder="Deal Status" />
          </SelectTrigger>
          <SelectContent className="glass border-border/30">
            <SelectItem value="all">All Deals</SelectItem>
            <SelectItem value="deal">
              <span className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-emerald-400" /> Got Deal
              </span>
            </SelectItem>
            <SelectItem value="nodeal">No Deal</SelectItem>
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-foreground hover:bg-destructive/10"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          </motion.div>
        )}
      </div>

      {/* Episode Buttons */}
      {season !== "all" && seasonEpisodes.length > 0 && (
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant={episode === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setEpisode("all")}
            className={`rounded-full ${episode === "all" ? "glow" : "glass border-border/30"}`}
          >
            All Episodes
          </Button>
          {seasonEpisodes.map((ep) => (
            <motion.div
              key={ep}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: ep * 0.03 }}
            >
              <Button
                variant={episode === String(ep) ? "default" : "outline"}
                size="sm"
                onClick={() => setEpisode(String(ep))}
                className={`rounded-full ${episode === String(ep) ? "glow" : "glass border-border/30"}`}
              >
                Ep {ep}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchFilters;
