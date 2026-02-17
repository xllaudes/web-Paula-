import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Project, ProjectCategory } from '../types';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filter, setFilter] = useState<ProjectCategory>('Todos');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase
                .from('proyectos')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProjects(data || []);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const categories: ProjectCategory[] = ['Todos', 'Edificación', 'Urbanismo', 'Maquetas'];

    const filteredProjects = filter === 'Todos'
        ? projects
        : projects.filter(p => p.categoria === filter);

    return (
        <div className="max-w-6xl">
            <header className="mb-20">
                <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-aether-gray-400 mb-4 uppercase">
                    <span className="w-8 h-[1px] bg-aether-gray-800" />
                    Archive
                </div>
                <h1 className="text-6xl font-serif tracking-tighter">PROJECTS</h1>
            </header>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-x-12 gap-y-4 mb-20 border-b border-aether-gray-800 pb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`text-[11px] tracking-[0.2em] transition-all duration-300 uppercase ${filter === cat ? 'text-aether-pure font-medium' : 'text-aether-gray-400 hover:text-aether-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            {loading ? (
                <div className="flex items-center gap-4 text-[11px] tracking-widest text-aether-gray-400 animate-pulse">
                    <div className="w-4 h-4 rounded-full border border-aether-gray-800 border-t-aether-white animate-spin"></div>
                    CURATING COLLECTION...
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            )}
        </div>
    );
}
