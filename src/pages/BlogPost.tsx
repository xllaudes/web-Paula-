import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Post } from '../types';

export default function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchPost(id);
        }
    }, [id]);

    const fetchPost = async (postId: string) => {
        try {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('id', postId)
                .single();

            if (error) throw error;
            setPost(data);
        } catch (error) {
            console.error('Error fetching post:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        }).toUpperCase();
    };

    if (loading) {
        return (
            <div className="flex items-center gap-4 text-[11px] tracking-widest text-aether-gray-400 animate-pulse">
                <div className="w-4 h-4 rounded-full border border-aether-gray-800 border-t-aether-white animate-spin"></div>
                RETRIEVING CONTENT...
            </div>
        );
    }

    if (!post) {
        return (
            <div className="py-20">
                <p className="text-xs tracking-widest text-aether-gray-400 italic mb-8">Article not found in the archives.</p>
                <button
                    onClick={() => navigate('/blog')}
                    className="text-[10px] tracking-[0.3em] uppercase hover:text-aether-pure transition-colors"
                >
                    ← RETURN TO JOURNAL
                </button>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto">
            <header className="mb-20">
                <button
                    onClick={() => navigate('/blog')}
                    className="group flex items-center gap-3 text-[10px] tracking-[0.3em] mb-12 text-aether-gray-400 hover:text-aether-pure transition-colors uppercase"
                >
                    <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
                    Return to Journal
                </button>

                <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-aether-gray-400 mb-6 uppercase">
                    <span className="w-8 h-[1px] bg-aether-gray-800" />
                    {post.categoria || 'Archive'}
                </div>

                <h1 className="text-6xl font-serif tracking-tighter leading-[1.1] mb-10">
                    {post.titulo}
                </h1>

                <div className="flex items-center gap-12 pt-10 border-t border-aether-gray-800 overflow-x-auto">
                    <div className="whitespace-nowrap">
                        <p className="text-[9px] tracking-[0.2em] text-aether-gray-800 uppercase mb-1">Date</p>
                        <time className="text-[10px] tracking-widest font-sans text-aether-gray-400 uppercase">{formatDate(post.fecha)}</time>
                    </div>
                    <div className="whitespace-nowrap">
                        <p className="text-[9px] tracking-[0.2em] text-aether-gray-800 uppercase mb-1">Author</p>
                        <p className="text-[10px] tracking-widest font-sans text-aether-gray-400 uppercase">PAULA LLAUDES</p>
                    </div>
                    <div className="whitespace-nowrap">
                        <p className="text-[9px] tracking-[0.2em] text-aether-gray-800 uppercase mb-1">Reference</p>
                        <p className="text-[10px] tracking-widest font-sans text-aether-gray-400 uppercase">A-74291</p>
                    </div>
                </div>
            </header>

            <div className="prose prose-invert prose-p:text-aether-gray-400 prose-p:font-sans prose-p:tracking-wide prose-p:leading-loose prose-p:text-lg max-w-none prose-headings:font-serif prose-headings:text-aether-pure">
                <div className="whitespace-pre-wrap">
                    {post.contenido}
                </div>
            </div>

            <footer className="mt-24 pt-16 border-t border-aether-gray-800 text-center">
                <p className="text-[10px] tracking-[0.4em] text-aether-gray-800 uppercase mb-8">Share Narrative</p>
                <div className="flex justify-center gap-12 text-[10px] tracking-[0.3em] text-aether-gray-400 uppercase">
                    <a href="#" className="hover:text-aether-pure transition-colors">Instagram</a>
                    <a href="#" className="hover:text-aether-pure transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-aether-pure transition-colors">Email</a>
                </div>
            </footer>
        </article>
    );
}
