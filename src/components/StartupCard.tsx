import { Startup } from "@/data/startups";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp } from "lucide-react";

interface StartupCardProps {
  startup: Startup;
}

const StartupCard = ({ startup }: StartupCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <CardHeader className="relative pb-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-foreground line-clamp-1">
            {startup.name}
          </h3>
          <Badge 
            variant={startup.deal === "Yes" ? "default" : "secondary"}
            className={startup.deal === "Yes" 
              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20" 
              : "bg-rose-500/10 text-rose-600 border-rose-500/20 hover:bg-rose-500/20"
            }
          >
            {startup.deal === "Yes" ? "✓ Deal" : "✗ No Deal"}
          </Badge>
        </div>
        <Badge variant="outline" className="w-fit text-xs text-muted-foreground">
          {startup.category}
        </Badge>
      </CardHeader>

      <CardContent className="relative space-y-3 pb-3">
        {startup.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {startup.description}
          </p>
        )}
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            Season {startup.season}
          </span>
          <span>Episode {startup.episode}</span>
        </div>

        {startup.sharks && startup.sharks.length > 0 && (
          <div className="flex items-center gap-2">
            <Users className="h-3 w-3 text-primary" />
            <div className="flex flex-wrap gap-1">
              {startup.sharks.map((shark) => (
                <span 
                  key={shark} 
                  className="text-xs font-medium text-primary/80"
                >
                  {shark}{startup.sharks!.indexOf(shark) < startup.sharks!.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          </div>
        )}

        {startup.dealAmount && (
          <div className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground">Deal:</span>
            <span className="font-semibold text-foreground">{startup.dealAmount}</span>
            <span className="text-muted-foreground">for</span>
            <span className="font-semibold text-primary">{startup.equity}</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="relative pt-0">
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full group/btn text-primary hover:text-primary hover:bg-primary/10"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StartupCard;
