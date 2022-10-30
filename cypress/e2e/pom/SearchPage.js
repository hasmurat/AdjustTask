/// <reference types="cypress" />

export default class SearchPage{

    clickSearchButton(){
        return cy.get("[type='submit']").eq(0).click()
    }

    clickAdvanceSearch(){
        return cy.get(".mw-advancedSearch-searchPreview").should("be.visible").click()
    }

    searchInPageTitles(word){
        cy.get("#ooui-49").type(word)
        this.clickSearchButton()
    }

    clickSearchIn(){
        return cy.get(".mw-advancedSearch-namespacesPreview").should("be.visible").click()
    }

    checkAllOption(){
        return cy.get("[value='all']").click()
    }

    clickAddNameSpacesInput(){
        return cy.get("[placeholder='Add namespaces…']").click()
    }

    verifyAllOptionsChecked(){
        cy.get("span span input[class='oo-ui-inputWidget-input']").each((element)=>{
            cy.wrap(element).should("be.checked")
        })
    }

}