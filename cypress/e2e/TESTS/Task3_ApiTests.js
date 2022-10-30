/// <reference types='cypress' />

import PetsRequestBodies from "../reqBodies/PetsRequestBodies"

const petsReqBodies = new PetsRequestBodies()

describe('Adjust API Test', () => {

    var petId = 125
    var categoryID = 5
    var categoryName = 'Dogs'
    var petName = 'Rocky'
    var status = 'avaliable'
    var updatedPetName = 'Monster'

    it('Create a pet and verify information from request body is the same information from the response body', () => {

        const reqBody = petsReqBodies.generalPetBody(petId, categoryID, categoryName, petName, status)
        cy.request({
            method: 'POST',
            url: Cypress.env('BASE_API_URL') + "pet",
            body: reqBody,
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            expect(response.body.id).to.equal(petId)
            expect(response.body.category.id).to.equal(categoryID)
            expect(response.body.category.name).to.equal(categoryName)
            expect(response.body.name).to.equal(petName)
            expect(response.body.status).to.equal(status)
        })
    })

    it('Get the information of created pet and verify information is true', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('BASE_API_URL') + "pet/" + petId,
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            expect(response.body.id).to.equal(petId)
            expect(response.body.category.id).to.equal(categoryID)
            expect(response.body.category.name).to.equal(categoryName)
            expect(response.body.name).to.equal(petName)
            expect(response.body.status).to.equal(status)
        })
    })

    it('Update the name of created pet and verify if it is updated or not', () => {
        const updatedBody = petsReqBodies.generalPetBody(petId, categoryID, categoryName, updatedPetName, status)
        cy.request({
            method: 'PUT',
            url: Cypress.env('BASE_API_URL') + "pet",
            body: updatedBody,
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            expect(response.body.name).to.equal(updatedPetName)
        })
    })

    it('Delete the created pet and verify it', ()=>{
        cy.request({
            method: 'DELETE',
            url: Cypress.env('BASE_API_URL') + "pet/" + petId,
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200)
        })
    })

    it('Verify error message when retrieve the deleted pet', ()=>{
        cy.request({
            method: 'GET',
            url: Cypress.env('BASE_API_URL') + "pet/" + petId,
            headers: {
                'content-type': 'application/json'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response).property('status').to.equal(404)
            expect(response.body.code).to.equal(1)
            expect(response.body.type).to.equal('error')
            expect(response.body.message).to.equal('Pet not found')
        })
    })

})