import React from 'react'
import Chart from 'react-google-charts'
import moment from 'moment'
import { useSelector } from 'react-redux'

const DashChart = (props) => {
    const bills = useSelector((state) => {
        return state.bills
    })
    const month = moment().month()


    const sales = {}

    for (let i = 0; i < 12; i++) {
        let monthSale = 0
        bills.forEach(ele => {
            if (moment(ele.date).month() === i) {
                monthSale += ele.total
            }
        })
        sales[moment(i + 1, "M").format('MMM')] = monthSale
    }

    const monthlySales = Object.entries(sales)
    monthlySales.unshift(["month", "sales"])

    return (

        <Chart
            width={700}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={monthlySales}
            options={{
                title: '1 year Company sales',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { title: 'Sales', minValue: 0 },
                chartArea: { width: '70%', height: '70%' },
            }}
        />
    )
}

export default DashChart