import React from 'react'
import styles from './Products.module.css'


function Products() {
  return (
    <div className={styles.products}>
        <div className={styles.product}>
            <h1 className='flex justify-center items-center'>Products</h1>
            <h3 className='flex justify-center items-center'>We have built a lot production ready and internal to for our Partner </h3>
            <p className='mx-2'><br /></p>
            <div className='flex flex-col'>
                <h1 className='text-black'>A2SV</h1>
                <p> - We have built an internal for A2SV which can help them to analyse and to keep track of different Progress of Student and Teams</p>

                <p>- It is web based App that aitomate the progress sheet and avoid all of the hard work</p>
                <p>- It can helps a head on keeping track of their student progress in more visual and engaging way</p>
                <p>- It is best recommended app for A2SV to use it as Internal Tool</p>
                <p className='mx-3'><br /></p>
            </div>
                <a href='https://a2sv-sheets.vercel.app/' target='_blank' className='primary-button'>Check the product</a>

        </div>
        <p className='my-3 text-blue-700 mx-1'>View More</p>



    </div>
  )
}

export default Products