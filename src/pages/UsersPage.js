import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUsers } from '../redux/actionsCreators/users/getUsersActionCreators'
import { deleteUser } from '../redux/actionsCreators/users/deleteUserActionCreator'

class UsersPage extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        return (
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Imię</td>
                        <td>Nazwisko</td>
                        <td>Email</td>
                        <td>Wiek</td>
                        <td>Operacje</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.users.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.lastname}</td>
                                    <td>{value.email}</td>
                                    <td>{value.age}</td>
                                    <td>
                                        <button onClick={() => this.props.deleteUser(value.id)}>
                                            Usuń
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        isPending: state.pending,
        isError: state.failed
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchUsers,
        deleteUser,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)