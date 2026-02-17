import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Admin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                navigate('/');
                return;
            }

            setUser(session.user);
        } catch (error) {
            console.error('Error checking auth:', error);
            navigate('/');
        } finally {
            setLoading(false);
        }
    };

    const handleSignIn = async () => {
        try {
            await supabase.auth.signInWithOAuth({
                provider: 'google',
            });
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const handleSignOut = async () => {
        try {
            await supabase.auth.signOut();
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center gap-4 text-[11px] tracking-widest text-aether-gray-400 animate-pulse">
                <div className="w-4 h-4 rounded-full border border-aether-gray-800 border-t-aether-white animate-spin"></div>
                VERIFYING ACCESS...
            </div>
        );
    }

    if (!user) {
        return (
            <div className="max-w-2xl">
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-aether-gray-400 mb-4 uppercase">
                        <span className="w-8 h-[1px] bg-aether-gray-800" />
                        Authentication
                    </div>
                    <h1 className="text-4xl font-serif tracking-tighter uppercase">ACCESS DEFERRED</h1>
                </header>
                <button
                    onClick={handleSignIn}
                    className="bg-aether-pure text-aether-black px-8 py-3 font-sans text-xs tracking-[0.3em] uppercase hover:bg-white transition-colors"
                >
                    SIGN IN WITH GOOGLE
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl">
            <header className="flex justify-between items-end mb-16 pb-8 border-b border-aether-gray-800">
                <div>
                    <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-aether-gray-400 mb-4 uppercase">
                        <span className="w-8 h-[1px] bg-aether-gray-800" />
                        Control Center
                    </div>
                    <h1 className="text-4xl font-serif tracking-tighter uppercase">ADMIN PANEL</h1>
                </div>
                <button
                    onClick={handleSignOut}
                    className="text-[10px] tracking-widest text-aether-gray-400 hover:text-rose-500 transition-colors uppercase font-sans mb-1"
                >
                    terminate session [X]
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-aether-gray-800 p-10 hover:border-aether-white/20 transition-colors group">
                    <h2 className="font-serif text-2xl tracking-tight mb-4 group-hover:text-aether-pure transition-colors">PROJECTS ARCHIVE</h2>
                    <p className="text-xs text-aether-gray-400 tracking-wide mb-8 leading-relaxed">
                        Add, modify or remove spatial narratives from the collection.
                    </p>
                    <button className="w-full border border-aether-gray-800 px-6 py-4 font-sans text-[10px] tracking-[0.3em] uppercase hover:bg-aether-pure hover:text-aether-black transition-all">
                        + NEW PROJECT ENTITY
                    </button>
                </div>

                <div className="border border-aether-gray-800 p-10 hover:border-aether-white/20 transition-colors group">
                    <h2 className="font-serif text-2xl tracking-tight mb-4 group-hover:text-aether-pure transition-colors">JOURNAL ENTRIES</h2>
                    <p className="text-xs text-aether-gray-400 tracking-wide mb-8 leading-relaxed">
                        Publish, edit or delete insights and theoretical thoughts.
                    </p>
                    <button className="w-full border border-aether-gray-800 px-6 py-4 font-sans text-[10px] tracking-[0.3em] uppercase hover:bg-aether-pure hover:text-aether-black transition-all">
                        + NEW JOURNAL RECORD
                    </button>
                </div>
            </div>

            <div className="mt-12 p-6 border border-dashed border-aether-gray-800 opacity-50">
                <p className="text-[9px] tracking-[0.2em] font-sans text-aether-gray-400 uppercase text-center">
                    Authorized User: {user.email} // System Status: Nominal
                </p>
            </div>
        </div>
    );
}
