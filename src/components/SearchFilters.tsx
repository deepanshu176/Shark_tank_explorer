import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import { sharks as allSharks } from "@/data/startups";

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
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search startups..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-11 h-12 bg-card/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
        />
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span className="font-medium">Filters:</span>
        </div>

        <Select value={season} onValueChange={(value) => { setSeason(value); setEpisode("all"); }}>
          <SelectTrigger className="w-[140px] bg-card/50 border-border/50">
            <SelectValue placeholder="Season" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Seasons</SelectItem>
            <SelectItem value="1">Season 1</SelectItem>
            <SelectItem value="2">Season 2</SelectItem>
            <SelectItem value="3">Season 3</SelectItem>
            <SelectItem value="4">Season 4</SelectItem>
          </SelectContent>
        </Select>

        <Select value={shark} onValueChange={setShark}>
          <SelectTrigger className="w-[160px] bg-card/50 border-border/50">
            <SelectValue placeholder="Shark" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sharks</SelectItem>
            {allSharks.map((sh) => (
              <SelectItem key={sh} value={sh}>{sh}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={deal} onValueChange={setDeal}>
          <SelectTrigger className="w-[130px] bg-card/50 border-border/50">
            <SelectValue placeholder="Deal Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Deals</SelectItem>
            <SelectItem value="deal">Got Deal</SelectItem>
            <SelectItem value="nodeal">No Deal</SelectItem>
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Episode Buttons */}
      {season !== "all" && seasonEpisodes.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Button
            variant={episode === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setEpisode("all")}
            className="rounded-full"
          >
            All Episodes
          </Button>
          {seasonEpisodes.map((ep) => (
            <Button
              key={ep}
              variant={episode === String(ep) ? "default" : "outline"}
              size="sm"
              onClick={() => setEpisode(String(ep))}
              className="rounded-full"
            >
              Ep {ep}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
