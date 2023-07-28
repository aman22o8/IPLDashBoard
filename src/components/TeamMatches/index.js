// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teameach: {}, myLatest: {}, myrecent: [], isLoading: true}

  componentDidMount() {
    this.getspecificdata()
  }

  getspecificdata = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const matchdetails = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, recentMatches} = matchdetails
    const latesUpdatedMatch = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manofTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const updatedRecentMatch = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manofTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    // console.log(matchdetails)
    // console.log(updatedRecentMatch)

    this.setState({
      teameach: matchdetails,
      myrecent: updatedRecentMatch,
      myLatest: latesUpdatedMatch,
      isLoading: false,
    })
  }

  render() {
    const {teameach, myLatest, myrecent, isLoading} = this.state
    console.log(teameach, isLoading)
    console.log(myLatest)
    console.log(myrecent)

    return (
      <div className="my_background">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src={teameach.teamBannerUrl}
              alt="team banner"
              className="team_image"
            />

            <div className="latest_container">
              <p className="latest">Latest Matches</p>
              <div>
                <LatestMatch latestmatch={myLatest} />
              </div>
              <ul className="list_container">
                {myrecent.map(eachCard => (
                  <MatchCard key={eachCard.id} eachCard={eachCard} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
