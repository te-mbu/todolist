import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import tasks from '../reducers/tasks';

function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: { tasks }
  })

  return (
    <Provider store={store}>
      <Head>
        <title>Todo list</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
