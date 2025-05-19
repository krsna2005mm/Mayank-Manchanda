
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Trophy, Award, Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery, gql } from "@apollo/client";
import { ApolloProvider } from '@apollo/client';
import leetcodeClient, { leetcodeMockData } from '@/lib/leetcodeClient';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

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

// Component that renders LeetCode stats based on available data
const LeetCodeStatsContent = ({ username }: { username: string }) => {
  const { loading, error, data } = useQuery(GET_LEETCODE_STATS, {
    variables: { username },
    onError: (error) => {
      console.error("LeetCode API error:", error.message);
      // Only show toast for errors that aren't CORS related
      if (!error.message.includes("Failed to fetch")) {
        toast.error("Failed to load LeetCode stats", {
          description: "Using cached data instead."
        });
      }
    },
  });

  // Use data from API response or fallback to mock data if API call fails
  const userData = data?.matchedUser || leetcodeMockData;

  // Extract stats from either real or mock data
  const totalSolved = userData.submitStats?.acSubmissionNum?.find(
    (item: any) => item.difficulty === "All"
  )?.count || 581;
  
  const easySolved = userData.submitStats?.acSubmissionNum?.find(
    (item: any) => item.difficulty === "Easy"
  )?.count || 244;
  
  const mediumSolved = userData.submitStats?.acSubmissionNum?.find(
    (item: any) => item.difficulty === "Medium"
  )?.count || 306;
  
  const hardSolved = userData.submitStats?.acSubmissionNum?.find(
    (item: any) => item.difficulty === "Hard"
  )?.count || 31;
  
  const rank = userData.profile?.ranking || 101998;
  const contestsAttended = userData.userContestRanking?.attendedContestsCount || 26;
  const contestRating = userData.userContestRanking?.rating || 1866;
  const contestPercentage = userData.userContestRanking?.topPercentage?.toFixed(1) || "5.2";
  const contestBadge = userData.userContestRanking?.badge?.name || "Knight";
  
  // Extract badges
  const badges = userData.badges || leetcodeMockData.badges;

  // Loading state
  if (loading && !userData) {
    return (
      <Card className="overflow-hidden border border-border bg-card/80 backdrop-blur min-h-[200px] animate-pulse">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Code className="h-5 w-5 text-accent animate-pulse" />
            <h3 className="font-gaming text-sm">LEETCODE</h3>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-4 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
            <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
          </div>
        </CardContent>
      </Card>
    );
  }

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
                  <p className="text-xs">Top {contestPercentage}%</p>
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

        {/* Problem difficulty breakdown */}
        <div className="mt-3 flex items-center justify-between text-xs px-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center gap-1">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <span>{easySolved}</span>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-card/80 backdrop-blur border border-primary/20">
                <p className="text-xs">Easy: {easySolved} solved</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span>{mediumSolved}</span>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-card/80 backdrop-blur border border-primary/20">
                <p className="text-xs">Medium: {mediumSolved} solved</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center gap-1">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>{hardSolved}</span>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-card/80 backdrop-blur border border-primary/20">
                <p className="text-xs">Hard: {hardSolved} solved</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {badges.slice(0, 3).map((badge: any, i: number) => (
            <TooltipProvider key={badge.id || i}>
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
          
          {contestBadge === "Knight" && (
            <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 text-xs">
              <Trophy className="h-3 w-3 mr-1" />
              Knight
            </Badge>
          )}
        </div>

        {/* Show a small note if using mock data */}
        {error && (
          <div className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            <span>Displaying cached data</span>
          </div>
        )}
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
