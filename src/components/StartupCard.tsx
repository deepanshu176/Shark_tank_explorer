import { Startup } from "@/data/startups";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface StartupCardProps {
  startup: Startup;
  index: number;
}

const StartupCard = ({ startup, index }: StartupCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="group relative overflow-hidden glass-card hover:glow transition-all duration-500">

        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

        {startup.deal === "Yes" && (
          <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/20 blur-2xl rounded-full" />
        )}

        {/* HEADER */}
        <CardHeader className="relative pb-3">
          <div className="flex items-start justify-between gap-2">
            <motion.h3
              className="text-lg font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              {startup.name}
            </motion.h3>

            <Badge
              variant={startup.deal === "Yes" ? "default" : "secondary"}
              className={
                startup.deal === "Yes"
                  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30 shadow-lg shadow-emerald-500/20"
                  : "bg-rose-500/20 text-rose-400 border-rose-500/30"
              }
            >
              {startup.deal === "Yes" ? (
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Deal
                </span>
              ) : (
                "No Deal"
              )}
            </Badge>
          </div>

          <Badge
            variant="outline"
            className="w-fit text-xs text-muted-foreground border-border/50"
          >
            {startup.category}
          </Badge>
        </CardHeader>

        {/* CONTENT */}
        <CardContent className="relative space-y-3 pb-3">
          {startup.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {startup.description}
            </p>
          )}

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-primary" />
              Season {startup.season}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-secondary/50">
              Episode {startup.episode}
            </span>
          </div>

          {/* 🦈 SHARK CHIPS (CLICKABLE) */}
          {startup.sharks && startup.sharks.length > 0 && (
            <div className="flex items-start gap-2">
              <Users className="h-3 w-3 text-accent mt-1" />
              <div className="flex flex-wrap gap-2">
                {startup.sharks.map((shark) => (
                  <span
                    key={shark}
                    onClick={(e) => {
                      e.stopPropagation(); // card click se alag
                      navigate(`/shark/${shark.toLowerCase().replace(/\s+/g, "-")}`);
                    }}
                    className="px-2 py-0.5 rounded-full text-xs bg-accent/10 text-accent cursor-pointer hover:bg-accent/20 transition"
                  >
                    {shark}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* DEAL INFO */}
          {startup.dealAmount && (
            <motion.div
              className="flex items-center gap-3 text-sm p-2 rounded-lg bg-primary/5 border border-primary/10"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-muted-foreground">Deal:</span>
              <span className="font-bold text-foreground">{startup.dealAmount}</span>
              {startup.equity && (
                <>
                  <span className="text-muted-foreground">for</span>
                  <span className="font-bold text-primary">{startup.equity}</span>
                </>
              )}
            </motion.div>
          )}
        </CardContent>

        {/* FOOTER */}
        <CardFooter className="relative pt-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/startup/${startup.id}`)}
            className="w-full group/btn text-primary hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>

      </Card>
    </motion.div>
  );
};

export default StartupCard;
