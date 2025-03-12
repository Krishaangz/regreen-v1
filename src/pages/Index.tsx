
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Map, Users, Shield, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-24 px-4 sm:px-6 flex flex-col items-center text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Eco-Anxiety Into Action
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            ReGreen connects landowners, workers, and communities to convert underutilized spaces
            into thriving, sustainable environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild className="bg-white text-regreen-700 hover:bg-regreen-50 hover:text-regreen-800 text-lg px-8 py-6">
              <Link to="/register">Join ReGreen</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 bg-regreen-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-regreen-800">How ReGreen Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Register Your Land",
                description: "Landowners register properties with details on location, size, and potential eco-use.",
                icon: Map,
                delay: "0"
              },
              {
                title: "Get Matched",
                description: "Our AI matches your project with skilled workers in your area.",
                icon: Users,
                delay: "150"
              },
              {
                title: "Track Progress",
                description: "Monitor transformation with real-time updates and verification.",
                icon: LineChart,
                delay: "300"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md card-hover flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className="w-16 h-16 bg-regreen-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-regreen-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-regreen-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-regreen-600 hover:bg-regreen-700 text-white">
              <Link to="/register" className="inline-flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Before/After Showcase */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-regreen-800">Transformations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            See how ReGreen has helped transform neglected spaces into thriving ecosystems
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="before-after-slider bg-regreen-100 aspect-video rounded-xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="h-full flex items-center justify-center text-regreen-700">
                <p className="text-xl font-medium">Before/After Slider 1</p>
              </div>
            </div>
            <div className="before-after-slider bg-regreen-100 aspect-video rounded-xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="h-full flex items-center justify-center text-regreen-700">
                <p className="text-xl font-medium">Before/After Slider 2</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-regreen-600 text-regreen-600 hover:bg-regreen-50">
              <Link to="/projects" className="inline-flex items-center">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 bg-earth-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-regreen-800">Benefits</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Impact",
                description: "Restore biodiversity, improve air quality, and combat climate change.",
                icon: Leaf,
                delay: "0"
              },
              {
                title: "Economic Growth",
                description: "Create sustainable jobs and increase property values in your community.",
                icon: LineChart,
                delay: "150"
              },
              {
                title: "Community Well-being",
                description: "Develop shared green spaces that improve health and social connections.",
                icon: Shield,
                delay: "300"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md card-hover animate-fade-in"
                style={{ animationDelay: `${benefit.delay}ms` }}
              >
                <div className="w-12 h-12 bg-regreen-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-regreen-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-regreen-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-regreen-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of landowners, workers, and community members already 
            transforming their communities with ReGreen.
          </p>
          <Button asChild className="bg-white text-regreen-700 hover:bg-regreen-50 hover:text-regreen-800 text-lg px-8 py-6">
            <Link to="/register">Get Started Today</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 bg-regreen-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
                alt="ReGreen Logo" 
                className="w-8 h-8" 
              />
              <span className="text-xl font-semibold">ReGreen</span>
            </Link>
            <p className="text-regreen-100">
              Transforming eco-anxiety into actionable eco-restoration.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-regreen-300">Home</Link></li>
              <li><Link to="/projects" className="hover:text-regreen-300">Projects</Link></li>
              <li><Link to="/register" className="hover:text-regreen-300">Register</Link></li>
              <li><Link to="/about" className="hover:text-regreen-300">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-regreen-300">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-regreen-300">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-regreen-300">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-regreen-300">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-regreen-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-regreen-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-regreen-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-regreen-800 text-center text-regreen-300">
          <p>&copy; {new Date().getFullYear()} ReGreen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
