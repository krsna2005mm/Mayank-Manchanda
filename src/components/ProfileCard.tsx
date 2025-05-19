
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';
import GitHubStats from "./GitHubStats";
import LeetCodeStats from "./LeetCodeStats";
import { Badge } from "@/components/ui/badge";
import { User, Award, BadgeCheck, Github } from "lucide-react";
import ContributionGraph from "./ContributionGraph";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="overflow-hidden border border-primary/20 bg-card/60 backdrop-blur">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Avatar className="h-28 w-28 border-2 border-primary/30">
                <AvatarImage 
                  src="images/Profile.jpg" 
                  alt="Mayank Manchanda" 
                />
                <AvatarFallback>MM</AvatarFallback>
              </Avatar>
              
              {/* Highlight glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary/20"
                animate={{ 
                  boxShadow: [
                    "0 0 0px rgba(66, 240, 233, 0)",
                    "0 0 20px rgba(66, 240, 233, 0.5)",
                    "0 0 0px rgba(66, 240, 233, 0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Online indicator */}
              <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-card" />
            </motion.div>
            
            {/* Profile Info */}
            <div className="flex flex-col text-center md:text-left">
              <h3 className="text-xl font-bold">Mayank Manchanda</h3>
              <p className="text-muted-foreground">Full Stack Developer</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-3">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                  <User className="h-3 w-3 mr-1" />
                  DTU Student
                </Badge>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30">
                  <BadgeCheck className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
                <Badge className="bg-accent/20 text-accent hover:bg-accent/30">
                  <Award className="h-3 w-3 mr-1" />
                  Top Contributor
                </Badge>
              </div>
              
              <div className="mt-3">
                <GitHubStats username="mayank-1007" repo="mayank-1007" />
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* GitHub Contribution Graph */}
            <div className="bg-card/80 border border-border rounded-md p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <h4 className="text-sm font-medium">GitHub Activity</h4>
                </div>
              </div>
              
              {/* Real GitHub Contribution Graph */}
              <ApolloProvider client={client}>
                <ContributionGraph username="mayank-1007" />
              </ApolloProvider>
            </div>
            
            {/* LeetCode Stats */}
            <LeetCodeStats username="mayank-1007" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileCard;
