export default function About() {
    return (
        <div className="max-w-3xl">
            <header className="mb-20">
                <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-aether-gray-400 mb-4 uppercase">
                    <span className="w-8 h-[1px] bg-aether-gray-800" />
                    Background
                </div>
                <h1 className="text-6xl font-serif tracking-tighter uppercase">ABOUT</h1>
            </header>

            <div className="space-y-16">
                <section className="space-y-8">
                    <p className="text-2xl font-serif leading-relaxed tracking-tight text-aether-pure italic">
                        "Arquitectura es una narrativa de espacio, luz y proporción, diseñada para elevar la experiencia humana."
                    </p>
                    <div className="space-y-6 text-base text-aether-gray-400 font-sans tracking-wide leading-loose">
                        <p>
                            Soy <span className="text-aether-pure">Paula Llaudes</span>, estudiante de Arquitectura apasionada por el diseño
                            que fusiona funcionalidad y estética. Mi enfoque se centra en la búsqueda
                            de soluciones espaciales que respondan a las necesidades contemporáneas.
                        </p>

                        <p>
                            Mi trabajo explora la intersección entre lo técnico y lo artístico,
                            con especial interés en el urbanismo sostenible y la arquitectura minimalista.
                            Creo en una arquitectura que respeta su contexto mientras propone nuevas formas de habitar.
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="pt-8 border-t border-aether-gray-800">
                        <h2 className="text-[10px] tracking-[0.3em] font-sans text-aether-gray-400 mb-6 uppercase">Education</h2>
                        <div className="space-y-2">
                            <p className="text-aether-pure font-serif text-lg tracking-tight">Grado en Fundamentos de Arquitectura</p>
                            <p className="text-[10px] tracking-[0.2em] text-aether-gray-400 uppercase font-sans">ETSAV / UPV • Valencia</p>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-aether-gray-800">
                        <h2 className="text-[10px] tracking-[0.3em] font-sans text-aether-gray-400 mb-6 uppercase">Focus Areas</h2>
                        <ul className="grid grid-cols-1 gap-3">
                            {['Sustainable Design', 'Minimalist Architecture', 'Urban Planning', 'Technical Modeling'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-[11px] tracking-[0.2em] text-aether-gray-400 uppercase">
                                    <span className="w-1.5 h-1.5 border border-aether-gray-800 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
