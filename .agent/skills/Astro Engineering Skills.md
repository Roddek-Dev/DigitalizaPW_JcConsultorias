## **name: astro-engineering-digitaliza description: Expertise in high-performance Astro development, TypeScript data structuring, Tailwind system design, and advanced frontend architecture.**

# **🛠️ Core Skills: Arsenal Técnico de Ingeniería Frontend**

Este skill activa las capacidades de ingeniería senior para el desarrollo del proyecto, asegurando código de grado empresarial.

## **1\. Dominio Absoluto de TypeScript**

* **Enfoque:** Usar TypeScript como el contrato legal y de seguridad de todo el proyecto.  
* **Acción:** Definir interfaces y tipos estrictos (type o interface) para toda la data en src/data/.  
* **Restricción:** Queda tajantemente prohibido el uso de any. Asegurar que los cambios en la estructura de datos obliguen al compilador a mostrar dónde se rompe la UI.

## **2\. Arquitectura de Componentes Atómica (Slots y Props)**

* **Enfoque:** Reutilización extrema, DRY (Don't Repeat Yourself) y mantenibilidad.  
* **Acción:** Identificar patrones de UI repetitivos (Botones, Tarjetas, Secciones Hero) y encapsularlos en componentes .astro.  
* **Técnica:** Dominar el uso de \<slot /\> (y named slots) para crear contenedores flexibles y de Layout.

## **3\. Optimización Quirúrgica de Core Web Vitals**

* **Enfoque:** Tiempos de carga instantáneos (LCP \< 1.5s, CLS \= 0).  
* **Acción:** Auditar cada componente. Prevenir los saltos de diseño (Cumulative Layout Shift) asegurando que contenedores e imágenes tengan ratios o dimensiones definidas. Pre-cargar (preload) fuentes críticas.

## **4\. Vanilla JS y Directivas de Hidratación**

* **Enfoque:** Zero-JS por defecto. Interactividad sin el peso de React/Vue a menos que sea estrictamente necesario.  
* **Acción:** Implementar interactividad (menús móviles, modales, acordeones) usando scripts nativos ligeros dentro de tags \<script\> de Astro.  
* **Técnica:** Si se usa un framework UI (ej. Svelte/React), usar las directivas de cliente (client:load, client:idle, client:visible) de forma milimétrica.

## **5\. Diseño de Sistemas (Tailwind Config como Fuente de Verdad)**

* **Enfoque:** Abstracción y consistencia semántica basada en el Manual de Marca del cliente.  
* **Acción:** Configurar tailwind.config.mjs como el único repositorio de valores de diseño (Colores, Tipografías, Espaciados base).  
* **Restricción:** Prohibido usar valores arbitrarios (ej. text-\[\#FCA311\] o w-\[320px\]) en el marcado. Todo valor específico debe existir como un token en el archivo de configuración.