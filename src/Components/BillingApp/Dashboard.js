import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Dashboard = (props) => {


    console.log('I am Dashboard')
    return (
        <main>
            <header className='m-2 bg-light p-2 text-center text-success'>
                <h3>DashBoard</h3>
            </header>
            <section>
                <div className='d-flex m-4 justify-content-around'>

                    <div class="card text-white bg-success mb-3" style={{ maxWidth: "200px" }}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-warning mb-3" style={{ maxWidth: "200px" }}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Warning card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "200px" }}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Primary card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard