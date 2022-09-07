

function CountriesStats(props){
    // console.log('countries',props.countries)
    // console.log('countries', props.countries.length)
    return(
        <div>
            <table>
                <tr>
                    <th>Country Name</th>
                    <th>Total Number of cases</th>
                    <th>Active Cases</th>
                    
                </tr>
                {
                    props.countries.length === 0 ?(

                        <>
                        <div>
                             <h1>fetching data....</h1>
                        </div>
                        </>
                    
                    ):(
                        <>
                             {props.countries.map((country)=>(
                    <tr>
                        <td>{country.Country}</td>
                        <td>{country.TotalConfiremed}</td>
                        <td>{country.NewConfiremed}</td> 
                    </tr>
                ))}
                        </>
                    )
                }

              
            </table>

        </div>
    );
}

export default CountriesStats;