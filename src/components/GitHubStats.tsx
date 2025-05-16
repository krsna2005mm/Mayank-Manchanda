
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Star } from "lucide-react";

interface GitHubStatsProps {
  username: string;
  repo: string;
  className?: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ 
  username, 
  repo,
  className = ""
}) => {
  const [stars, setStars] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch repository data: ${response.status}`);
        }
        
        const data = await response.json();
        setStars(data.stargazers_count);
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
        setError("Could not load GitHub stats");
        setStars(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStars();
  }, [username, repo]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center space-x-2 ${className}`}
    >
      <Github className="h-4 w-4" />
      <div className="flex items-center">
        {isLoading ? (
          <span className="text-muted-foreground text-sm">Loading stars...</span>
        ) : error ? (
          <span className="text-muted-foreground text-sm">{error}</span>
        ) : (
          <div className="flex items-center gap-1">
            <span className="font-medium">{stars}</span>
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GitHubStats;
