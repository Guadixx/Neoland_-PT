import './Series.css';
import React, { useEffect, useState } from 'react';
const Series = () => {
    const [series, setSeries] = useState([]);
    const [allApi, setAllApi] = useState([]);
    const [filteredSeries, setFilteredSeries] = useState([]);
    let filter = [];

    const getAll = async () => {
        await fetch(
          'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
        )
          .then((res) => res.json())
          .then((res) => setAllApi(res.entries));}
          console.log(series)

          const filterSeries = allApi.filter((serie) => serie.programType === 'series' && serie.releaseYear >= 2010,);
          filterSeries.splice(21)
        
          const sortSeries = filterSeries.sort((a,b) => (a.title > b.title ? -1 : 1));
  
          useEffect(() => {
            getAll();
          }, [filteredSeries])

    return (
        <div className="series_container">
          <div className="series_title">
            <h3>Popular Series</h3>
          </div>
          <div className="series_card">
            { filterSeries.map((serie) => (
                <div key={serie.title}>
                  <img src={serie.images['Poster Art'].url} alt={serie.title} />
                  <h4>{serie.title}</h4>
                </div>
              ))
        }
          </div>
        </div>
      );
    };

export default Series 