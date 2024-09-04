import React from 'react'

const Inventory = () => {
  return (
    <div className='w-full h-full bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 py-8  h-full'>
            <div>
                <p className='text-white text-2xl font-bold'>Supply Chain Inventory Management</p>
                <img className='w-full h-[400px] rounded-md mt-4' src="./supply-thumb.png" alt="python icon" />
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Background</p>
                <p>In today's fast-paced supply chain environment, effectively managing inventory is essential for maintaining operational efficiency and customer satisfaction. This dashboard provides a comprehensive view of key inventory metrics, allowing stakeholders to monitor and optimize various aspects of inventory management. By analyzing stockout rates, return rates, backorder rates, and inventory turnover ratios, businesses can gain valuable insights into their inventory performance, helping to minimize costs and maximize availability.</p>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Objectives</p>
                <ol className='list-decimal ml-5'>
                    <li><span className='font-semibold'>Monitor Inventory Performance: </span> Track key metrics such as stockout rates, return rates, and inventory turnover ratios to assess the effectiveness of inventory management across multiple warehouses.</li>
                    <li><span className='font-semibold'>Optimize Cost Efficiency:  </span> Analyze inventory carrying costs, including administrative, damage, handling, loss, and storage costs, to identify opportunities for reducing operational expenses and improving overall supply chain efficiency.</li>
                </ol>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Preprocessing Data</p>
                <div>
                    <p className='text-lg font-semibold'>1. Check Missing Value</p>
                    <p>using pandas library, it could be pinpoint that there is a column who has some missing values, which is Inventory Days of Supply</p>
                    <img className='h-[440px] rounded-md mt-4' src="/inventory-check1.png" alt="python icon" />
                </div>
                <div>
                    <p className='text-lg font-semibold'>2. Check Data Distribution</p>
                    <p>To address the missing value, the first thing that I do is to know the distribution of the data. It turns out that the distributions is not normally distributed. Hence it is more appropriate to use Median formula to fill those missing values.</p>
                    <img className='h-[440px] rounded-md mt-4' src="/inventory-check2.png" alt="python icon" />
                </div>
                <div>
                    <p className='text-lg font-semibold'>3. Handling Missing Values</p>
                    <p>Using fillna function to address missing value with the Median Value</p>
                    <img className='rounded-md mt-4' src="/inventory-check3.png" alt="python icon" />
                </div>
                <div>
                    <p className='text-lg font-semibold'>4. Recheck Missing Values</p>
                    <p>After it has been filled, the total amount of missing values for each column is zero</p>
                    <img className='h-[440px] rounded-md mt-4' src="/inventory-check4.png" alt="python icon" />
                </div>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Results</p>
                <iframe width="600" title='inventory' height="450" src="https://lookerstudio.google.com/embed/reporting/8276b615-bad6-4a77-b195-a0172c74c5ef/page/PyZAE" frameBorder="0" className='w-full ' allowFullScreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
                <p className='mt-5'>Insights</p>
                <ol className='list-decimal ml-5'>
                    <li><strong>Stockout Rate:    </strong>   A stockout rate of 1.28% indicates that a small percentage of inventory is not meeting demand. This suggests relatively good inventory management but still room for improvement</li>
                    <li><strong>Return Rate: </strong>The return rate is 3.01%, which could point to issues with product quality, incorrect orders, or customer dissatisfaction. This metric requires further investigation to pinpoint the exact causes.</li>
                    <li><strong>Backorder Rate:  </strong> With a backorder rate of 5.43%, there's a notable delay in fulfilling orders, potentially leading to customer dissatisfaction and lost sales.</li>
                    <li><strong>Inventory Turnover Ratio:  </strong>  A turnover ratio of 2.7 suggests that the inventory is being replenished moderately. There could be an opportunity to optimize this further to reduce carrying costs.</li>
                    <li><strong>Inventory Carrying Cost: </strong> The majority of the costs are related to storage, followed by handling and loss costs. This indicates that optimizing storage practices could lead to significant cost savings.</li>
                    <li><strong>Inventory Days of Supply:    </strong> The data shows fluctuations in inventory days of supply, with peaks indicating potential overstocking or supply chain inefficiencies.</li>
                </ol>
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Room for Improvement</p>
                <ol className='list-decimal ml-5'>
                    <li><strong>Improve Demand Forecasting:     </strong>  To reduce the stockout rate further, enhance demand forecasting models by incorporating more data points, such as market trends and seasonal demand.</li>
                    <li><strong>Investigate Return Causes:  </strong> Conduct a thorough analysis of the reasons behind the 3.01% return rate. Addressing these issues, whether they are related to product quality or fulfillment accuracy, will improve customer satisfaction and reduce costs.</li>
                    <li><strong>Reduce Backorders:  </strong> Streamline the supply chain processes to reduce the backorder rate. This might involve improving supplier lead times or increasing safety stock for high-demand items.</li>
                    <li><strong>Optimize Inventory Turnover:  </strong>  Review the inventory turnover ratio and consider implementing just-in-time (JIT) inventory practices or adjusting reorder points to enhance inventory flow and reduce holding costs.</li>
                    <li><strong>Storage Cost Reduction: </strong> Since storage costs constitute a significant portion of inventory carrying costs, explore opportunities to optimize warehouse space usage, renegotiate storage contracts, or invest in technology to increase storage efficiency.</li>
                    <li><strong>Stabilize Inventory Days of Supply:     </strong>  Monitor the fluctuations in inventory days of supply and implement strategies to stabilize it. This may involve better synchronization between procurement and demand, as well as adjusting inventory policies based on real-time data.</li>
                </ol>
            </div>
        </div>
</div>
  )
}

export default Inventory