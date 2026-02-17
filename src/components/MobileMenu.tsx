import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface MobileMenuProps {
    navItems: Array<{ path: string; label: string }>;
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 z-50 lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-aether-black border border-aether-gray-800 rounded-sm"
                aria-label="Toggle menu"
            >
                <span className={`w-5 h-[1px] bg-aether-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-5 h-[1px] bg-aether-white transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`w-5 h-[1px] bg-aether-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-aether-black/95 backdrop-blur-md z-40 lg:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-8 p-8">
                    {/* Logo */}
                    <Link to="/" onClick={() => setIsOpen(false)} className="mb-8">
                        <div className="w-16 h-16 text-white mb-4 mx-auto">
                            <Logo />
                        </div>
                        <h2 className="text-3xl font-serif tracking-tighter text-center">
                            PAULA<br />LLAUDES
                        </h2>
                    </Link>

                    {/* Navigation Links */}
                    {navItems.map((item, index) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`group flex items-center gap-4 font-sans text-sm tracking-[0.3em] transition-all ${location.pathname === item.path
                                    ? 'text-aether-pure'
                                    : 'text-aether-gray-400 hover:text-aether-white'
                                }`}
                        >
                            <span className="text-xs opacity-30 group-hover:opacity-100 transition-opacity">
                                0{index + 1}
                            </span>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
