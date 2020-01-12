import ApolloCliente from 'apollo-boost';
import { LAUCHES_PAST_QUERY } from './graphql/launches';

const uri= process.env.REACT_APP_API_URL

const client =new ApolloCliente({
  uri
})
client.query({
  query:LAUCHES_PAST_QUERY
})
.then(result=>console.log('Launches:', result))
.catch(err=>console.log('Error:', err))


export{ client}
