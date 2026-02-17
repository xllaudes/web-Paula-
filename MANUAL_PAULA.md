# 📔 Manual de Gestión: Paula Llaudes — Studio

Bienvenida a tu nueva plataforma arquitectónica. Este manual te guiará paso a paso para que puedas gestionar tu portfolio, blog y contenido de forma autónoma.

---

## 1. El Corazón de la Web: Supabase
Para gestionar los datos dinámicos (proyectos y blog), utilizamos **Supabase**. Es tu panel de control (CMS) donde podrás añadir, editar o borrar contenido.

### Acceso:
1. Entra en [Supabase.com](https://supabase.com/) e inicia sesión con tu cuenta.
2. Selecciona tu proyecto: **paula-arquitectura** (o el nombre asignado).
3. En la barra lateral izquierda, haz clic en el icono de tabla (**Table Editor**).

---

## 2. Gestión del Portfolio (Proyectos)
Aquí es donde aparecen los trabajos que se ven en la sección "Projects".

### Cómo añadir un nuevo proyecto:
1. En el **Table Editor**, selecciona la tabla `proyectos`.
2. Haz clic en el botón **Insert row** (arriba a la derecha).
3. Rellena los campos:
   - **titulo**: Nombre del proyecto (ej: *Residencia AETHER*).
   - **descripcion**: Breve explicación del concepto arquitectónico.
   - **imagen_url**: Aquí debes pegar el enlace de la imagen. 
     - *Tip: Puedes subir imágenes a la sección **Storage** de Supabase y copiar el "Public URL"*.
   - **categoria**: Debe ser exactamente una de estas tres: `Edificación`, `Urbanismo` o `Maquetas`.
   - **año**: El año de realización (ej: *2024*).
4. Haz clic en **Save** y el proyecto aparecerá instantáneamente en la web.

### Cómo editar o borrar:
- Haz doble clic sobre cualquier celda para cambiar el texto.
- Para borrar, selecciona la fila (check a la izquierda) y dale a **Delete row**.

---

## 3. Gestión del Journal (Blog)
Tus artículos y reflexiones teóricas se gestionan en la tabla `posts`.

### Cómo publicar un nuevo artículo:
1. Selecciona la tabla `posts` en el Table Editor.
2. Haz clic en **Insert row**.
3. Rellena los campos:
   - **titulo**: El titular del artículo.
   - **contenido**: El texto completo. Puedes usar saltos de línea para párrafos.
   - **fecha**: La fecha de publicación (formato AAAA-MM-DD).
   - **categoria**: (Opcional) Ej: *Teoría*, *Urbanismo*, *Viajes*.
4. Haz clic en **Save**.

---

## 4. Gestión de Imágenes (Storage)
Para que las imágenes se vean en la web, deben estar alojadas en internet. Supabase incluye un espacio para esto:

1. Ve a la sección **Storage** (icono de cubo en la barra lateral).
2. Entra en el bucket o carpeta especificada (ej: `portfolio-images`).
3. Sube tus archivos (JPG/PNG).
4. Haz clic en el archivo subido y selecciona **Get Public URL**. Ese es el enlace que debes pegar en el campo `imagen_url` de las tablas.

---

## 5. Información Estática (Sobre Mí / Contacto)
Algunas secciones de la web son "estáticas" por diseño (el texto no cambia frecuentemente). 

- **Editar "About" o "Contact"**: Actualmente estos textos están integrados en el código para mantener la precisión estética del estilo *AETHER*.
- **Para cambiarlos**: Puedes pedírmelo directamente ("Cambia el texto de la sección About por este...") o, si te sientes valiente, editar los archivos `src/pages/About.tsx` y `src/pages/Contact.tsx`.

---

## 6. Formulario de Contacto
Cuando alguien te escriba a través de la web:
1. Los mensajes se envían automáticamente a través de un servicio llamado **n8n**.
2. Llegarán directamente a tu correo electrónico configurado.
3. *Nota*: Asegúrate de que el sistema esté activo comprobando que la variable `VITE_N8N_WEBHOOK_URL` en el archivo `.env` sea correcta.

---

## 7. Consejos de Estilo AETHER
Para mantener la estética premium de la web:
- **Imágenes**: Usa fotos de alta calidad, preferiblemente con tonos desaturados o composiciones limpias.
- **Textos**: Mantén descripciones breves y directas. La web respira a través del espacio en blanco.

---

*Si tienes cualquier duda técnica o quieres añadir una funcionalidad nueva (como una galería de fotos múltiple por proyecto), solo tienes que pedírmelo.* 🚀
