
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="border border-border/50 bg-card/90 backdrop-blur-sm shadow-sm">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative mx-auto md:mx-0"
            >
              <Avatar className="h-24 w-24 border border-border/30">
                <AvatarImage 
                  src="images/Profile.jpg" 
                  alt="Mayank Manchanda" 
                />
                <AvatarFallback className="text-lg font-medium">MM</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            </motion.div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold tracking-tight mb-1">Mayank Manchanda</h3>
                <p className="text-muted-foreground font-medium">Full Stack Developer</p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Delhi, India</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Available for work</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                <Badge variant="secondary" className="text-xs font-medium">
                  DTU Computer Science
                </Badge>
                <Badge variant="outline" className="text-xs font-medium">
                  CGPA 8.99
                </Badge>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border/30">
                <div className="text-center">
                  <div className="text-lg font-semibold">1400+</div>
                  <div className="text-xs text-muted-foreground">Codeforces</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">1860+</div>
                  <div className="text-xs text-muted-foreground">LeetCode</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">15+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">2</div>
                  <div className="text-xs text-muted-foreground">Internships</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileCard;
