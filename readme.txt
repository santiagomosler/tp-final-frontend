WhatsApp Clone - Desafío Frontend

Este proyecto es una simulación de una app de mensajería estilo WhatsApp, desarrollada en React.
Permite al usuario navegar entre distintos chats de personajes de la serie Friends, leer sus mensajes y enviar nuevos mensajes que se almacenan en memoria mediante el estado global del contexto.

Características

1. Vista principal con lista de chats activos ordenados por hora del último mensaje.
2. Sistema de búsqueda para filtrar contactos.
3. Vista de chat individual con historial de mensajes.
4. Envío de mensajes que se muestran al instante.
5. Doble check en los mensajes enviados por el usuario.
6. Diseño responsivo basado en la experiencia WhatsApp Web.
7. Simulación de funciones en desarrollo como videollamadas y envío de archivos.

Tecnologías y Librerías

1. React — Librería principal para construir la interfaz de usuario.
2. React Context API — Para el manejo del estado global de los chats.
3. useState, useParams, useContext — Hooks de React para manejo de datos y navegación.
4. React Router DOM — Para navegación entre vistas (Home y Chat).
5. CSS personalizado — Estilos creados a medida en distintos archivos .css.

Estrctura del proyecto

src/
│
├── components/
│   └── ChatList.jsx         # Muestra lista de chats ordenados
│
├── context/
│   └── ChatContext.jsx      # Estado global para todos los chats
│
├── pages/
│   ├── Home.jsx             # Página principal con barra de búsqueda
│   └── Chat.jsx             # Vista individual del chat seleccionado
│
├── styles/
│   ├── Home.css
│   ├── Chat.css
│   └── Chatlist.css
│
├── assets/                  # Avatares de los personajes
└── App.jsx, main.jsx        # Entradas principales de la app

¿Cómo se simulan los mensajes?

Los mensajes iniciales están precargados en ChatContext.jsx para cada personaje. Al escribir un nuevo mensaje en un chat:
    Se guarda en el estado global del contexto.
    Se marca automáticamente como enviado por el usuario (from: "me").
    Se renderiza con el ícono de doble check.

Dificultades presentadas

1. Manejo del estado global para múltiples chats de forma eficiente.
2. Mostrar correctamente los mensajes ordenados cronológicamente.
3. Implementar íconos condicionales según el origen del mensaje (from: "me").
4. Evitar conflictos al renderizar múltiples íconos o llamadas a funciones aún no implementadas (como llamada por video o emojis).
5. Crear una UI coherente y fiel a WhatsApp Web con CSS puro.

Iniciación del proyecto (comandos en consola):

    npm install
    npm run dev
