import { faker } from '@faker-js/faker';
import {data} from "../../fixtures/testdata";

/**
 * @author Anuradha Walalgoda
 */

describe ('API Test - POST, GET and DELETE', function() {

    it('POST -- Successful POST request', () => {
        cy.createUser(
            faker.internet.userName(),
            data.gender.male,
            faker.internet.email(),
            data.status.active,
            data.response.code_201
        ).then(id => {
            this.userID = id
        })
    });

    it('GET -- Successful GET request', () => {
        cy.getUser(this.userID);
    });

    it('DELETE -- Successful DELETE request', () => {
        cy.deleteUser(this.userID);
    });
});