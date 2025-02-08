document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("projects-container");

    if (!container) {
        console.error("No se encontró el contenedor de proyectos.");
        return;
    }

    if (typeof proyectos === "undefined") {
        console.error("No se pudieron cargar los proyectos.");
        return;
    }

    proyectos.forEach(proyecto => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        // Número de WhatsApp (cámbialo por el tuyo)
        const numeroWhatsApp = "922036856"; 
        const mensaje = encodeURIComponent(`¡Hola! Estoy interesado en más información sobre: ${proyecto.titulo}`);

        projectElement.innerHTML = `
            <div class="project-row">
                <img src="${proyecto.imagen}" alt="Imagen de ${proyecto.titulo}">
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
