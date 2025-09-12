import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MapPin, 
  CreditCard, 
  Calendar,
  Target,
  AlertCircle
} from "lucide-react";

const Dashboard = () => {
  // Mock data for dashboard
  const overviewStats = [
    {
      title: "Total Funds Allocated",
      value: "₹2,847 Crores",
      change: "+12%",
      icon: CreditCard,
      color: "text-primary"
    },
    {
      title: "Funds Disbursed",
      value: "₹2,756 Crores",
      change: "+15%",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "Total Beneficiaries",
      value: "12,45,678",
      change: "+8%",
      icon: Users,
      color: "text-secondary"
    },
    {
      title: "Pending Applications",
      value: "23,456",
      change: "-5%",
      icon: AlertCircle,
      color: "text-warning"
    }
  ];

  const stateData = [
    { state: "Bihar", allocated: "₹485 Cr", disbursed: "₹467 Cr", beneficiaries: "2,34,567", status: "On Track" },
    { state: "Uttar Pradesh", allocated: "₹523 Cr", disbursed: "₹498 Cr", beneficiaries: "2,89,123", status: "On Track" },
    { state: "West Bengal", allocated: "₹345 Cr", disbursed: "₹334 Cr", beneficiaries: "1,67,234", status: "On Track" },
    { state: "Odisha", allocated: "₹287 Cr", disbursed: "₹278 Cr", beneficiaries: "1,45,789", status: "On Track" },
    { state: "Assam", allocated: "₹198 Cr", disbursed: "₹189 Cr", beneficiaries: "98,765", status: "Attention Needed" }
  ];

  const recentActivity = [
    { date: "Today", activity: "₹2.3 Cr disbursed to 1,245 beneficiaries in Patna district", type: "disbursement" },
    { date: "Yesterday", activity: "3,456 applications approved across 12 districts", type: "approval" },
    { date: "2 days ago", activity: "New allocation of ₹50 Cr for flood relief in Eastern regions", type: "allocation" },
    { date: "3 days ago", activity: "Verification completed for 5,678 applications", type: "verification" },
    { date: "1 week ago", activity: "₹125 Cr emergency fund activated for cyclone relief", type: "emergency" }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Public Transparency Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-time tracking of disaster relief funds across India
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <Badge variant="outline" className="bg-success/10 text-success">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              Live Data
            </Badge>
            <span className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleString()}
            </span>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-3 w-3 text-success mr-1" />
                      <span className="text-sm text-success">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* State-wise Breakdown */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                State-wise Fund Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stateData.map((state, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">{state.state}</h4>
                      <Badge 
                        variant={state.status === "On Track" ? "default" : "secondary"}
                        className={state.status === "On Track" ? "bg-success" : "bg-warning"}
                      >
                        {state.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Allocated</p>
                        <p className="font-medium">{state.allocated}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Disbursed</p>
                        <p className="font-medium text-success">{state.disbursed}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Beneficiaries</p>
                        <p className="font-medium text-primary">{state.beneficiaries}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'disbursement' ? 'bg-success' :
                        activity.type === 'approval' ? 'bg-primary' :
                        activity.type === 'allocation' ? 'bg-secondary' :
                        activity.type === 'verification' ? 'bg-warning' :
                        'bg-destructive'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {activity.activity}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transparency Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center">Disbursement Rate</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-success mb-2">96.8%</div>
              <p className="text-sm text-muted-foreground">
                Funds successfully disbursed to beneficiaries
              </p>
              <div className="w-full bg-muted rounded-full h-2 mt-4">
                <div className="bg-success h-2 rounded-full" style={{ width: '96.8%' }}></div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center">Processing Time</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7.2</div>
              <p className="text-sm text-muted-foreground">
                Average days from application to disbursement
              </p>
              <div className="flex items-center justify-center mt-4 text-success">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">Improved by 40%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center">Transparency Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">A+</div>
              <p className="text-sm text-muted-foreground">
                Based on public audit and citizen feedback
              </p>
              <div className="flex items-center justify-center mt-4 text-success">
                <Target className="h-4 w-4 mr-1" />
                <span className="text-sm">99.2% Accuracy</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Notice */}
        <Card className="shadow-card bg-gradient-status">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Complete Transparency
            </h3>
            <p className="text-muted-foreground mb-4">
              All data is verified through blockchain technology and audited by independent agencies. 
              Citizens can verify any transaction through our public ledger.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Badge variant="outline" className="bg-primary/10 text-primary">
                Blockchain Verified
              </Badge>
              <Badge variant="outline" className="bg-success/10 text-success">
                Independently Audited
              </Badge>
              <Badge variant="outline" className="bg-secondary/10 text-secondary">
                Real-time Updates
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;