import { Component, ChangeEvent } from 'react';
import './SearchTerm.scss'
import giphy from '../../assets/images/giphy.gif'

interface SearchResult {
  id: number;
  name: string;
  rotation_period: string;
  diameter: string;
  orbital_period: string;
  population: string;
  surface_water: string;
  terrain: string;
  

}

interface SearchSectionState {
  searchTerm: string;
  searchResults: SearchResult[];
  error: string | null;
}

class SearchSection extends Component<{}, SearchSectionState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
      error: null,
    };
  }

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/planets/?search=${this.state.searchTerm}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.results.length === 0) {
        throw new Error('Planet not found');
      }
      const planet = data.results[0];
      console.log(planet);
      
      const searchResult: SearchResult = {
        id: planet.url,
        name: planet.name,
        rotation_period: planet.rotation_period,
        diameter: planet.diameter,
        orbital_period: planet.orbital_period,
        population: planet.population,
        surface_water: planet.surface_water,
        terrain: planet.terrain,
      };
      this.setState({ searchResults: [searchResult], error: null });
    } catch (error) {
      console.error('Error fetching search results:', error);
      this.setState({ error: 'Failed to fetch search results', searchResults: [] });
    }
  
    localStorage.setItem('searchTerm', this.state.searchTerm);
  };
  
  handleSubmit = (e) =>{
    e.preventDefault()
  }

  render() {
    return (
      <div className='input-wrapper'>
        <form onClick={this.handleSubmit}>
        <input type="text" value={this.state.searchTerm} onChange={this.handleSearchChange} placeholder='Name of the planet'/>
        {/* input the name of planet like: Tatooine, Alderaan, Yavin IV, Hoth, Dagobah, Bespin, Endor, Naboo */}
        <button onClick={this.handleSearch}>Search</button>
        </form>
        {this.state.error && <div className='search-error'>Error: {this.state.error}</div>}
        {this.state.searchResults && this.state.searchResults.length > 0 && (
  <div>
    
    {this.state.searchResults.map((result) => (
      
      <div key={result.id} className='search_card'>
        <img src={giphy} alt="no image" />

      <div className='card__content'>

        <h2>Name: {result.name}</h2>
        <h3>Orbital periods:{result.orbital_period} days</h3>
        <h3>Population: {result.population.toLocaleString()}</h3>
        <h3>Water on surface: {result.surface_water}%</h3>
        <h3>Diametr: {result.diameter}km</h3>
        <h3>Terrain: {result.terrain} </h3>
      </div>
      </div>
    ))}
  </div>
)}
      </div>
    );
  }
}

export default SearchSection;
