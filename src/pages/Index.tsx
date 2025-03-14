
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import { ArrowRight, Leaf, Map, Users, Shield, LineChart, Sparkles, Globe, Hand } from "lucide-react";

const Index = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i: number) => ({ 
      y: 0, 
      opacity: 1, 
      transition: { 
        delay: 0.5 + (i * 0.1),
        duration: 0.7,
        type: "spring",
        stiffness: 50
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-regreen-950/90 via-regreen-900/80 to-regreen-950/90 text-white overflow-hidden">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 flex flex-col items-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-regreen-500/10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 bg-regreen-500/20 backdrop-blur-sm text-regreen-300 rounded-full text-sm font-medium mb-4">
              <Sparkles className="inline-block w-4 h-4 mr-2" />
              Eco-Restoration. Reimagined.
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-regreen-100 to-regreen-200"
            variants={itemVariants}
          >
            Transform Eco-Anxiety <br className="hidden md:block" />
            <span className="text-regreen-400">Into Tangible Action</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto text-regreen-100"
            variants={itemVariants}
          >
            ReGreen connects landowners, restoration workers, and community members to 
            convert underutilized spaces into thriving, sustainable environments.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            variants={itemVariants}
          >
            <Button asChild className="bg-gradient-to-r from-regreen-400 to-regreen-600 hover:from-regreen-500 hover:to-regreen-700 text-white border-0 text-lg px-8 py-6 rounded-full group">
              <Link to="/register" className="flex items-center">
                Start Your Journey 
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-regreen-400/50 text-regreen-200 hover:bg-regreen-400/10 text-lg px-8 py-6 rounded-full">
              <Link to="/services">Explore Solutions</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Role Cards Section */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-regreen-900/50 to-regreen-950/80 backdrop-blur-sm z-0"></div>
        
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-regreen-100 to-regreen-300">
              Choose Your Role in the Restoration Movement
            </h2>
            <p className="text-lg text-regreen-200 max-w-3xl mx-auto">
              ReGreen offers personalized experiences based on your role in the ecosystem. Select your path and join the community of environmental changemakers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Landowner",
                icon: Globe,
                description: "Register your unused land for restoration projects, earn passive income, and contribute to local biodiversity.",
                benefits: [
                  "Transform underutilized properties into productive spaces",
                  "Receive expert recommendations for ecological enhancement",
                  "Track your environmental impact in real-time",
                  "Connect with qualified restoration professionals"
                ],
                color: "from-regreen-600 to-regreen-800",
                iconBg: "bg-regreen-700/30",
                delay: 0
              },
              {
                title: "Restoration Worker",
                icon: Hand,
                description: "Apply your skills to ecological projects, earn a sustainable income, and become part of the green economy.",
                benefits: [
                  "Access restoration job opportunities near you",
                  "Build your professional profile and expertise",
                  "Track your completed projects and positive impact",
                  "Earn fair compensation for environmental work"
                ],
                color: "from-blue-600 to-blue-800",
                iconBg: "bg-blue-700/30",
                delay: 1
              },
              {
                title: "Community Member",
                icon: Users,
                description: "Engage with local restoration projects, track environmental improvements, and connect with like-minded individuals.",
                benefits: [
                  "Discover and support restoration projects in your area",
                  "Participate in community events and workshops",
                  "Track environmental improvements in your community",
                  "Network with eco-conscious individuals and organizations"
                ],
                color: "from-amber-600 to-amber-800",
                iconBg: "bg-amber-700/30",
                delay: 2
              }
            ].map((role, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-br from-regreen-900/60 to-regreen-950/60 backdrop-blur-md border border-regreen-600/20 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="p-8">
                  <div className={`${role.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <role.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{role.title}</h3>
                  <p className="text-regreen-200 mb-6">{role.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {role.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-5 h-5 rounded-full bg-regreen-500/20 text-regreen-400 mr-3 flex-shrink-0 mt-0.5 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-sm text-regreen-100">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`w-full bg-gradient-to-r ${role.color} hover:brightness-110 text-white border-0 rounded-xl`}>
                    <Link to={`/register?role=${role.title.toLowerCase()}`} className="flex items-center justify-center">
                      Join as {role.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 bg-regreen-900/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">How ReGreen Works</h2>
            <p className="text-lg text-regreen-200 max-w-3xl mx-auto">
              Our platform connects the right people with the right spaces, enabling efficient ecological restoration at scale.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-24 h-[calc(100%-8rem)] w-0.5 bg-gradient-to-b from-regreen-500/80 via-regreen-400/50 to-regreen-500/80 -translate-x-1/2"></div>
            
            {[
              {
                title: "Register Your Land or Skills",
                description: "Landowners register properties with details on location, size, and potential eco-use. Workers create profiles showcasing their restoration skills and experience.",
                icon: Map,
                delay: 0
              },
              {
                title: "Get Matched",
                description: "Our intelligent system matches restoration projects with qualified workers and community supporters based on location, expertise, and project needs.",
                icon: Users,
                delay: 0.2
              },
              {
                title: "Track Progress",
                description: "Monitor transformation with real-time updates, verification data, and impact metrics that quantify your contribution to environmental restoration.",
                icon: LineChart,
                delay: 0.4
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: step.delay }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-regreen-800/30 backdrop-blur-md border border-regreen-600/20 p-8 rounded-2xl h-full flex flex-col relative">
                  {/* Step number */}
                  <div className="absolute -top-5 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-regreen-400 to-regreen-600 flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  
                  <div className="mt-6">
                    <div className="w-16 h-16 bg-regreen-700/30 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="w-8 h-8 text-regreen-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-regreen-200">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Button asChild className="bg-gradient-to-r from-regreen-400 to-regreen-600 hover:from-regreen-500 hover:to-regreen-700 text-white border-0 text-lg px-8 py-6 rounded-full group">
              <Link to="/register" className="flex items-center">
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Impact Stats Section */}
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-regreen-950/80 to-regreen-900/80 backdrop-blur-sm z-0"></div>
        
        <motion.div 
          className="max-w-6xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Collective Impact</h2>
            <p className="text-lg text-regreen-200 max-w-3xl mx-auto">
              Together, our community is making measurable progress toward environmental restoration and climate resilience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2,500+", label: "Acres Restored", icon: Leaf },
              { number: "750+", label: "Active Projects", icon: Map },
              { number: "1,200+", label: "Restoration Workers", icon: Users },
              { number: "85%", label: "Biodiversity Increase", icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-regreen-800/20 backdrop-blur-sm border border-regreen-600/20 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-regreen-700/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-regreen-400" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-regreen-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-regreen-700 to-regreen-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-regreen-500/10"
              style={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Make a Difference?</h2>
          <p className="text-xl text-regreen-100 mb-10 max-w-3xl mx-auto">
            Join thousands of landowners, workers, and community members already 
            transforming their communities with ReGreen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-regreen-700 hover:bg-regreen-50 hover:text-regreen-800 text-lg px-8 py-6 rounded-full">
              <Link to="/register">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
              <Link to="/services">Learn About Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 bg-regreen-950 text-regreen-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
                alt="ReGreen Logo" 
                className="w-8 h-8" 
              />
              <span className="text-xl font-semibold text-white">ReGreen</span>
            </Link>
            <p className="text-regreen-300">
              Transforming eco-anxiety into actionable eco-restoration.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-regreen-300 transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-regreen-300 transition-colors">Projects</Link></li>
              <li><Link to="/register" className="hover:text-regreen-300 transition-colors">Register</Link></li>
              <li><Link to="/about" className="hover:text-regreen-300 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-regreen-300 transition-colors">Services</Link></li>
              <li><Link to="/help/faq" className="hover:text-regreen-300 transition-colors">FAQ</Link></li>
              <li><Link to="/help/contact" className="hover:text-regreen-300 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-regreen-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-regreen-300 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-regreen-300 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-regreen-300 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-regreen-800 text-center text-regreen-400">
          <p>&copy; {new Date().getFullYear()} ReGreen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
