/// <reference types="cypress" />

import SearchPage from "../pom/SearchPage"
import ResultPage from "../pom/ResultPage"

const searchPage = new SearchPage()
const resultPage = new ResultPage()

describe('Adjust Frontend Task', () => {

  beforeEach('Go to URL before each test cases', ()=>{
    cy.visit(Cypress.env("BASE_URL"))
  })

  it('Task1 : Search Cosmmos word in the page title and Verify results contain Cosmos word', () => {

    searchPage.clickAdvanceSearch()
    searchPage.searchInPageTitles("Cosmos")
    resultPage.verifyEachTitleContainsWord("Cosmos")

  })

  it('Task2 : Click "All" option in "Search in" function and Verify all checkboxes are checked', () => {
    searchPage.clickSearchIn()
    searchPage.checkAllOption()
    searchPage.clickAddNameSpacesInput()
    searchPage.verifyAllOptionsChecked()
  })
})