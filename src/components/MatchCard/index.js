// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachCard} = props
  //   console.log(latestmatch)
  //   console.log(latestmatch.competing_team)
  //   const latesUpdated = {
  //     competingTeam: latestmatch.competing_team,
  //     competingTeamLogo: latestmatch.competing_team_logo,
  //     date: latestmatch.date,
  //     firstInnings: latestmatch.first_innings,
  //     id: latestmatch.id,
  //     manofTheMatch: latestmatch.man_of_the_match,
  //     matchStatus: latestmatch.match_status,
  //     result: latestmatch.result,
  //     secondInnings: latestmatch.second_innings,
  //     umpires: latestmatch.umpires,
  //     venue: latestmatch.venue,
  //   }
  //   console.log(latesUpdated)

  const {competingTeam, competingTeamLogo, matchStatus, result} = eachCard

  //   console.log(
  //     competingTeam,
  //     competingTeamLogo,
  //     date,
  //     firstInnings,
  //     id,
  //     manofTheMatch,
  //     matchStatus,
  //     result,
  //     secondInnings,
  //     umpires,
  //     venue,
  //   )
  return (
    <li className="list_data_container">
      <img
        className="list_competing_logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="list_competing_team commoncolor1">{competingTeam}</p>
      <p className="list_competing_result commoncolor1">{result}</p>
      <p className="list_competing_status commoncolor1">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
