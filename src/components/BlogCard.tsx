import type { Post } from '../types';
import { Link } from 'react-router-dom';

interface BlogCardProps {
    post: Post;
    index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        }).toUpperCase();
    };

    const displayIndex = (index + 1).toString().padStart(2, '0');

    return (
        <Link
            to={`/blog/${post.id}`}
            className="group block border-t border-aether-gray-800 py-10 transition-all duration-500 hover:bg-aether-gray-900/50"
        >
            <div className="flex items-start gap-12">
                <span className="text-[10px] tracking-widest text-aether-gray-400 font-sans opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap pt-2">
                    {displayIndex} —
                </span>

                <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start gap-8">
                        <h3 className="font-serif text-3xl tracking-tight group-hover:text-aether-pure transition-colors">
                            {post.titulo}
                        </h3>
                        <time className="text-[9px] tracking-[0.2em] text-aether-gray-400 font-sans pt-2 whitespace-nowrap">
                            {formatDate(post.fecha)}
                        </time>
                    </div>

                    <div className="flex items-center gap-6">
                        {post.categoria && (
                            <span className="text-[9px] tracking-[0.3em] text-aether-gray-400 font-sans uppercase border border-aether-gray-800 px-2 py-1 group-hover:border-aether-white/20 transition-colors">
                                {post.categoria}
                            </span>
                        )}
                        <p className="text-[10px] tracking-widest text-aether-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-[-10px] group-hover:translate-x-0">
                            READ ARTICLE →
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
