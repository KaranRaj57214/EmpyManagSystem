
import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import AddEmployee from '../other/AddEmployee'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7 overflow-y-auto'>
            <Header changeUser={props.changeUser} />

            <AddEmployee />

            <CreateTask />

            <AllTask />
        </div>
    )
}

export default AdminDashboard

























// import React from 'react'
// import Header from '../other/Header'
// import CreateTask from '../other/CreateTask'
// import AllTask from '../other/AllTask'

// const AdminDashboard = (props) => {
//     return (
//         <div className='h-screen w-full p-7'>
//             <Header changeUser={props.changeUser} />
//             <CreateTask />
//             <AllTask />
//         </div>
//     )
// }

// export default AdminDashboard