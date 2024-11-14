

describe('Transações', () => {
    //hooks -> executar antes ou depois / de casa ou de todos os testes 
    // before
    // after
    // beforeEach
    // afterEach 
    beforeEach(()=>{
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });

    it('Cadastrar uma entrada', () => {

        criarTransacao("Freela", 250)

        cy.get("tbody tr td.description").should("have.text", "Freela")
    });

    it('Cadastrar uma saída',()=>{ 

        criarTransacao("Cinema", -30)
        
        cy.get("tbody tr td.description").should("have.text", "Cinema")
    });
    
    it('Excluir uma transação',()=>{
        criarTransacao("Freela", 100)
        criarTransacao("Cinema", 10)

        //cy.contains(".description", "Freela") //td -> referencia
        //  .parent() // tr
        //  .find('img') // elemento que a gente precisa
        //  .click()
        
        cy.contains(".description", "Freela")
            .siblings()
            .children('img')
            .click()
       // cy.get('tbody tr').should("have.lenght", 1)
    });
});

function criarTransacao( descricao, valor){
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2024-11-14") // yyyy-mm-dd
    cy.get('button').click()
}