import ApolloClient from 'apollo-boost';

const createApolloClient = () => {
  return new ApolloClient({
    // Replace the IP address part with your own IP address!
    uri: 'http://86.50.95.94:5000/graphql',
  });
};

export default createApolloClient;