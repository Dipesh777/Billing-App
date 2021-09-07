import React from 'react'

const BillList = (props) => {
    const { customers, bills } = props
   
    console.log('Customers', customers)
    console.log('Bills', bills)

    const customerName = (id) => {
        const result = customers.find((ele) => {
            return ele._id === id
        })
        return result.name
    }


    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Sr-No</th>
                    <th>Customer</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {bills.map((ele, ind) => {
                    return (
                        <tr key={ele._id}>
                            <td>{ind + 1}</td>
                            <td>{customerName(ele.customer)}</td>
                            <td>
                                <button>View Bill</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default BillList