import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Search, 
  BarChart3, 
  Users, 
  Shield, 
  Eye, 
  TrendingUp,
  MapPin,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Homepage = () => {
  const features = [
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Track every rupee from allocation to disbursement with blockchain verification."
    },
    {
      icon: Search,
      title: "Easy Status Check",
      description: "Check your application status instantly with Aadhaar ID or name."
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboard",
      description: "Public dashboard showing funds allocation, disbursement, and impact metrics."
    },
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "Report suspicious activities and help maintain the integrity of relief funds."
    }
  ];

  const stats = [
    { label: "Funds Disbursed", value: "₹2,847 Cr", change: "+12%" },
    { label: "Beneficiaries Helped", value: "12.4 Lakh", change: "+8%" },
    { label: "Districts Covered", value: "734", change: "+15%" },
    { label: "Success Rate", value: "96.8%", change: "+2%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Every Rupee Reaches the 
                <span className="block text-secondary-light">Right Hands</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Making disaster relief funds transparent, trackable, and fair through 
                blockchain-powered transparency and community verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/status">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Search className="h-5 w-5 mr-2" />
                    Check Status
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Community support and transparency illustration" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="flex items-center justify-center text-success text-sm">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Fundify is Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on trust, powered by technology, designed for transparency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-status">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Quick Actions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started with what you need most
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/status">
              <Card className="text-center shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-dark transition-colors">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Check Your Status
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Verify your application status with Aadhaar ID
                  </p>
                  <Button variant="outline" className="w-full">
                    Check Now
                  </Button>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/dashboard">
              <Card className="text-center shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/80 transition-colors">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Public Dashboard
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time transparency of all fund allocations
                  </p>
                  <Button variant="outline" className="w-full">
                    View Data
                  </Button>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/report">
              <Card className="text-center shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warning/80 transition-colors">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Report Fraud
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Help maintain integrity by reporting issues
                  </p>
                  <Button variant="outline" className="w-full">
                    Report Now
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Trusted by Government & Citizens
              </h3>
              <p className="text-muted-foreground">
                Verified, secure, and transparent relief fund management
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="text-sm font-medium">Government Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Blockchain Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-secondary" />
                <span className="text-sm font-medium">Pan-India Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;