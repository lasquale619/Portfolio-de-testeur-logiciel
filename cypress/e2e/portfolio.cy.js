describe("Portfolio - Tests de navigation et contenu", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    describe("Navbar", () => {

        it("Le logo Bm. est visible et redirige vers l'accueil", () => {
            cy.get("[data-cy=navbar-brand]").should("be.visible").and("contain", "Bm.");
            cy.get("[data-cy=navbar-brand]").click();
            cy.url().should("include", "#");
        });

        it("Le lien Accueil est visible et redirige vers #home", () => {
            cy.get("[data-cy=nav-home]").should("be.visible").and("contain", "Accueil");
            cy.get("[data-cy=nav-home]").click();
            cy.url().should("include", "#home");
        });

        it("Le lien A propos est visible et redirige vers #about", () => {
            cy.get("[data-cy=nav-about]").should("be.visible").and("contain", "A propos");
            cy.get("[data-cy=nav-about]").click();
            cy.url().should("include", "#about");
        });

        it("Le lien Compétences est visible et redirige vers #skills", () => {
            cy.get("[data-cy=nav-skills]").should("be.visible").and("contain", "Compétences");
            cy.get("[data-cy=nav-skills]").click();
            cy.url().should("include", "#skills");
        });

        it("Le lien Portfolio est visible et redirige vers #portfolio", () => {
            cy.get("[data-cy=nav-portfolio]").should("be.visible").and("contain", "Portfolio");
            cy.get("[data-cy=nav-portfolio]").click();
            cy.url().should("include", "#portfolio");
        });

        it("Le lien Contactez-moi est visible et redirige vers #contact", () => {
            cy.get("[data-cy=nav-contact]").should("be.visible").and("contain", "Contactez-moi");
            cy.get("[data-cy=nav-contact]").click();
            cy.url().should("include", "#contact");
        });
    });

    describe("Section Accueil", () => {

        it("Le titre et le sous-titre sont visibles", () => {
            cy.get("[data-cy=hero-title]").should("be.visible").and("contain", "BOUGUELLID");
            cy.get("[data-cy=hero-desc]").should("be.visible").and("contain", "Testeur QA");
        });
    });

    describe("Section About", () => {

        it("Le titre, l'image et le paragraphe sont présents", () => {
            cy.get("[data-cy=about-title]").should("be.visible").and("contain", "QUI SUIS-JE");
            cy.get("[data-cy=about-image]").should("be.visible").and("have.attr", "src").and("include", "Bm");
            cy.get("[data-cy=about-text]").should("be.visible").and("not.be.empty");
        });
    });

    describe("Section Skills", () => {

        it("Le nombre de cards correspond au fichier skills.json", () => {
            cy.request("data/skills.json").then((response) => {
                const totalSkills = response.body.length;
                cy.get("[data-cy=skills-section] .skillsText").should("have.length", totalSkills);
            });
        });

        it("Chaque card a une image, un titre et un paragraphe", () => {
            cy.get("[data-cy=skills-section] .card").each(($card) => {
                cy.wrap($card).find("img").should("exist");
                cy.wrap($card).find("h3").should("not.be.empty");
                cy.wrap($card).find("p").should("not.be.empty");
            });
        });
    });

    describe("Section Portfolio", () => {

        it("Le nombre de cards correspond au fichier portfolio.json", () => {
            cy.request("data/portfolio.json").then((response) => {
                const totalProjects = response.body.length;
                cy.get("[data-cy=portfolio-section] .card").should("have.length", totalProjects);
            });
        });

        it("Chaque card a une image, un titre et un paragraphe", () => {
            cy.get("[data-cy=portfolio-section] .portfolioContent").each(($card) => {
                cy.wrap($card).find("img").should("exist");
                cy.wrap($card).find("h3").should("not.be.empty");
                cy.wrap($card).find("p").should("not.be.empty");
            });
        });
    });

    describe("Section Contact", () => {

        it("Le titre, le téléphone, l'email et le LinkedIn sont présents", () => {
            cy.get("[data-cy=contact-title]").should("be.visible").and("contain", "Contactez-moi");
            cy.get("[data-cy=contact-phone]").should("be.visible").and("have.attr", "href", "tel:+33662033204");
            cy.get("[data-cy=contact-email]").should("be.visible").and("have.attr", "href", "mailto:med.bouguellid@hotmail.com");
            cy.get("[data-cy=contact-linkedin]").should("be.visible").and("have.attr", "href").and("include", "linkedin.com");
        });
    });
});
