import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDetail } from '../components/ProjectDetail';
import { PROJECTS, Project } from '../constants';

export const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="space-y-12">
          <h2 className="font-display text-4xl font-bold tracking-tight">All Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};
