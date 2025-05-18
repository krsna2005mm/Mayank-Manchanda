
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GitHubStats from "./GitHubStats";
import LeetCodeStats from "./LeetCodeStats";
import { Badge } from "@/components/ui/badge";
import { User, Award, BadgeCheck, Github } from "lucide-react";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="overflow-hidden border border-primary/20 bg-card/60 backdrop-blur cyber-border">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Avatar className="h-28 w-28 border-2 border-primary/30">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=500" 
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
              <motion.div 
                className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-card"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
            
            {/* Profile Info */}
            <div className="flex flex-col text-center md:text-left">
              <motion.h3 
                className="text-xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Mayank Manchanda
              </motion.h3>
              
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Full Stack Developer
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                    <User className="h-3 w-3 mr-1" />
                    DTU Student
                  </Badge>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30">
                    <BadgeCheck className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Badge className="bg-accent/20 text-accent hover:bg-accent/30">
                    <Award className="h-3 w-3 mr-1" />
                    Top Contributor
                  </Badge>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <GitHubStats username="mayank-1007" />
              </motion.div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* GitHub Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-card/80 border border-border rounded-md p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <h4 className="text-sm font-medium">GitHub Activity</h4>
                </div>
              </div>
              
              {/* Simple Mock Contribution Graph */}
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
                      className={`h-3 w-3 rounded-sm ${bgClass}`}
                      title={`${intensity * 2} contributions`}
                      whileHover={{ scale: 1.5, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                  );
                })}
              </div>
            </motion.div>
            
            {/* LeetCode Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <LeetCodeStats username="mayank-1007" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileCard;
