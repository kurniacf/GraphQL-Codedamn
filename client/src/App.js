import React from 'react'
import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import DisplayData from './DisplayData'

function App() {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		uri: `https://${window.location.host}:1338/graphql`,
	})

	return (
		<ApolloProvider client={client}>
			<div className="App">
				<DisplayData />
			</div>
		</ApolloProvider>
	)
}

export default App