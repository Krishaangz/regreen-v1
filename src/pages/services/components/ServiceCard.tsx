
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
  buttonAction: () => void | string;
  isLink?: boolean;
  linkTo?: string;
  loading?: boolean;
};

const ServiceCard = ({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  description,
  features,
  buttonText,
  buttonColor,
  buttonAction,
  isLink = false,
  linkTo = "",
  loading = false,
}: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="text-center pb-3">
        <div className={`w-14 h-14 rounded-full ${iconBgColor} flex items-center justify-center mx-auto mb-4`}>
          <Icon className={`h-7 w-7 ${iconColor}`} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className={`h-4 w-4 ${iconColor} flex-shrink-0 mt-0.5`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {isLink ? (
          <Button asChild className={`w-full ${buttonColor}`}>
            <Link to={linkTo}>
              {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button 
            className={`w-full ${buttonColor}`}
            onClick={typeof buttonAction === 'function' ? buttonAction : undefined}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Processing...
              </>
            ) : (
              <>{buttonText}</>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
