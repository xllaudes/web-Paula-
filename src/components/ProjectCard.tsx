import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const displayIndex = (index + 1).toString().padStart(2, '0');

    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden border border-aether-gray-800 transition-colors duration-500 group-hover:border-aether-white/20">
                {/* Project Image */}
                <img
                    src={project.imagen_url}
                    alt={project.titulo}
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Index Overlay */}
                <span className="absolute top-4 left-4 text-[9px] tracking-widest text-aether-gray-400 font-sans group-hover:text-aether-pure transition-colors">
                    {displayIndex}
                </span>
            </div>

            {/* Project Info */}
            <div className="mt-4 space-y-1">
                <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-lg tracking-tight group-hover:text-aether-pure transition-colors">
                        {project.titulo}
                    </h3>
                    <span className="text-[9px] tracking-[0.2em] text-aether-gray-400 font-sans italic">
                        {project.categoria}
                    </span>
                </div>
                <div className="technical-line opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="flex justify-between items-center text-[10px] tracking-widest text-aether-gray-400 font-sans pt-1">
                    <span>{project.año || '2024'}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">VIEW PROJECT →</span>
                </div>
            </div>
        </div>
    );
}
