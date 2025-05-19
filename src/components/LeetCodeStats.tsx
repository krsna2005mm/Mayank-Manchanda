
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Trophy, Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery, gql } from "@apollo/client";
import { ApolloProvider } from '@apollo/client';
import leetcodeClient from '@/lib/leetcodeClient';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// LeetCode GraphQL query to fetch user profile data
const GET_LEETCODE_STATS = gql`
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
        reputation
        starRating
      }
      badges {
        id
        name
        displayName
      }
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      userContestRanking {
        attendedContestsCount
        rating
        topPercentage
        badge {
          name
        }
      }
    }
  }
`;

interface LeetCodeStatsProps {
  username: string;
  className?: string;
}

// Component to show when data is loading or there's an error
const MockLeetCodeStats = ({ username }: { username: string }) => {
  const mockData = {
    username: username,
    solved: 387,
    rank: 15842,
    contests: 22,
    badges: ["Weekly Contest", "Daily Challenge", "Top 5%"]
  };

  return (
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
  );
};

const LeetCodeStatsContent = ({ username }: { username: string }) => {
  const { loading, error, data } = useQuery(GET_LEETCODE_STATS, {
    variables: { username },
  });

  if (loading || error || !data?.matchedUser) {
    console.error("LeetCode data error:", error);
    return <MockLeetCodeStats username={username} />;
  }

  const user = data.matchedUser;
  const totalSolved = user.submitStats.acSubmissionNum.find((item: any) => item.difficulty === "All")?.count || 0;
  const rank = user.profile.ranking || 0;
  const contestsAttended = user.userContestRanking?.attendedContestsCount || 0;
  const contestRating = user.userContestRanking?.rating || 0;
  const contestBadge = user.userContestRanking?.badge?.name || "";
  
  // Extract badges
  const badges = user.badges || [];

  return (
    <Card className="overflow-hidden border border-border bg-card/80 backdrop-blur">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code className="h-5 w-5 text-accent" />
            <h3 className="font-gaming text-sm">LEETCODE</h3>
          </div>
          
          {contestBadge && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span className="text-xs ml-1">{contestRating}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-card/80 backdrop-blur border border-primary/20">
                  <p className="text-xs">{contestBadge} - Rating: {contestRating}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        
        <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Problems</p>
            <p className="font-bold">{totalSolved}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Rank</p>
            <p className="font-bold">#{rank}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Contests</p>
            <p className="font-bold">{contestsAttended}</p>
          </div>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {badges.slice(0, 5).map((badge: any, i: number) => (
            <TooltipProvider key={badge.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge 
                    variant={i % 2 === 0 ? "default" : "secondary"}
                    className="text-xs"
                  >
                    <Award className="h-3 w-3 mr-1" />
                    {badge.displayName || badge.name}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-card/80 backdrop-blur border border-primary/20">
                  {badge.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          
          {contestBadge && (
            <Badge className="bg-accent/20 text-accent hover:bg-accent/30 text-xs">
              <Trophy className="h-3 w-3 mr-1" />
              {contestBadge}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const LeetCodeStats: React.FC<LeetCodeStatsProps> = ({ 
  username, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${className}`}
    >
      <ApolloProvider client={leetcodeClient}>
        <LeetCodeStatsContent username={username} />
      </ApolloProvider>
    </motion.div>
  );
};

export default LeetCodeStats;
