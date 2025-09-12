import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Camera, 
  MapPin, 
  Upload, 
  AlertTriangle, 
  Phone,
  MessageSquare,
  CheckCircle
} from "lucide-react";

const ReportFraud = () => {
  const [formData, setFormData] = useState({
    reporterName: "",
    reporterPhone: "",
    location: "",
    fraudType: "",
    description: "",
    evidence: null as File | null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fraudTypes = [
    "Fake Beneficiary Claims",
    "Duplicate Applications", 
    "False Documentation",
    "Missing Beneficiaries",
    "Incorrect Fund Distribution",
    "Identity Theft",
    "Other Irregularities"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, evidence: file });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background py-16 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <Card className="shadow-elevated bg-gradient-status">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Report Submitted Successfully
              </h1>
              <p className="text-muted-foreground mb-6">
                Thank you for helping us maintain transparency. Your report has been received 
                and will be investigated by our dedicated team within 48 hours.
              </p>
              <div className="bg-white/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-foreground">
                  <strong>Reference ID:</strong> FR-2024-{Math.random().toString(36).substr(2, 8).toUpperCase()}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Keep this reference ID for tracking your report status
                </p>
              </div>
              <Button onClick={() => setSubmitted(false)} className="mr-4">
                Submit Another Report
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "/"}>
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Report Fraud or Irregularities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us maintain the integrity of relief funds by reporting suspicious activities, 
            missing beneficiaries, or any irregularities you've witnessed.
          </p>
        </div>

        {/* Alert Notice */}
        <Card className="max-w-4xl mx-auto mb-8 bg-warning/10 border-warning/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All reports are treated confidentially and securely</li>
                  <li>• False reports may lead to legal consequences</li>
                  <li>• Provide accurate information to help our investigation</li>
                  <li>• You may remain anonymous if preferred</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Report Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Report Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Reporter Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">Your Information (Optional)</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name
                          </label>
                          <Input
                            placeholder="Your name (optional)"
                            value={formData.reporterName}
                            onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            placeholder="Your phone number (optional)"
                            value={formData.reporterPhone}
                            onChange={(e) => setFormData({ ...formData, reporterPhone: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Incident Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-foreground">Incident Details</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Location *
                        </label>
                        <Input
                          placeholder="District, State or specific location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Type of Fraud/Irregularity *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {fraudTypes.map((type) => (
                            <Badge
                              key={type}
                              variant={formData.fraudType === type ? "default" : "outline"}
                              className={`cursor-pointer text-center p-2 h-auto ${
                                formData.fraudType === type ? "bg-primary" : ""
                              }`}
                              onClick={() => setFormData({ ...formData, fraudType: type })}
                            >
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Detailed Description *
                        </label>
                        <Textarea
                          placeholder="Please provide as much detail as possible about what you witnessed or suspect. Include names, dates, amounts, and any other relevant information."
                          rows={6}
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Evidence (Optional)
                        </label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                          <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Upload photos, documents, or other evidence
                          </p>
                          <input
                            type="file"
                            accept="image/*,application/pdf"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="evidence-upload"
                          />
                          <label htmlFor="evidence-upload">
                            <Button type="button" variant="outline" size="sm" asChild>
                              <span>
                                <Upload className="h-4 w-4 mr-2" />
                                Choose File
                              </span>
                            </Button>
                          </label>
                          {formData.evidence && (
                            <p className="text-sm text-success mt-2">
                              File selected: {formData.evidence.name}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting || !formData.location || !formData.fraudType || !formData.description}
                    >
                      {isSubmitting ? "Submitting Report..." : "Submit Report"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Fraud Helpline</p>
                      <p className="text-sm text-muted-foreground">1800-XXX-FRAUD</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <MessageSquare className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">WhatsApp Support</p>
                      <p className="text-sm text-muted-foreground">+91-XXXXX-XXXXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Fraud Types */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Common Fraud Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• People claiming benefits multiple times</li>
                    <li>• Beneficiaries who don't exist in reality</li>
                    <li>• Officials asking for money or bribes</li>
                    <li>• Incorrect or fake documentation</li>
                    <li>• Funds not reaching genuine victims</li>
                    <li>• Suspicious verification processes</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Anonymity Notice */}
              <Card className="shadow-card bg-success/10 border-success/20">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-success mb-1">
                        Your Privacy is Protected
                      </p>
                      <p className="text-xs text-success/80">
                        All reports are handled confidentially. You can choose to remain anonymous.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportFraud;