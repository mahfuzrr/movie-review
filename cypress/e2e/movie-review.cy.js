describe('Home page', () => {
  it('Displays home page data from api', () => {
    cy.visit('https://movie-review-007.netlify.app/');

    cy.get(':nth-child(1) > .h-\\[500px\\] > .text-start > .mt-5').click();
    cy.get(':nth-child(2) > .bg-\\[\\#95B2EF\\]').click();
    cy.get('#uname').clear('mahfuz');
    cy.get('#uname').type('mahfuz');
    cy.get('#email').clear('mahfuz@gmail.com');
    cy.get('#email').type('mahfuz@gmail.com');
    cy.get('#pass').clear('1');
    cy.get('#pass').type('12345');
    cy.get('.w-2\\/5 > .bg-\\[\\#95B2EF\\]').click();
    cy.get('.w-2\\/5 > .text-\\[18px\\]').click();
    cy.get(':nth-child(1) > .h-\\[500px\\] > .text-start > .mt-5').click();
    cy.get('.px-6').click();
    cy.get('.rounded-full').click();
    cy.get('.w-2\\/5 > .text-\\[18px\\]').click();
    cy.get('.relative > .font-\\[\\\'Poppins\\\'\\]').clear('su');
    cy.get('.relative > .font-\\[\\\'Poppins\\\'\\]').type('superman{enter}');
    cy.get('.mt-5 > :nth-child(1) > .border').click();
    cy.get('.md\\:md-8 > .text-\\[\\#95B2EF\\]').click();
    cy.get('.md\\:md-8 > .text-\\[\\#95B2EF\\]').click();
    cy.get('.bg-\\[\\#95B2EF\\]').click();
    cy.get('.w-3\\/5 > :nth-child(2) > .rounded-full').click();
    cy.get('.px-3 > .relative > .font-\\[\\\'Poppins\\\'\\]').clear('sp');
    cy.get('.px-3 > .relative > .font-\\[\\\'Poppins\\\'\\]').type('spiderm');
    cy.get('.mt-8 > .items-center > .relative > .font-\\[\\\'Poppins\\\'\\]').clear();
    cy.get('.mt-8 > .items-center > .relative > .font-\\[\\\'Poppins\\\'\\]').type('spiderm');
    cy.get('.px-3 > .relative > .font-\\[\\\'Poppins\\\'\\]').clear();
    cy.get('.px-3').click();
    cy.get(':nth-child(3) > .pr-5 > .border-none > .fa-solid').click();
  });
});