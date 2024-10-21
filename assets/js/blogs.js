const projects = [
    {
        title: "DYORAI",
        description: "AI-powered investment guidance for crypto.",
        imageUrl: "assets/img/projects/dyorai.png",
        filter: "office",
    },
    {
        title: "Office Project 1",
        description: "Description for Office Project 1.",
        imageUrl: "assets/img/projects/dyorai.png",
        filter: "office",
    },
    {
        title: "Office Project 2",
        description: "Description for Office Project 2.",
        imageUrl: "assets/img/projects/dyorai.png",
        filter: "office",
    },
    {
        title: "Demo Project 1",
        description: "Description for Demo Project 1.",
        imageUrl: "assets/img/projects/dyorai.png",
        filter: "demo",
    },
    {
        title: "Demo Project 2",
        description: "Description for Demo Project 2.",
        imageUrl: "assets/img/projects/dyorai.png",
        filter: "demo",
    },
    {
        title: "Project 3",
        description: "Description for Project 3.",
        imageUrl: "assets/img/projects/dyorai.png",
        filter: "",
    },
];

const container = document.getElementById('portfolio-container');

// Function to render projects
function renderProjects(filter) {
    container.innerHTML = ''; // Clear the container

    projects.forEach(project => {
        if (filter === '*' || (project.filter && filter === `.filter-${project.filter}`)) {
            const projectHTML = `
                <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.filter}">
                    <div class="portfolio-content">
                        <img src="${project.imageUrl}" width="100%" alt="${project.title}" class="project-image">
                        <div class="portfolio-info text-light">
                            <h4><strong>${project.title}</strong></h4>
                            <p>${project.description}</p>
                            <a href="${project.imageUrl}" title="${project.title}" class="glightbox preview-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                    <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </a>
                            <a href="#" title="More Details" class="details-link ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += projectHTML;
        }
    });
}

// Initial render of all projects
renderProjects('*');

// Filter functionality
const filterLinks = document.querySelectorAll('.portfolio-filters .nav-link');

filterLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        filterLinks.forEach(l => l.classList.remove('filter-active'));
        // Add active class to the clicked link
        link.classList.add('filter-active');

        // Get the filter value from the clicked link
        const filterValue = link.getAttribute('data-filter');
        renderProjects(filterValue);
    });
});
