import { Link } from "react-router-dom";
import { Shield, Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-hero rounded-xl">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Fundify</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Making disaster relief funds transparent, trackable, and fair. 
              Every rupee reaches the right hands through blockchain-powered transparency.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@fundify.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1800-XXX-XXXX (Toll Free)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/status" className="hover:text-foreground transition-colors">
                  Check Status
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-foreground transition-colors">
                  Public Dashboard
                </Link>
              </li>
              <li>
                <Link to="/donors" className="hover:text-foreground transition-colors">
                  For Donors & Govt
                </Link>
              </li>
              <li>
                <Link to="/report" className="hover:text-foreground transition-colors">
                  Report Fraud
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners & Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Partners</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-1">
                <span>Ministry of Home Affairs</span>
                <ExternalLink className="h-3 w-3" />
              </li>
              <li className="flex items-center space-x-1">
                <span>National Disaster Management Authority</span>
                <ExternalLink className="h-3 w-3" />
              </li>
              <li className="flex items-center space-x-1">
                <span>Digital India</span>
                <ExternalLink className="h-3 w-3" />
              </li>
              <li className="flex items-center space-x-1">
                <span>Jan Aushadhi</span>
                <ExternalLink className="h-3 w-3" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 Fundify - Government of India. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-foreground transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;