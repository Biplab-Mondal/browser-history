import './index.css'

const HistoryItem = props => {
  const {historyItems, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItems

  const onClickDeleteButton = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-items-container">
      <div className="history-text-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="app-image" />
          <div className="logo-text-container">
            <p className="title">{title}</p>
            <p className="domain-name">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onClickDeleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
