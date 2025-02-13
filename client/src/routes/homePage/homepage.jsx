import { useContext } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import { AuthContext } from '../../context/AuthContext'
import './homePage.scss'

const HomePage = () => {


    const {currentUser}= useContext(AuthContext)

    console.log(currentUser)


  return (
    <div className ="homePage">
     <div className="textContainer">
        <div className="wrapper">
            <h1 className="title">
                Find Real Estate & Get Your Dream Place
            </h1>
            <p>
                Your trusted property partner in finding the perfect home. 
                We understand that everyone&apos;s needs are different - whether you&apos;re looking for a PG accommodation,
                a rental home, or your dream house to buy.
            </p>
            <SearchBar/>

            <div className="boxes">

                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Awards Gained</h2>
                </div>
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            
            </div>
        </div>
     </div>
     <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage;
