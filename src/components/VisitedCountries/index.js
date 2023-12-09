import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, deleteVisitCountry} = props
  const {name, imageUrl, id} = visitedCountryDetails

  const remove = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="list-app-container">
      <div className="visited-section">
        <img src={imageUrl} alt="thumbnail" className="image" />
        <div className="details-section">
          <p className="paragraph">{name}</p>
          <button
            type="button"
            onClick={remove}
            data-testid="delete"
            className="remove-button"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
export default VisitedCountries
