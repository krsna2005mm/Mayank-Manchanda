
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

interface FreelanceBadgeProps {
  className?: string;
}

const FreelanceBadge: React.FC<FreelanceBadgeProps> = ({ className = "" }) => {
  return (
    <Link to="/freelance">
      <motion.div 
        className={`inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Briefcase className="h-4 w-4 mr-2 text-primary" />
        <span className="text-sm font-medium">Available for Freelance</span>
      </motion.div>
    </Link>
  );
};

export default FreelanceBadge;
