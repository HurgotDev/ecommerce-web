import feathers from '@feathersjs/client'
import auth from '@feathersjs/authentication-client'
import rest from '@feathersjs/rest-client'
import axios from 'axios'
import { TOKEN_NAME, HOST_API, PROTOCOL_HTTP } from 'environment'

const app = feathers()
const restClient = rest(`${PROTOCOL_HTTP}://${HOST_API}`)

app.configure(restClient.axios(axios))

app.configure(
    auth({
        path: '/authentication',
        storageKey: TOKEN_NAME,
    }),
)

export const ClientFeathers = app
