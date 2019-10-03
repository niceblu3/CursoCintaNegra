const { graphql } = require('graphql');
const { schema } = require('../../index');
const { createAutor } = require('../services/AutoresService');
const setupTest =  require('./helpers');


const MUTATION_ADD_POST =  `
    mutation addPost($data:PostInput!){
        createNewPublicacion(data:$data){
            _id,
            titulo,
            autor{
                email
            }
        }
    }

`;


describe('Prueba: Crear Publicación (mutation)', () => {
    beforeEach(async () => await setupTest());

    it('Debería crear publicación', () => {

        const makeTest =  async() => {
            const autor = {
                nombre:'Bere',
                apellido:'prueba',
                email:'testing@prueba.com',
                password:'123456'
            };

            const data = {
                titulo: 'Post de prueba',
                contenido: 'Contenido de post de prueba'
            };

            const user = await createAutor(autor);
            graphql(schema,MUTATION_ADD_POST,null,{ user }, { data }).then(res => {
                expect(res.data.createNewPublicacion).toHaveProperty('_id');
                expect(res.data.createNewPublicacion.autor).toHaveProperty('email',autor.email);
            });


        };

        makeTest();
    });

    it('No debería crear el post ', () => {
        const makeTest = async() => {
            const author = {
                nombre:'Bere',
                apellido:'prueba',
                email:'testing@prueba.com',
                password:'123456'
            };

            const data = {
                contenido: 'Contenido de post de prueba'
            };

            const user = await createAutor(author);
            graphql(schema,MUTATION_ADD_POST,null,{ user }, { data }).then(res => {
                expect(res).toHaveProperty('errors');
            });
        };
        makeTest();

    });


});
