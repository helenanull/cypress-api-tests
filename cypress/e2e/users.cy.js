describe('Users', () => {
    it('can create a new user', () => {
        const randomUsername = `cy_${Math.random().toString().slice(2, 11)}`

        cy.request('POST', '/users',
            {
                "user":
                {
                    "username": randomUsername,
                    "email": `${randomUsername}@helenanull.com`,
                    "password": "test"
                }
            }).then(
                (response) => {
                    // we expect to get back HTTPS status code 201 (Created)
                    expect(response.status).to.eq(201)
                }
            )
    })

    it('can get an error message when user already exists', () => {
        // user 'duplicate' already exists in the system
        cy.request({
            method: 'POST',
            url: '/users',
            failOnStatusCode: false,
            body: {
                "user":
                {
                    "username": 'duplicate',
                    "email": 'duplicate@helenanull.com',
                    "password": "Test"
                }
            }
        }).then(
            (response) => {
                expect(response.status).to.eq(422)
                expect(response.body.errors.body).to.contain('Email already exists.. try logging in')
            })
    })
})
