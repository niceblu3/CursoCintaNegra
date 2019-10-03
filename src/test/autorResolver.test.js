const { graphql } = require('graphql');
const { schema } = require('../../index');
const { createAutor } = require('../services/AutoresService');
const setUpTest = require('./helpers');

const MUTATION_ADD_AUTOR = `
    mutation addautor($data:AutorInput!){
        createNewAutor(data:$data){
          _id,
          email
        }
    }
`;


describe('Prueba: Crear autor (mutation)', () => {

    beforeEach( async () => await setupTest());

    it('Debería crear autor', () => {

        const makeTest =  async() => {
            const data = {
                nombre:'bere',
                apellido:'prueba',
                email:'testing@prueba.com',
                password:'123456'
            };

            graphql(schema,MUTATION_ADD_AUTOR,null,{},{data}).then( res => {
                expect(res.data.createNewAutor).toHaveProperty('email',data.email);
                expect(res.data.createNewAutor).toHaveProperty('_id');
            });


        };
        makeTest();

    });

    it('No debería crear al autor', () => {

        const makeTest = async() => {
            const data = {
                nombre:'bere',
                apellido:'prueba',
                email:'testing@prueba.com',
                password:'123456'
            };
            await createAutor(data);
            graphql(schema, MUTATION_ADD_AUTOR, null,{},{data}).then(
                res => {
                    expect(res).toHaveProperty('errors');
                });
        };

        makeTest();

    });
  });
