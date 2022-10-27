import "./styles.css";

const CharacterCard = (props) => (
  <article className="characterCard">
    <div className="characterImagen">
      <img
        src={props.image}
        alt={props.name}
      />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{props.name}</h2>
        <span className="status">
          <span className={`status__icon status__${props.state.toLowerCase()}`}></span>
          {props.state} - {props.species}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href={props.lastLocationUrl}>{props.lastLocationName}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={props.firstLocationUrl}>{props.firstLocationName}</a>
      </div>
    </div>
  </article>
);

export default CharacterCard;
