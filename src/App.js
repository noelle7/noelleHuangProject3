
import './App.css';
import { word } from './components/api/word.js';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Display from './components/Display';

const App = () => {

  const [searchedWord, setSearchedWord] = useState({
    meanings: [],
    sourceUrls: [],
  })
  const [inputError, setInputError] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    isError: false,
    title: '',
    message: '',
  })

  useEffect(() => {
    const data = async () => {
      try {
        const response = await word('developer')
        setSearchedWord(response[0])
        setErrorMessage({
          isError: false,
          title: '',
          message: '',
        })
      } catch (error) {
      }
    }

    data()
  }, [])


  return (
    <div className="app">
      <Header />
      <Search 
        setSearchedWord={setSearchedWord}
        inputError={inputError}
        setInputError={setInputError}
        setErrorMessage={setErrorMessage}
      />
      <Display 
        searchedWord={searchedWord}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default App;

