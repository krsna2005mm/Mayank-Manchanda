
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LeetCodeStatsProps {
  username: string;
  className?: string;
}

const LeetCodeStats: React.FC<LeetCodeStatsProps> = ({ 
  username, 
  className = "" 
}) => {
  // Note: LeetCode doesn't have a public API, 
  // so we're mocking data for demonstration purposes
  const mockData = {
    username: username,
    solved: 387,
    rank: 15842,
    contests: 22,
    badges: ["Weekly Contest", "Daily Challenge", "Top 5%"]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${className}`}
    >
      <Card className="overflow-hidden border border-border bg-card/80 backdrop-blur">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Code className="h-5 w-5 text-accent" />
            <h3 className="font-gaming text-sm">LEETCODE</h3>
          </div>
          
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-muted-foreground">Problems</p>
              <p className="font-bold">{mockData.solved}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Rank</p>
              <p className="font-bold">#{mockData.rank}</p>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-1">
            {mockData.badges.map((badge, i) => (
              <Badge 
                key={i} 
                variant={i % 2 === 0 ? "default" : "secondary"}
                className="text-xs"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LeetCodeStats;
