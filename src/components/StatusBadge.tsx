import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, XCircle, AlertCircle } from "lucide-react";

interface StatusBadgeProps {
  status: "approved" | "pending" | "rejected" | "under-review";
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "approved":
        return {
          label: "Approved",
          icon: CheckCircle,
          className: "bg-success text-success-foreground",
        };
      case "pending":
        return {
          label: "Pending",
          icon: Clock,
          className: "bg-warning text-warning-foreground",
        };
      case "rejected":
        return {
          label: "Rejected",
          icon: XCircle,
          className: "bg-destructive text-destructive-foreground",
        };
      case "under-review":
        return {
          label: "Under Review",
          icon: AlertCircle,
          className: "bg-muted text-muted-foreground",
        };
      default:
        return {
          label: "Unknown",
          icon: AlertCircle,
          className: "bg-muted text-muted-foreground",
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <Badge className={`${config.className} ${className} flex items-center gap-1`}>
      <Icon className="h-3 w-3" />
      {config.label}
    </Badge>
  );
};

export default StatusBadge;