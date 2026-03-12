# **Agency Rules: Estándares de Calidad Inquebrantables \- Digitaliza**

Estas reglas gobiernan todo el desarrollo frontend en nuestra agencia. Deben ser validadas en cada commit y exigidas a cualquier herramienta de generación de código (IA).

## **Regla 1: Separación Estricta de Responsabilidades (Data vs. UI)**

* **Mandato:** El contenido dinámico o estático repetitivo NUNCA vive en archivos .astro.  
* **Acción:** Extraer textos, enlaces, precios, características e imágenes a src/data/\*.ts. Todo debe estar tipado con interfaces TypeScript.  
* **Validación:** Si se detecta texto "hardcoded" en el HTML que debería ser editable por el cliente o escalable, la PR se rechaza y debe refactorizarse.

## **Regla 2: Mobile-First Real (Cero Tolerancia al Scroll Horizontal)**

* **Mandato:** Diseño impecable y funcional desde 320px hacia arriba.  
* **Acción:** No confiar en la salida fácil de overflow-x-hidden. El DOM debe ser fluido usando Grid/Flexbox y utilidades responsivas de Tailwind (sm:, md:, lg:).  
* **Validación:** Revisar el layout simulando dispositivos móviles en el navegador. Si algo se rompe, la arquitectura estructural está mal.

## **Regla 3: Media Local y Optimizada (Rendimiento Extremo)**

* **Mandato:** Uso obligatorio y exclusivo del componente \<Image /\> o \<Picture /\> nativo de Astro.  
* **Acción:** Todos los assets locales deben estar en src/assets/ para permitir el procesamiento del framework (conversión a WebP/AVIF y Lazy Load automático).  
* **Validación:** Queda estrictamente prohibido el uso de tags \<img\> estándar para imágenes locales.

## **Regla 4: Interacciones Diferidas (Patrón Facade / Zero-JS)**

* **Mandato:** No bloquear el renderizado inicial con scripts pesados de terceros (Analytics, Maps, YouTube, Chatbots).  
* **Acción:** Implementar "fachadas" (imágenes estáticas o botones falsos) que solo carguen el recurso real cuando el usuario interactúe (click, hover o scroll).  
* **Validación:** El hilo principal (Main Thread) debe estar libre durante la carga de la página.

## **Regla 5: Auditoría contra Impulsividad (Freno de Mano Técnico)**

* **Mandato:** Calidad sistémica y mantenibilidad por encima de "parches rápidos" para terminar pronto.  
* **Acción:** Antes de dar por finalizado un componente, detente 2 minutos. Pregúntate: *¿Esta solución escala? ¿Entiendo exactamente qué hace cada clase de Tailwind que puse?*  
* **Validación:** Si la lógica parece un "truco sucio" (hacks de CSS, z-index infinitos, márgenes negativos excesivos), bórralo y hazlo bien.

## **Regla 6: Zero-Trust a la IA (Auditoría de Código Generado)**

* **Mandato:** Ningún componente generado por IA (Antigravity, Gemini, etc.) se acepta sin revisión arquitectónica.  
* **Acción:** Obligar a la IA a consumir datos de src/data/, usar componentes atómicos propios y respetar el tailwind.config.mjs.  
* **Validación:** Purgar cualquier clase utilitaria inventada, JS innecesario inyectado por la IA o violaciones a la Regla 1\. La IA es el asistente, tú eres el Arquitecto.