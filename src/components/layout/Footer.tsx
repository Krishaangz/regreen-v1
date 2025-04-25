
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-sm text-muted-foreground py-2">
      <p>© {new Date().getFullYear()} ReGreen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
