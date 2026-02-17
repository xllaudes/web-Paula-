import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

            if (!webhookUrl) {
                throw new Error('Webhook URL not configured');
            }

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('success');
            setFormData({ nombre: '', email: '', mensaje: '' });

            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <div className="max-w-3xl">
            <header className="mb-20">
                <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-aether-gray-400 mb-4 uppercase">
                    <span className="w-8 h-[1px] bg-aether-gray-800" />
                    Connect
                </div>
                <h1 className="text-6xl font-serif tracking-tighter uppercase">CONTACT</h1>
                <p className="mt-6 text-sm text-aether-gray-400 font-sans tracking-wide max-w-md leading-relaxed">
                    Have a project in mind or want to discuss architectural concepts? Send a transmission.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group">
                        <label htmlFor="nombre" className="block text-[10px] tracking-[0.3em] font-sans text-aether-gray-400 mb-2 uppercase group-focus-within:text-aether-pure transition-colors">
                            Name
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            required
                            placeholder="Type your name..."
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className="w-full bg-transparent border-b border-aether-gray-800 py-3 font-sans text-sm focus:outline-none focus:border-aether-pure transition-colors placeholder:text-aether-gray-800"
                        />
                    </div>

                    <div className="relative group">
                        <label htmlFor="email" className="block text-[10px] tracking-[0.3em] font-sans text-aether-gray-400 mb-2 uppercase group-focus-within:text-aether-pure transition-colors">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="Your email address..."
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent border-b border-aether-gray-800 py-3 font-sans text-sm focus:outline-none focus:border-aether-pure transition-colors placeholder:text-aether-gray-800"
                        />
                    </div>
                </div>

                <div className="relative group">
                    <label htmlFor="mensaje" className="block text-[10px] tracking-[0.3em] font-sans text-aether-gray-400 mb-2 uppercase group-focus-within:text-aether-pure transition-colors">
                        Message
                    </label>
                    <textarea
                        id="mensaje"
                        required
                        rows={5}
                        placeholder="Write your message here..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="w-full bg-transparent border-b border-aether-gray-800 py-3 font-sans text-sm resize-none focus:outline-none focus:border-aether-pure transition-colors placeholder:text-aether-gray-800"
                    />
                </div>

                <div className="flex items-center gap-8 pt-4">
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="group relative flex items-center justify-center p-0 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="flex items-center gap-4 bg-aether-pure text-aether-black px-12 py-4 font-sans text-xs tracking-[0.3em] uppercase hover:bg-white transition-colors">
                            {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </button>

                    {status === 'success' && (
                        <p className="text-[10px] tracking-widest text-emerald-500 font-sans uppercase animate-fade-in">
                            ✓ Transmission received successfully
                        </p>
                    )}

                    {status === 'error' && (
                        <p className="text-[10px] tracking-widest text-rose-500 font-sans uppercase animate-fade-in">
                            ✗ Transmission failed. Please try again.
                        </p>
                    )}
                </div>
            </form>

            <footer className="mt-32 pt-16 border-t border-aether-gray-800 grid grid-cols-1 md:grid-cols-3 gap-12 text-[10px] tracking-[0.3em] text-aether-gray-400 uppercase leading-loose">
                <div>
                    <h3 className="text-aether-white mb-4">Location</h3>
                    <p>Carrer de la Paz, 14<br />46003 València, Spain</p>
                </div>
                <div>
                    <h3 className="text-aether-white mb-4">Social</h3>
                    <div className="flex flex-col">
                        <a href="#" className="hover:text-aether-pure transition-colors">Instagram</a>
                        <a href="#" className="hover:text-aether-pure transition-colors">LinkedIn</a>
                    </div>
                </div>
                <div>
                    <h3 className="text-aether-white mb-4">Availability</h3>
                    <p>Open for selected commissions<br />Starting Q3 2026</p>
                </div>
            </footer>
        </div>
    );
}
