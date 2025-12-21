# Documento de Diseño Detallado (DDD) - Fundamentos-Web-2

## Introducción

Este documento describe el diseño detallado del proyecto "Fundamentos-Web-2", un portafolio personal desarrollado como parte del curso de Fundamentos de Desarrollo Web. El proyecto tiene como objetivo crear un sitio web moderno y atractivo que presente la información profesional y personal del estudiante Adrian David Brad Rus.

## Objetivos del Proyecto

- Crear un portafolio web que muestre habilidades, proyectos y datos de contacto.
- Implementar un diseño visual único con tema "cosmic".
- Utilizar tecnologías web modernas para una experiencia interactiva.
- Asegurar responsividad y accesibilidad en diferentes dispositivos.
- Incluir elementos interactivos como navegación 3D y galería de fotos.

## Arquitectura General

El proyecto sigue una arquitectura frontend simple y estática, organizada en las siguientes capas:

### Arquitectura de Capas
- **Presentación**: HTML para estructura, CSS para estilos, JavaScript para interactividad.
- **Contenido**: Archivos estáticos (HTML, CSS, JS, imágenes).
- **Navegación**: Sistema de navegación basado en enlaces HTML con menú responsivo.

### Patrón de Diseño
- **Componentes Reutilizables**: Uso de Bootstrap para componentes UI consistentes.
- **Separación de Preocupaciones**: CSS separado en archivo externo, JS en archivo dedicado.
- **Responsive Design**: Diseño móvil-first con breakpoints de Bootstrap.

## Tecnologías y Herramientas

### Tecnologías Principales
- **HTML5**: Estructura semántica del contenido.
- **CSS3**: Estilos avanzados, animaciones y tema visual.
- **Bootstrap 5**: Framework CSS para responsividad y componentes.
- **JavaScript (ES6+)**: Interactividad y manipulación del DOM.
- **Three.js**: Biblioteca para gráficos 3D interactivos.

### Herramientas de Desarrollo
- **Editor de Código**: VS Code con extensiones para desarrollo web.
- **Control de Versiones**: Git para gestión del código fuente.
- **Navegador**: Chrome/Firefox para testing y debugging.
- **Sistema Operativo**: Windows 11 para desarrollo local.

## Diseño de la Interfaz de Usuario

### Tema Visual
- **Paleta de Colores**: Tema oscuro con acentos cósmicos (azules, púrpuras, negros).
- **Tipografía**: Fuentes sans-serif modernas con efectos de glow.
- **Estilos**: Bordes redondeados, sombras y transiciones suaves.

### Layout Principal
- **Header**: Navegación fija con branding.
- **Main Content**: Contenido principal en contenedor centrado.
- **Footer**: Información de copyright y enlaces adicionales.

### Componentes Clave
- **Navegación Orbital**: Menú 3D interactivo en la página principal.
- **Galería de Fotos**: Carrusel Bootstrap en la página "Acerca de".
- **Tarjetas de Proyecto**: Componentes Bootstrap para mostrar proyectos.
- **Formulario de Contacto**: Formulario funcional con validación.

## Estructura de Archivos

```
Fundamentos-Web-2/
├── index.html              # Página principal con navegación 3D
├── README.md               # Documentación del proyecto
├── LICENSE                 # Licencia del proyecto
├── .gitignore              # Archivos ignorados por Git
├── Html/                   # Páginas HTML adicionales
│   ├── about.html          # Página "Acerca de" con galería
│   ├── contacts.html       # Página de contacto
│   ├── degree.html         # Información académica
│   ├── fii.html            # Información sobre FII
│   ├── net.html            # Redes sociales
│   └── topic.html          # Tema del proyecto
├── Css/
│   └── Styles.css          # Estilos personalizados
├── Js/
│   └── Code.js             # Scripts JavaScript
└── images/                 # Imágenes del portafolio
    ├── profile.jpg         # Foto de perfil
    ├── photo1.jpg          # Foto adicional 1
    └── photo2.jpg          # Foto adicional 2
```

## Componentes Principales

### 1. Navegación Principal
- **Ubicación**: index.html
- **Funcionalidad**: Menú orbital 3D con Three.js
- **Interacción**: Clic en elementos para navegación

### 2. Galería Personal
- **Ubicación**: Html/about.html
- **Tecnología**: Carrusel Bootstrap
- **Características**: Indicadores, controles de navegación, imágenes responsivas

### 3. Sección de Proyectos
- **Ubicación**: Html/about.html
- **Diseño**: Tarjetas Bootstrap con información de proyectos
- **Contenido**: Descripciones, enlaces y tecnologías utilizadas

### 4. Formulario de Contacto
- **Ubicación**: Html/contacts.html
- **Validación**: HTML5 + JavaScript básico
- **Envío**: Acción por defecto del navegador (mailto)

## Decisiones de Diseño

### Elección de Bootstrap
- **Razón**: Acelera el desarrollo de UI responsiva y consistente.
- **Ventajas**: Componentes preconstruidos, grid system robusto.
- **Desventajas**: Dependencia externa, posibles conflictos de estilos.

### Tema "Cosmic"
- **Razón**: Diferenciación visual y atractivo estético.
- **Implementación**: Variables CSS personalizadas, efectos de gradiente.
- **Mantenibilidad**: Estilos centralizados en Styles.css.

### Arquitectura Estática
- **Razón**: Simplicidad para un proyecto educativo.
- **Limitaciones**: Sin backend para formularios dinámicos.
- **Extensibilidad**: Fácil migración a frameworks como React si es necesario.

## Implementación

### Desarrollo Frontend
1. **Estructura HTML**: Creación de páginas semánticas.
2. **Estilos CSS**: Aplicación del tema visual y responsividad.
3. **Interactividad JS**: Implementación de funcionalidades dinámicas.
4. **Integración Three.js**: Desarrollo de navegación 3D.

### Optimización
- **Rendimiento**: Minimización de recursos, lazy loading de imágenes.
- **Accesibilidad**: Atributos ARIA, navegación por teclado.
- **SEO**: Meta tags, estructura semántica.

## Pruebas

### Tipos de Pruebas
- **Funcionales**: Verificación de navegación y formularios.
- **Visuales**: Consistencia del diseño en diferentes navegadores.
- **Responsivas**: Testing en dispositivos móviles y desktop.
- **Accesibilidad**: Cumplimiento de estándares WCAG.

### Herramientas de Testing
- **Navegadores**: Chrome DevTools, Firefox Developer Edition.
- **Validadores**: W3C HTML/CSS Validator.
- **Herramientas de Accesibilidad**: WAVE, Lighthouse.

## Conclusiones

Este proyecto demuestra la aplicación práctica de fundamentos web modernos en la creación de un portafolio personal. La combinación de tecnologías como HTML5, CSS3, Bootstrap y Three.js permite crear una experiencia web atractiva y funcional.

### Lecciones Aprendidas
- Importancia de la planificación del diseño antes del desarrollo.
- Beneficios de frameworks CSS para desarrollo rápido.
- Valor de la separación de preocupaciones en el código.

### Mejoras Futuras
- Implementación de un CMS para gestión de contenido.
- Integración con APIs para funcionalidades dinámicas.
- Optimización de rendimiento con técnicas avanzadas.

---

**Autor**: Adrian David Brad Rus  
**Fecha**: Diciembre 2025  
**Versión**: 1.0
