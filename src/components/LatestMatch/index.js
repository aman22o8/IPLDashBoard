// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestmatch} = props
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

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manofTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestmatch

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
    <div className="latest_data_container">
      <div className="left">
        <p className="competing_team commoncolor">{competingTeam}</p>
        <p className="competing_date commoncolor">{date}</p>
        <p className="competing_venue commoncolor">{venue}</p>
        <p className="competing_result commoncolor">{result}</p>
        <p className="competing_result commoncolor">
          {matchStatus} To {competingTeam}
        </p>
      </div>
      <div className="center">
        <img
          className="competing_logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="right">
        <p className="competing_1 commoncolor">First Innings</p>
        <p className="competing_2 commoncolor">{firstInnings}</p>
        <p className="competing_1 commoncolor">Second Innings</p>
        <p className="competing_2 commoncolor">{secondInnings}</p>
        <p className="competing_1 commoncolor">Man Of The Match</p>
        <p className="competing_2 commoncolor">{manofTheMatch}</p>
        <p className="competing_1 commoncolor">Umpire</p>
        <p className="competing_2 commoncolor">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
