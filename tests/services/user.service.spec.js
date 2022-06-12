const httpMocks = require('node-mocks-http');
const MockAdapter = require('axios-mock-adapter');
const axios = require('axios');
const events = require('events');
const UserService = require("../../services/user.service");
const { expect } = require('chai');

describe("User Controler", () => {
    let mock;
    before(() => {
        mock = new MockAdapter(axios);
    })
    it("Get User By Id ok", async () => {

        const mockTwitter1 = {
            "data": [
                {
                    "id": "14113935",
                    "name": "Alexander Torrenegra",
                    "username": "torrenegra"
                }
            ]
        }
        const mockTwitter2 = {
            "data": [
                {
                    "id": "1535644941212327937",
                    "text": "Déjenme saber qué preguntas tienen para los candidatos presidenciales relacionadas con emprendimiento y tecnología. Incluiré las que más likes tengan junto con las que he preparado."
                },
                {
                    "id": "1535623732319997954",
                    "text": "📣 Live con el candidato @ingrodolfohdez, para hablar de tecnología, innovación y emprendimiento. Este lunes a las 7 pm"
                },
                {
                    "id": "1535370503203995649",
                    "text": "Finalmente, retomamos conversaciones y sí haremos un live con uno de los candidatos a presidencia. Mañana les cuento quién es y cuándo será."
                },
                {
                    "id": "1535348660258619392",
                    "text": "RT @torreenespanol: ➡Tener una entrevista de trabajo es más cómodo y accesible al trabajar en remoto, gracias a las videollamadas, menos de…"
                },
                {
                    "id": "1535348619997503489",
                    "text": "RT @torrenetwork: ➡ Job interviews have become more comfortable and accessible when working remotely, thanks to video calls, less commuting…"
                }
            ],
            "meta": {
                "result_count": 5,
                "newest_id": "1535644941212327937",
                "oldest_id": "1535348619997503489",
                "next_token": "7140dibdnow9c7btw421tayejbu2gnsymprd5sjgk4i0p"
            }
        };

        mock.onGet('https://api.twitter.com/2/users/by?usernames=torrenegra').reply(200, mockTwitter1);
        mock.onGet('https://api.twitter.com/2/users/14113935/tweets').reply(200, mockTwitter2);
        const userService = new UserService();
        const response = await userService.getUserById(0);
        expect(response.username).equals('torrenegra');
        expect(response.twits).length(5);
        expect(response.id).equals(0);
    })

    it('Updte User Ok', async () => {

        const body = {
            "experience": "CEO TORRENEGRA",
            "username": "torrenegra",
            "id": 0,
            "name": "Alexander Torrenegra",
            "profileImage": "https://pbs.twimg.com/profile_images/933013816580849664/8-z7es-z_400x400.jpg"
        }

        const userService = new UserService();
        const response = await userService.updateUser(body);
        expect(response.message).equals('User with id: 0 successfully updated.');

    })


})