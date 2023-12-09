import './index.css'

const CountriesList = props => {
  const {details, addVisitedCountry} = props
  const {isVisited, id, name} = details
  const countryText = isVisited ? 'Visited' : 'Visit'

  const onChangeVisited = () => {
    addVisitedCountry(id)
  }

  return (
    <li className="list-app-section">
      <p className="name-text">{name}</p>
      {isVisited === true ? (
        <p className="para">{countryText}</p>
      ) : (
        <button type="button" className="button" onClick={onChangeVisited}>
          {countryText}
        </button>
      )}
    </li>
  )
}
export default CountriesList
