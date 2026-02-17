import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Home() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // technical drawing
        ctx.strokeStyle = '#222222';
        ctx.lineWidth = 0.5;

        // Large Background Grid
        const step = 100;
        for (let x = 0; x < canvas.width; x += step) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += step) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Technical markings
        ctx.fillStyle = '#444444';
        ctx.font = '9px Inter';
        for (let x = 0; x < canvas.width; x += step * 2) {
            ctx.fillText(`${x}mm`, x + 5, 12);
        }
        for (let y = 0; y < canvas.height; y += step * 2) {
            ctx.fillText(`${y}mm`, 5, y + 12);
        }

    }, []);

    const navLinks = [
        { path: '/portfolio', label: 'PORTFOLIO', num: '01' },
        { path: '/blog', label: 'BLOG', num: '02' },
        { path: '/sobre-mi', label: 'ABOUT', num: '03' },
        { path: '/contacto', label: 'CONTACT', num: '04' },
    ];

    return (
        <div className="relative h-screen bg-aether-black text-aether-white overflow-hidden selection:bg-aether-pure selection:text-aether-black">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />

            {/* Navigation Overlay */}
            <nav className="absolute top-12 left-12 z-20">
                <div className="flex flex-col gap-1">
                    <h2 className="text-3xl font-serif tracking-tighter leading-none">PAULA</h2>
                    <h2 className="text-3xl font-serif tracking-tighter leading-none">LLAUDES</h2>
                    <p className="text-[9px] tracking-[0.4em] text-aether-gray-400 mt-4 uppercase font-medium">Architecture / Design</p>
                </div>
            </nav>

            {/* Hero Main */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                <div className="flex flex-col items-center space-y-12">
                    <div className="relative">
                        <p className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.8em] text-aether-gray-400 uppercase whitespace-nowrap animate-pulse">
                            Foundations of Space
                        </p>
                        <div className="w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] opacity-80 text-white">
                            <Logo />
                        </div>
                    </div>

                    <div className="text-center space-y-6">
                        <h1 className="text-5xl md:text-7xl font-serif tracking-tighter text-white opacity-90 uppercase">
                            PAULA LLAUDES
                        </h1>
                        <div className="flex items-center justify-center gap-12">
                            <div className="w-12 h-[1px] bg-aether-gray-800" />
                            <p className="text-xs font-sans tracking-[0.3em] text-aether-gray-400 italic">Exploring Architectural Narratives</p>
                            <div className="w-12 h-[1px] bg-aether-gray-800" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Navigation */}
            <div className="absolute right-12 top-0 h-full flex flex-col justify-center gap-12 z-20">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className="group flex items-end gap-3 text-right"
                    >
                        <span className="text-[10px] text-aether-gray-400 font-sans tracking-widest opacity-40 group-hover:opacity-100 transition-all duration-500">
                            {link.num}
                        </span>
                        <span className="text-xs font-sans tracking-[0.4em] hover:tracking-[0.6em] transition-all duration-500 border-b border-transparent hover:border-aether-white pb-1">
                            {link.label}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Bottom Technical Bar */}
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-20 pointer-events-none">
                <div className="text-[8px] tracking-[0.3em] text-aether-gray-400 font-mono space-y-1 uppercase">
                    <p>Lat: 39.4699° N</p>
                    <p>Long: 0.3763° W</p>
                </div>
                <div className="text-[8px] tracking-[0.5em] text-aether-gray-400 font-sans uppercase">
                    EST. 2026 / VALENCIA
                </div>
            </div>
        </div>
    );
}
