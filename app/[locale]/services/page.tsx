"use client"

import { motion } from 'framer-motion';
import { Cloud, Code, LineChart, Database, Shield, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Consulting",
      description: "Expert guidance on cloud migration, optimization, and management across major platforms including AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "Cost Optimization", "Architecture Design"]
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies to meet your specific business needs.",
      features: ["Web Applications", "Mobile Apps", "API Development"]
    },
    {
      icon: LineChart,
      title: "IT Strategy",
      description: "Strategic planning and roadmapping to align your technology initiatives with business objectives.",
      features: ["Digital Transformation", "Technology Assessment", "Roadmap Planning"]
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Comprehensive data management and analytics solutions to drive insights and decision-making.",
      features: ["Data Analytics", "Business Intelligence", "Data Warehousing"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions and best practices.",
      features: ["Security Audits", "Compliance", "Threat Protection"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Leverage the power of AI to automate processes and gain competitive advantage.",
      features: ["AI Integration", "ML Models", "Process Automation"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 dark:bg-primary/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT consulting and solutions to drive your digital success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <Icon className="h-12 w-12 mb-4 text-primary" />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}