import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, User, MapPin, Calendar, CreditCard } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";

const StatusCheck = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration
  const mockResults = [
    {
      id: "BF2024001234",
      name: "राम कुमार शर्मा (Ram Kumar Sharma)",
      aadhaar: "XXXX-XXXX-1234",
      status: "approved",
      amount: "₹25,000",
      district: "Patna, Bihar",
      appliedDate: "15 Jan 2024",
      approvedDate: "22 Jan 2024",
      disbursementDate: "25 Jan 2024",
      bankAccount: "XXXX-XXXX-5678",
      reason: "Flood Relief - House Damage"
    },
    {
      id: "BF2024001235",
      name: "सुनीता देवी (Sunita Devi)",
      aadhaar: "XXXX-XXXX-5678",
      status: "pending",
      amount: "₹15,000",
      district: "Gaya, Bihar",
      appliedDate: "20 Jan 2024",
      reason: "Crop Loss - Drought Relief"
    }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockResults);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Check Your Application Status
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your Aadhaar number or full name to check the status of your relief fund application
          </p>
        </div>

        {/* Search Section */}
        <Card className="max-w-2xl mx-auto mb-12 shadow-card">
          <CardHeader>
            <CardTitle className="text-center">Search by Aadhaar ID or Name</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Enter Aadhaar number (XXXX-XXXX-1234) or Full Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button 
                onClick={handleSearch} 
                disabled={isLoading || !searchQuery.trim()}
                size="lg"
                className="sm:w-auto"
              >
                {isLoading ? (
                  "Searching..."
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </>
                )}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Your information is secure and encrypted. We only show last 4 digits of sensitive data.
            </p>
          </CardContent>
        </Card>

        {/* Results Section */}
        {searchResults.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Search Results ({searchResults.length} found)
            </h2>
            
            <div className="space-y-6">
              {searchResults.map((result) => (
                <Card key={result.id} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Basic Information */}
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {result.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Application ID: {result.id}
                            </p>
                          </div>
                          <StatusBadge status={result.status} />
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <User className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-muted-foreground">Aadhaar:</span>
                            <span className="ml-2 font-medium">{result.aadhaar}</span>
                          </div>
                          
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-muted-foreground">Location:</span>
                            <span className="ml-2 font-medium">{result.district}</span>
                          </div>
                          
                          <div className="flex items-center text-sm">
                            <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-muted-foreground">Amount:</span>
                            <span className="ml-2 font-semibold text-primary">{result.amount}</span>
                          </div>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Application Timeline</h4>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-muted-foreground">Applied:</span>
                            <span className="ml-2">{result.appliedDate}</span>
                          </div>
                          
                          {result.approvedDate && (
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-2 text-success" />
                              <span className="text-muted-foreground">Approved:</span>
                              <span className="ml-2">{result.approvedDate}</span>
                            </div>
                          )}
                          
                          {result.disbursementDate && (
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              <span className="text-muted-foreground">Disbursed:</span>
                              <span className="ml-2">{result.disbursementDate}</span>
                            </div>
                          )}

                          {result.bankAccount && (
                            <div className="flex items-center text-sm">
                              <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-muted-foreground">Bank A/C:</span>
                              <span className="ml-2">{result.bankAccount}</span>
                            </div>
                          )}
                        </div>

                        <div className="mt-4 p-3 bg-muted rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Reason:</strong> {result.reason}
                          </p>
                        </div>
                      </div>
                    </div>

                    {result.status === "approved" && (
                      <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                        <p className="text-success text-sm font-medium">
                          ✅ Your application has been approved and funds have been disbursed to your registered bank account.
                        </p>
                      </div>
                    )}

                    {result.status === "pending" && (
                      <div className="mt-6 p-4 bg-warning/10 rounded-lg border border-warning/20">
                        <p className="text-foreground text-sm font-medium">
                          ⏳ Your application is under review. You will receive an SMS notification once processed.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="max-w-2xl mx-auto mt-16">
          <Card className="shadow-card bg-gradient-status">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Need Help?
              </h3>
              <p className="text-muted-foreground mb-4">
                If you can't find your application or have questions, contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline">
                  📞 Call: 1800-XXX-XXXX
                </Button>
                <Button variant="outline">
                  💬 WhatsApp Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StatusCheck;