import React from 'react';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { STAGGER } from '@/lib/animations';

export const AnimatedSection = () => {
  return (
    <SectionContainer 
      id="animated-example"
      background="light"
      spacing="default"
      reveal={true}
      direction="up"
      threshold={0.1}
    >
      <SectionHeader
        title="Animated Components"
        subtitle="Using our standardized animation system for consistent motion throughout the site"
        centered={true}
        reveal={true}
        direction="up"
        delay={0.1}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <StaggerContainer delay={0.2} staggerChildren={STAGGER.standard}>
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2">Entrance Animations</h3>
            <p className="text-gray-600 mb-4">Components reveal themselves as they enter the viewport</p>
            <Button 
              variant="default" 
              className="mt-auto"
              hover={true}
              tap={true}
            >
              Learn More
            </Button>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2">Interactive Animations</h3>
            <p className="text-gray-600 mb-4">Elements respond to user interaction with consistent feedback</p>
            <Button 
              variant="outline" 
              className="mt-auto"
              hover={true}
              tap={true}
            >
              Try It Out
            </Button>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2">Staggered Sequences</h3>
            <p className="text-gray-600 mb-4">Related elements animate in sequence for a polished effect</p>
            <Button 
              variant="secondary" 
              className="mt-auto"
              hover={true}
              tap={true}
            >
              View Examples
            </Button>
          </div>
        </StaggerContainer>
      </div>
    </SectionContainer>
  );
}
