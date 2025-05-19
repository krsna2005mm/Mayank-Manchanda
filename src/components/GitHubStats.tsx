import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Star } from "lucide-react";

interface GitHubStatsProps {
  username: string;
  repo?: string;
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
      // Reset states for each fetch attempt triggered by prop changes
      setIsLoading(true);
      setError(null);
      setStars(null);

      if (!username) {
        setError("GitHub username not provided.");
        setIsLoading(false);
        return;
      }

      // If no repo is specified, we don't fetch stars.
      // isLoading is set to false, stars and error remain null.
      // The rendering logic will show "GitHub" text as a fallback.
      if (!repo) {
        setIsLoading(false);
        return;
      }
      
      try {
        console.log(`Fetching: https://api.github.com/repos/${username}/${repo}`);
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
        
        console.log("GitHub API Response Status:", response.status);
        console.log("GitHub API Response Headers:", Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
          let errorDetail = `Status: ${response.status}`;
          let errorData = null;
          try {
            errorData = await response.json();
            console.log("GitHub API Error Data:", errorData);
            if (errorData && errorData.message) {
              errorDetail = errorData.message;
            }
          } catch (jsonError) {
            console.warn("Could not parse error response JSON from GitHub:", jsonError);
          }
          throw new Error(`Failed to fetch repository data: ${errorDetail}`);
        }
        
        const data = await response.json();
        console.log("GitHub API Success Data:", data);
        if (typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        } else {
          // This case should ideally not happen with GitHub's API if the repo is valid
          throw new Error("Star count not found or invalid in API response.");
        }
      } catch (err: any) {
        console.error(`Error fetching GitHub stats for ${username}/${repo}:`, err);
        setError(err.message || "Could not load GitHub stats.");
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
          <span className="text-muted-foreground text-sm" title={error}> {/* Show detailed error on hover */}
            GitHub {/* You could also display a more generic "Error" or an error icon */}
          </span>
        ) : stars !== null ? (
          <div className="flex items-center gap-1">
            <span className="font-medium">{stars}</span>
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          </div>
        ) : (
          <span className="text-sm">GitHub</span>
        )}
      </div>
    </motion.div>
  );
};

export default GitHubStats;
