import {data} from "../fixtures/testdata";

let ACCESS_TOKEN = 'Bearer 8c574ee4de49100dd3b4f665ef0a5e727c6306df609236300af427fc98bde570';
let API_URL = 'https://gorest.co.in/public/v2';

// Custom command for POST request - Add User
Cypress.Commands.add('createUser', (name, gender, email, status, expectedStatusCode) => {
    return createPostRequest(name, gender, email, status, expectedStatusCode);
});

// Custom command for GET request - Get User
Cypress.Commands.add('getUser', (id) => {
    getUserRequest(id);
});

// Custom command for DELETE request - Delete User
Cypress.Commands.add('deleteUser', (id) => {
    deleteApiRequest(id);
});

// POST request method
function createPostRequest(name, gender, email, status, expectedStatusCode) {

    cy.request({
        method: 'POST',
        url: API_URL + '/users',
        headers: {
            Authorization: ACCESS_TOKEN
        },
        body: {
            name: name,
            gender: gender,
            email: email,
            status: status
        },
        failOnStatusCode: false
    }).then(({status, body: {id}}) => {
        expect(status, 'User is created').to.equal(expectedStatusCode);
        return id;
    });

}

// GET request method
function getUserRequest(id) {

    cy.request({
        method: 'GET',
        url: API_URL + "/users/" + id,
        headers: {
            Authorization: ACCESS_TOKEN
        },
        failOnStatusCode: false
    })
        .then((response) => {
                expect(response.status).to.eq(data.response.code_200)
                expect(response.body).to.not.be.null
                expect(response.body.status).to.eq(data.status.active)
            }
        )
}

// DELETE request method
function deleteApiRequest(id) {

    cy.request({
        method: 'DELETE',
        url: API_URL + "/users/" + id,
        headers: {
            Authorization: ACCESS_TOKEN
        },
        failOnStatusCode: false
    })
        .then((response) => {
            expect(response.status).to.eq(data.response.code_204)
            expect(response.body).to.not.be.null
        });
}


