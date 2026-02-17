import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Post } from '../types';
import BlogCard from '../components/BlogCard';

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .order('fecha', { ascending: false });

            if (error) throw error;
            setPosts(data || []);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl">
            <header className="mb-24">
                <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-aether-gray-400 mb-4 uppercase">
                    <span className="w-8 h-[1px] bg-aether-gray-800" />
                    Insights
                </div>
                <h1 className="text-6xl font-serif tracking-tighter">JOURNAL</h1>
                <p className="mt-6 text-sm text-aether-gray-400 font-sans tracking-wide max-w-md leading-relaxed">
                    Thoughts on architectural theory, urban patterns, and the intersection of space and light.
                </p>
            </header>

            {loading ? (
                <div className="flex items-center gap-4 text-[11px] tracking-widest text-aether-gray-400 animate-pulse">
                    <div className="w-4 h-4 rounded-full border border-aether-gray-800 border-t-aether-white animate-spin"></div>
                    INDEXING NARRATIVES...
                </div>
            ) : posts.length === 0 ? (
                <div className="py-20 border-t border-aether-gray-800">
                    <p className="text-xs tracking-widest text-aether-gray-400 italic">No publications found in the current collection.</p>
                </div>
            ) : (
                <div className="space-y-0">
                    {posts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            )}
        </div>
    );
}
