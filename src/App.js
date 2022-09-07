import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import GlobalStats from './components/global';
import CountriesStats from './components/countriesStats';
import Search from './components/search';

function App() {

  const [globalStats, setGlobalStats] = useState('')
  const [countryStats, setCountryStats] = useState('')

  useEffect(() => {

    let url = "https://api.covid19api.com/summary";
    fetch(url).then((response) => response.json().then((data) => {
      console.log(data);
      setGlobalStats(data.Global)
      setCountryStats(data.Countries)
    }))

  }, [])

  const SearchCountry=((text)=>{
    let value=text.toLowerCase();

    let result=[];
    result=countryStats.filter((countries)=>{
     return countries.Country.toLowerCase().indexOf(value)!==-1
    });

    setCountryStats(result);
  })

  return (
    <div className="App">
      <GlobalStats global={globalStats}/>
      <Search search={SearchCountry}/>
      <CountriesStats countries={countryStats}/>

    </div>
  );
}

export default App;
