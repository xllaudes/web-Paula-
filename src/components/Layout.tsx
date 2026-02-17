import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'HOME' },
        { path: '/portfolio', label: 'PORTFOLIO' },
        { path: '/blog', label: 'BLOG' },
        { path: '/sobre-mi', label: 'ABOUT' },
        { path: '/contacto', label: 'CONTACT' },
    ];

    return (
        <div className="flex min-h-screen bg-aether-black text-aether-white">
            {/* Fixed Sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-64 border-r border-aether-gray-800 p-8 flex flex-col justify-between">
                <div>
                    <Link to="/" className="block group">
                        <div className="w-10 h-10 mb-6 text-white group-hover:text-aether-pure transition-colors">
                            <Logo />
                        </div>
                        <h1 className="text-2xl font-serif leading-none mb-1 tracking-tighter">
                            PAULA
                            <br />
                            LLAUDES
                        </h1>
                        <p className="text-[10px] font-sans tracking-[0.3em] text-aether-gray-400 mt-2 uppercase">
                            Architecture Studio
                        </p>
                    </Link>

                    <nav className="mt-20 space-y-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`group flex items-center gap-4 font-sans text-[11px] tracking-[0.2em] transition-all duration-300 ${location.pathname === item.path
                                    ? 'text-aether-pure'
                                    : 'text-aether-gray-400 hover:text-aether-white'
                                    }`}
                            >
                                <span className="text-[9px] opacity-30 group-hover:opacity-100 transition-opacity">
                                    0{index + 1}
                                </span>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="pt-8 border-t border-aether-gray-800 text-[9px] text-aether-gray-400 tracking-widest leading-loose">
                    © 2026 PAULA LLAUDES<br />
                    ALL RIGHTS RESERVED
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1">
                <div className="min-h-screen p-16">
                    {children}
                </div>
            </main>
        </div>
    );
}
