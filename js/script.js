document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");
    if (!container || typeof proyectos === "undefined") {
        console.error("No se encontró el contenedor de proyectos o los datos no se cargaron.");
        return;
    }

    proyectos.forEach(proyecto => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        // Configuración de WhatsApp
        const numeroWhatsApp = "+51922036856"; 
        const mensaje = encodeURIComponent(`¡Hola! Me llamó la atención el "${proyecto.titulo}" y me gustaría saber más. ¿Me podrías dar más detalles? ¡Gracias de antemano!`);

        projectElement.innerHTML = `
            <div class="project-row">
                <img src="${proyecto.imagen}" alt="${proyecto.titulo} - Proyecto de Ebanistería">
                <div class="project-content">
                    <h2>${proyecto.titulo}</h2>
                    <p>${proyecto.descripcion}</p>
                    <a href="${proyecto.enlace}" class="proyecto-button" target="_blank">Ver Proyecto</a>
                    <a href="https://wa.me/${numeroWhatsApp}?text=${mensaje}" class="whatsapp-button" target="_blank">Contactar por WhatsApp</a>
                </div>
            </div>
        `;

        container.appendChild(projectElement);
    });
});
