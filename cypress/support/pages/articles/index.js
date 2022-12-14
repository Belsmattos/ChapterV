const el = require('./elements').ELEMENTS

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {
  acessarOFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Descrição do artigo de testes')
    cy.get(el.inputBody).type('Corpo do texto do artigo que está sendo criado')
    cy.get(el.inputTags).type('cypress')
  }

  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarSeOArtigoFoiCriado () {
    cy.contains(articleName).should('be.visible')

    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
