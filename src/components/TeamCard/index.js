// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {allteams} = props
  const {id, name, teamImageUrl} = allteams
  return (
    <Link className="blog-item-link" to={`/team-matches/${id}`}>
      <li className="eachItem_container">
        <img className="image2" src={teamImageUrl} alt={name} />
        <p className="desc">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
