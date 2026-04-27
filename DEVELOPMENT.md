# 🚀 Guía de Desarrollo Local

## Requisitos Previos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Terminal/CMD
- Opcional: Python o Node.js instalado

---

## 📦 Instalación

### Opción 1: Abrir Directamente (Más Simple)
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Opción 2: Servidor Local (Recomendado)

#### Con Python 3
```bash
cd /path/to/LandingConsultoriaJGHT
python -m http.server 8000

# Accede a http://localhost:8000
```

#### Con Python 2
```bash
python -m SimpleHTTPServer 8000
```

#### Con Node.js
```bash
# Instalar http-server (una sola vez)
npm install -g http-server

# Correr servidor
cd /path/to/LandingConsultoriaJGHT
http-server -p 8000

# Accede a http://localhost:8000
```

#### Con Live Server (VS Code)
1. Instalar extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

---

## 🔍 Testing

### 1. Validar HTML
```bash
# Online: https://validator.w3.org/
# O instalar localmente:
npm install -g html-validate
html-validate index.html
```

### 2. Validar CSS
```bash
# Online: https://jigsaw.w3.org/css-validator/
# O en navegador (DevTools → Console)
```

### 3. Validar JavaScript
```bash
# Online: https://esprima.org/
# O en VS Code con ESLint
npm install -g eslint
eslint js/app.js
```

### 4. Performance Check
```bash
# Google PageSpeed: https://pagespeed.web.dev/
# Lighthouse (Chrome DevTools) → Audits tab
# WebPageTest: https://www.webpagetest.org/
```

### 5. Accessibility Check
```bash
# Chrome DevTools → Lighthouse
# WAVE: https://wave.webaim.org/
# axe DevTools: Chrome extension
```

### 6. Mobile Responsiveness
```bash
# Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
# Test en: 375px, 768px, 1024px, 1440px
```

---

## 📝 Configuración Local

### 1. Variables de Entorno (Opcional)
```bash
# Copiar template
cp .env.example .env

# Editar .env con tus valores
# (Nota: Este proyecto es frontend, así que .env es aspiracional)
```

### 2. Servidor de Desarrollo (Backend Simulado)
Si necesitas testear formulario con respuesta:

```bash
# Crear un archivo mock-api.js simple
# O usar un servicio online como: https://webhook.site/
```

---

## 🎨 Desarrollo & Customización

### 1. Editar Copywriting
```bash
# Archivo: index.html
# Buscar y reemplazar textos en secciones específicas
# Líneas clave:
# - Hero: línea 75-80
# - KMP: línea 156
# - Productos: línea 350+
```

### 2. Cambiar Colores
```bash
# Opción A: Editar en index.html (línea 32-46)
# tailwind.config
brand: {
  dark: '#NEW_COLOR',
  accent: '#NEW_COLOR',
  // ...
}

# Opción B: Editar en css/main.css
# Buscar y reemplazar hex codes
```

### 3. Agregar Nuevas Secciones
```bash
# 1. Crear sección en index.html
<section id="nueva-seccion">
  <!-- contenido -->
</section>

# 2. Agregar al nav
<a href="#nueva-seccion">Nombre</a>

# 3. Si necesitas estilos, agregar a css/main.css
# 4. Si necesitas JS, crear clase en js/app.js
```

### 4. Subir Imágenes
```bash
# Crear carpeta assets/images/
mkdir -p assets/images

# Copiar imágenes
cp ~/Downloads/mi-imagen.jpg assets/images/

# Actualizar src en HTML
<img src="assets/images/mi-imagen.jpg" alt="descripción" />
```

---

## 🔧 Debugging

### En Chrome DevTools
```
F12 o Ctrl+Shift+I (Windows/Linux)
Cmd+Option+I (macOS)
```

### Ver Consola JavaScript
```
Ir a: Console tab
Buscar errores (mensaje en rojo)
Ejecutar comandos JavaScript
```

### Ver Red/Requests
```
Ir a: Network tab
Recargar página (Ctrl+R o Cmd+R)
Ver solicitudes HTTP
```

### Inspecionar Elementos
```
Ir a: Elements tab
Click en ícono selector
Hacer click en elemento para inspeccionar
Ver estilos CSS aplicados
```

---

## 📊 Monitoreo

### Archivar Cambios
```bash
git status          # Ver cambios
git add .           # Agregar todos los cambios
git commit -m "Descripción"  # Confirmar cambios
git push            # Subir a repositorio
```

### Crear Backup
```bash
# Comprimir carpeta
zip -r landing-backup-2026-03-18.zip LandingConsultoriaJGHT/

# O usar
tar -czf landing-backup-2026-03-18.tar.gz LandingConsultoriaJGHT/
```

---

## 🚀 Deployment

### Opción 1: Netlify (Gratis, Recomendado)
```bash
# 1. Ir a https://netlify.com
# 2. Click "Deploy" → Drag & drop LandingConsultoriaJGHT folder
# 3. Tu sitio estará en vivo en segundos
```

### Opción 2: Vercel
```bash
npm i -g vercel
cd LandingConsultoriaJGHT
vercel
```

### Opción 3: GitHub Pages
```bash
# 1. Crear repo en GitHub
# 2. Subir código
# 3. Settings → Pages → Deploy from main branch
# 4.  Sitio en https://username.github.io/repo-name/
```

### Opción 4: Hosting Tradicional (GoDaddy, Bluehost, etc.)
```bash
# 1. Conectar vía FTP/SFTP
# 2. Subir archivos a public_html/
# 3. Tu dominio debería resolver el index.html
```

---

## 🐛 Troubleshooting

### Problema: Links no funcionan
```
✓ Verificar que navlinks tengan href="#seccion-id"
✓ Verificar que secciones tengan id="seccion-id"
✓ Revisar mayúsculas/minúsculas en IDs
```

### Problema: CSS no aplica
```
✓ Verificar path en <link rel="stylesheet" href="css/main.css">
✓ Limpiar cache del navegador (Ctrl+Shift+Delete)
✓ DevTools → Network → ver si load es exitoso
```

### Problema: JavaScript no funciona
```
✓ Revisar console en DevTools (F12)
✓ Verificar path en <script src="js/app.js"></script>
✓ Verificar sintaxis en js/app.js
```

### Problema: Imágenes no cargan
```
✓ Verificar paths relativos (ej: assets/images/nombre.jpg)
✓ Verificar nombre exacto del archivo
✓ DevTools → Network → ver status de imagen
```

### Problema: Formulario no envía
```
✓ Abrir DevTools → Console
✓ Buscar mensajes de error en rojo
✓ Testear campo de email con regex válido
✓ Verificar que mensaje tenga >10 caracteres
```

---

## 📚 Recursos Útiles

### Documentación
- [MDN Web Docs](https://developer.mozilla.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [W3C HTML Validator](https://validator.w3.org/)

### Herramientas Online
- [Responsiveness Checker](https://responsively.app/)
- [Color Picker](https://htmlcolorcodes.com/)
- [Icon Generator](https://www.favicon-generator.org/)

### Performance
- [Google PageSpeed](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 📞 Soporte

Si encuentras problemas:

1. **Revisar console del navegador** (F12)
2. **Leer README.md** para documentación completa
3. **Buscar en Google** el error específico
4. **Contactar soporte** del hosting o
5. **Debuggear manualmente** con DevTools

---

**Last Updated**: March 18, 2026
**Version**: 1.0 Production Ready
