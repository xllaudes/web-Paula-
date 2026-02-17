export interface Project {
    id: string;
    titulo: string;
    descripcion: string;
    imagen_url: string;
    categoria: 'Edificación' | 'Urbanismo' | 'Maquetas';
    año?: number;
    created_at?: string;
}

export interface Post {
    id: string;
    titulo: string;
    contenido: string;
    fecha: string;
    categoria?: string;
    created_at?: string;
}

export type ProjectCategory = 'Edificación' | 'Urbanismo' | 'Maquetas' | 'Todos';
