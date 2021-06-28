import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux'

const UserContainer = ({ userData, fetchUser }) => {
    useEffect(() => {
        fetchUser()
    }, [])
    return (

        userData.loading ? (<h2>Loading.</h2>) : userData.error ? (<h2>{userData.error}</h2>) : (
            <div>
                <h2>Lists</h2>
                <div>
                    {userData && userData.user && userData.user.map(user => <p>{user.name}</p>)}
                </div>
            </div>
        )

    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProp = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(UserContainer)