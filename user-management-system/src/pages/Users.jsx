
import UsersTable from '../components/UsersTable';
import UserForm from './UserForm'


const users =[
  {
    id: 1,
    name: 'tharu',
  },
  {
    id: 2,
    name: 'Navi',
  },
];


const Users = () => {
  return (
    <>
    <UserForm/>
    <UsersTable rows={users} />
    </>
  )
}

export default Users
