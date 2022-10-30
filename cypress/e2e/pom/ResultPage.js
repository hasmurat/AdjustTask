/// <reference types="cypress" />

export default class ResultPage {

    verifyEachTitleContainsWord(param) {
        let word = param.toLowerCase()
        cy.get(".mw-search-result-heading [href^='/wiki/']").each((element) => {
         //cy.wrap(element).should("include.text",word)
           expect(element.text().toLowerCase()).to.include(word.toLowerCase())     
        })

    }
}