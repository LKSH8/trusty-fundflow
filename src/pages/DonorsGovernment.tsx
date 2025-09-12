import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  BarChart3,
  Lock,
  Globe,
  FileText,
  Download,
  ExternalLink
} from "lucide-react";

const DonorsGovernment = () => {
  const features = [
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Every transaction is recorded on blockchain and publicly auditable. See exactly where your funds go.",
      benefits: ["Real-time tracking", "Public ledger access", "Audit trail verification"]
    },
    {
      icon: Lock,
      title: "Secure & Compliant",
      description: "Bank-grade security with government compliance and regulatory oversight.",
      benefits: ["AES-256 encryption", "Multi-factor authentication", "Regulatory compliance"]
    },
    {
      icon: TrendingUp,
      title: "Impact Measurement",
      description: "Detailed analytics showing the real-world impact of your contributions.",
      benefits: ["Impact metrics", "Beneficiary feedback", "Progress tracking"]
    },
    {
      icon: Users,
      title: "Direct Beneficiary Connect",
      description: "Connect directly with beneficiaries and see their stories of recovery.",
      benefits: ["Success stories", "Photo updates", "Community feedback"]
    }
  ];

  const impactMetrics = [
    { label: "Donation Efficiency", value: "98.7%", description: "Funds reaching beneficiaries" },
    { label: "Processing Speed", value: "4.2 days", description: "Average disbursement time" },
    { label: "Transparency Score", value: "A+", description: "Independent audit rating" },
    { label: "Beneficiary Satisfaction", value: "94.3%", description: "Positive feedback rate" }
  ];

  const partnerBenefits = [
    {
      type: "For Donors",
      benefits: [
        "Tax deduction certificates (80G compliant)",
        "Real-time fund tracking and notifications",
        "Impact reports with photos and stories",
        "Direct communication with field teams",
        "Customizable donation preferences"
      ]
    },
    {
      type: "For Government Agencies",
      benefits: [
        "Streamlined fund management system",
        "Automated compliance reporting",
        "Fraud detection and prevention tools",
        "Public accountability dashboard",
        "Integration with existing systems"
      ]
    },
    {
      type: "For NGOs & Organizations",
      benefits: [
        "Easy application and verification process",
        "Digital documentation management",
        "Performance tracking tools",
        "Capacity building resources",
        "Network collaboration opportunities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Partner with Us for 
              <span className="block text-secondary-light">Transparent Relief</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Join government agencies, donors, and NGOs in creating the most transparent 
              and efficient disaster relief system in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Become a Partner
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <FileText className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-muted-foreground">
              Government agencies, international donors, and NGOs trust our platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
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
              Why Choose Fundify?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for maximum transparency and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-gradient-status">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Benefits for Each Partner Type
            </h2>
            <p className="text-xl text-muted-foreground">
              Customized solutions for different stakeholder needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((partner, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-center text-primary">
                    {partner.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API & Integration */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Easy Integration & APIs
              </h2>
              <p className="text-muted-foreground">
                Seamlessly integrate Fundify with your existing systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    REST API Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete API documentation for seamless integration with your existing systems.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Real-time data access
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Webhook notifications
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Bulk operations support
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    View API Docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Analytics Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Custom analytics dashboard for partners with real-time insights and reporting.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Custom KPI tracking
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Automated reports
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      Data export options
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo Dashboard
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the movement for transparent, efficient, and impactful disaster relief. 
              Let's build a better system together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="hero">
                <Users className="h-5 w-5 mr-2" />
                Start Partnership Process
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Download Partnership Guide
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Government Approved
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Audit Verified
              </div>
              <div className="flex items-center">
                <Lock className="h-4 w-4 mr-1" />
                Bank-Grade Security
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonorsGovernment;