
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const PropertyRegistrationGuide = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    toast({
      title: "Guide Downloaded",
      description: "Property registration guide has been downloaded",
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="flex items-center mb-6">
        <Button variant="outline" size="sm" className="mr-4" asChild>
          <Link to="/help">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Help Center
          </Link>
        </Button>
      </div>
      
      <Card className="mb-6 border-l-4 border-l-regreen-600">
        <CardHeader>
          <CardTitle className="text-3xl">Property Registration Guide</CardTitle>
          <CardDescription>
            Step-by-step instructions for landowners to register their properties for restoration projects
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">1. Property Verification</h3>
              <p>Before registering your property with ReGreen, ensure you have the following documentation ready:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Proof of ownership (deed, land title, or property tax statement)</li>
                <li>Property boundaries description or survey</li>
                <li>Recent photos of the property (if available)</li>
                <li>Any existing ecological assessment reports (optional)</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6">2. Create Your Account</h3>
              <p>If you haven't already, create a landowner account on the ReGreen platform:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Click on "Register" in the top navigation</li>
                <li>Select "Landowner" as your role</li>
                <li>Complete your profile with accurate contact information</li>
                <li>Verify your email address</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6">3. Access the Property Registration Form</h3>
              <p>Once your account is set up:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Navigate to "My Properties" in your dashboard</li>
                <li>Click on "Add New Property"</li>
                <li>You'll be guided through our multi-step registration process</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Registration Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">4. Property Details</h3>
              <p>In the first step, you'll provide basic information about your property:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Property name (for easy reference)</li>
                <li>Physical address and/or GPS coordinates</li>
                <li>Total acreage</li>
                <li>Current land use</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6">5. Ecological Information</h3>
              <p>Next, provide details about the current ecological state of your property:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Primary ecosystem types (forest, grassland, wetland, etc.)</li>
                <li>Known plant and wildlife species</li>
                <li>Current environmental challenges (erosion, invasive species, etc.)</li>
                <li>Previous conservation or restoration efforts (if any)</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6">6. Upload Documentation</h3>
              <p>Attach the necessary documents to support your registration:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Proof of ownership documents</li>
                <li>Property boundaries (upload maps or GIS files if available)</li>
                <li>Recent photos showing the current state of the property</li>
                <li>Any relevant permits or existing conservation agreements</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6">7. Restoration Goals</h3>
              <p>Share your vision and objectives for the property:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Primary restoration goals</li>
                <li>Specific areas of concern or priority</li>
                <li>Timeline expectations</li>
                <li>Budget considerations and funding sources</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-medium">8. Review and Submit</h3>
              <p>Before finalizing your registration:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Review all information for accuracy</li>
                <li>Confirm your contact details are current</li>
                <li>Read and accept the terms and conditions</li>
                <li>Submit your registration</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6">9. Verification Process</h3>
              <p>After submission, your property registration will undergo verification:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Initial review by our team (1-2 business days)</li>
                <li>Possible request for additional information</li>
                <li>Scheduling of a preliminary assessment visit (if needed)</li>
                <li>Final approval of registration</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6">10. Begin Your Restoration Journey</h3>
              <p>Once your property is registered and verified:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Receive a comprehensive ecological assessment</li>
                <li>Explore recommended restoration projects</li>
                <li>Connect with restoration professionals and volunteers</li>
                <li>Start planning your first restoration initiative</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-regreen-600 hover:bg-regreen-700 text-white w-full mt-4"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Complete Guide (PDF)
              </Button>
            </CardFooter>
          </Card>
          
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link to="/help">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Help Center
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/help/landowners/monitoring">
                Monitoring Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Related Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-regreen-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Property Assessment Guide</h3>
                  <p className="text-sm text-muted-foreground">Understanding the ecological assessment process</p>
                  <Button variant="link" className="text-regreen-600 p-0 h-auto mt-1" onClick={handleDownload}>
                    Download PDF
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-regreen-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Landowner Tax Benefits</h3>
                  <p className="text-sm text-muted-foreground">Financial incentives for ecological restoration</p>
                  <Button variant="link" className="text-regreen-600 p-0 h-auto mt-1" onClick={handleDownload}>
                    Download PDF
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-regreen-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Conservation Easements</h3>
                  <p className="text-sm text-muted-foreground">Long-term protection options for your land</p>
                  <Button variant="link" className="text-regreen-600 p-0 h-auto mt-1" onClick={handleDownload}>
                    Download PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our team is ready to assist you with the property registration process.</p>
              <Button className="w-full" asChild>
                <Link to="/help/contact">
                  Contact Support
                </Link>
              </Button>
              <div className="text-sm text-muted-foreground mt-2">
                Or call us directly at:<br />
                <span className="font-medium">1-800-REGREEN (734-7336)</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h3 className="font-medium">How long does registration take?</h3>
                <p className="text-sm text-muted-foreground">Typically 3-5 business days from submission to approval.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Is there a minimum property size?</h3>
                <p className="text-sm text-muted-foreground">No minimum size, but restoration approaches vary by property scale.</p>
              </div>
              
              <div>
                <h3 className="font-medium">What if I'm missing documents?</h3>
                <p className="text-sm text-muted-foreground">Our team can guide you through alternatives or how to obtain needed documentation.</p>
              </div>
              
              <Button variant="link" className="text-regreen-600 p-0 h-auto mt-1" asChild>
                <Link to="/help/faq">
                  View All FAQs
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PropertyRegistrationGuide;
