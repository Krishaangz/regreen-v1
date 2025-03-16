
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 text-center text-sm text-muted-foreground py-6">
      <p>© {new Date().getFullYear()} ReGreen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
