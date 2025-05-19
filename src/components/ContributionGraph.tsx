
import { useQuery, gql } from '@apollo/client';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { format } from 'date-fns';

const GET_CONTRIBUTIONS = gql`
  query GetContributions($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

interface ContributionGraphProps {
  username: string;
}

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({ username }) => {
  const { loading, error, data } = useQuery(GET_CONTRIBUTIONS, {
    variables: { username },
  });

  if (loading) {
    return (
      <div className="grid grid-cols-12 gap-1 min-h-[48px]">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="h-3 w-3 rounded-sm bg-muted animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    console.error("GraphQL error:", error);
    // Fallback to mock data on error
    return <MockContributionGraph />;
  }

  // Extract contributions data
  const weeks = data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
  const flattenedDays: ContributionDay[] = [];
  
  // Flatten the weeks into days and take only the most recent 48 days
  weeks.forEach((week: any) => {
    week.contributionDays.forEach((day: ContributionDay) => {
      flattenedDays.push(day);
    });
  });
  
  const recentDays = flattenedDays.slice(-48);

  return (
    <div className="grid grid-cols-12 gap-1">
      {recentDays.map((day, i) => {
        // Map GitHub colors to our theme colors
        let bgClass;
        
        // Define intensity levels based on contribution count
        // We'll use the original color scheme from the mock graph
        if (day.contributionCount === 0) {
          bgClass = "bg-muted/20";
        } else if (day.contributionCount <= 2) {
          bgClass = "bg-primary/40";
        } else if (day.contributionCount <= 4) {
          bgClass = "bg-primary/60";
        } else if (day.contributionCount <= 6) {
          bgClass = "bg-primary/80";
        } else {
          bgClass = "bg-primary/100";
        }

        return (
          <TooltipProvider key={i}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  className={`h-3 w-3 rounded-sm ${bgClass} cursor-pointer hover:scale-125 transition-transform`}
                  whileHover={{ scale: 1.25 }}
                />
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-card/80 backdrop-blur border border-primary/20">
                <div className="text-xs">
                  <span className="font-bold">{day.contributionCount} contributions</span>
                  <p>{format(new Date(day.date), 'MMMM d, yyyy')}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

// Mock component as fallback
const MockContributionGraph = () => {
  return (
    <div className="grid grid-cols-12 gap-1">
      {Array.from({ length: 48 }).map((_, i) => {
        const intensity = Math.floor(Math.random() * 5); // 0-4
        let bgClass;
        switch (intensity) {
          case 0: bgClass = "bg-muted"; break;
          case 1: bgClass = "bg-primary/20"; break;
          case 2: bgClass = "bg-primary/40"; break;
          case 3: bgClass = "bg-primary/60"; break;
          case 4: bgClass = "bg-primary/80"; break;
          default: bgClass = "bg-muted";
        }
        return (
          <motion.div 
            key={i} 
            className={`h-3 w-3 rounded-sm ${bgClass} hover:scale-125 transition-transform`} 
            title={`${intensity * 2} contributions`}
            whileHover={{ scale: 1.25 }}
          />
        );
      })}
    </div>
  );
};

export default ContributionGraph;
