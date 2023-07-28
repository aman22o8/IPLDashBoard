// Write your code here
// import { Link } from "react-router-dom";
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {totalteams: [], isLoading: true}

  componentDidMount() {
    this.getallteams()
  }

  getallteams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    console.log(teams)
    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({totalteams: updatedData, isLoading: false})
  }

  render() {
    const {totalteams, isLoading} = this.state
    return (
      <div className="bg_">
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="logo"
              />
              <h1 className="main_heading">IPL Dashboard</h1>
            </div>
            <ul className="footer">
              {totalteams.map(eachteam => (
                <TeamCard key={eachteam.id} allteams={eachteam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
