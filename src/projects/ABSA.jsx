import React from 'react'

const ABSA = () => {
  return (
    <div className='w-full h-full bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 py-8  h-full'>
            <div>
                <p className='text-white text-2xl font-bold'>HR Analytics</p>
                <img className='w-full h-[400px] rounded-md mt-4' src="./sentiment-hero.jpg" alt="python icon" />
            </div>
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Background</p>
                <p>PT Astra International Tbk. (ASII) recorded a decline in car sales of 18.59% in January -February 2024 compared to the same period the previous year, and ASII's sales volume fell 22.49% compared to sales in the same period in 2023, which reached 34,717 units. In addition, at the beginning of 2024, Honda motorbike sales will decrease by around 3.32% compared to the same period in 2023. This decrease indicates that there is a problem that needs to be identified and addressed quickly. Therefore, an in-depth analysis of consumer sentiment towards various aspects of Astra products was carried out. Given this sharp decline, it is critical to gain proper insight into what is actually causing consumer concern or dissatisfaction.</p>
                <p className='mt-5'>Although this project was initially designed to develop a topic modeling system aimed at identifying the most frequently discussed topics on social media, users saw the importance of a classification approach for analyzing sentiment on predefined topics. With this approach, sentiment towards specific aspects such as product quality, service quality, price, brand image and others can be analyzed more accurately. It is hoped that the results of this analysis can provide strategic direction for product improvement and the preparation of more effective marketing strategies, to overcome declining sales and increase consumer satisfaction.</p>
            </div>
            {/* <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Objectives</p>
                <ol className='list-decimal ml-5'>
                    <li><span className='font-semibold'>Enhance Workforce Visibility: </span> track key metrics such as total employees, attrition rates, and active employee count, providing a clear picture of our workforce composition.</li>
                    <li><span className='font-semibold'>Identify Attrition Drivers:  </span> analyzing attrition by department, education field, and age group, we aim to uncover factors influencing employee departures and develop targeted retention strategies.</li>
                    <li><span className='font-semibold'>Foster Employee Satisfaction:</span> xamining job satisfaction ratings across various job roles will enable us to pinpoint areas for improvement and cultivate a more positive work environment.</li>
                </ol>
            </div> */}
            {/* <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Methodology</p>
                <p>This analysis utilizes Power BI, a powerful data visualization tool, to create compelling and informative charts and graphs. The visualizations will explore various aspects of the EV market, including:</p>
                <ul className='list-disc ml-5'>
                    <li><span className='font-semibold'>Pie Charts:</span>  Attrition by department and attrition rate by gender for different age groups will be depicted in pie charts, providing a clear understanding of the distribution of employee departures across departments and demographics.</li>
                    <li><span className='font-semibold'>Stacked Column Chart:   </span>Utilizing a stacked column chart to visualize the number of employees by age group, allowing us to identify workforce demographics and potential talent gaps.</li>
                    <li><span className='font-semibold'>Bar Chart:   </span>  A bar chart will is used to represent attrition by education field, offering insights into potential skill gaps or areas where targeted recruitment efforts might be beneficial.</li>
                    <li><span className='font-semibold'>Table:   </span> Job satisfaction ratings for various job roles will are presented in a table format, facilitating detailed analysis and identification of areas requiring improvement to enhance employee well-being and satisfaction.</li>
                </ul>
            </div> */}
            <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Results</p>
                <iframe title="ABSA Dashboard" className='w-full h-[600px]' src="https://app.powerbi.com/view?r=eyJrIjoiMDQxMmFlZDItNDkwZS00NGZiLWE1NDEtZDMyZTg4MmNkZDk3IiwidCI6IjM0ODViOTYzLTgyYmEtNGE2Zi04MTBmLWI1Y2MyMjZmZjg5OCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                {/* <p className='mt-5'>Unveiling Workforce Insights</p>
                <ol className='list-decimal ml-5'>
                    <li><strong>Education Enigma:    </strong>   Employees with a high school diploma exhibit the highest attrition rate compared to their bachelor's, master's, and doctoral degree counterparts.</li>
                    <li><strong>Bachelor Powerhouse: </strong>The bachelor's degree demographic emerges as the dominant force, boasting the highest number of active employees.</li>
                    <li><strong>R&D Revolving Door:  </strong> The R&D department faces a concerning attrition challenge, exhibiting the highest rate of employee departures.</li>
                    <li><strong>Millennial Boom:   </strong>  The 25-34 age group comprises the largest employee segment, with females taking the lead across all age demographics.</li>
                    <li><strong>Life Sciences Turnover::</strong> The life sciences educational field experiences the highest attrition rate, while HR boasts the lowest.</li>
                    <li><strong>Gender Gap in Attrition:   </strong> An interesting pattern emerges when examining attrition by gender and age. Males in the 34-44 age group exhibit the highest attrition rate, while females in the 45-55 age bracket see the most departures.</li>
                    <li><strong>Sales Satisfaction Soars:</strong> The sales executive role reigns supreme in terms of job satisfaction, boasting the highest rating.</li>
                    <li><strong>HR Needs a Boost:  </strong>The HR department finds itself at the bottom of the job satisfaction rankings.</li>
                </ol> */}
            </div>
            {/* <div className='text-white mt-5'>
                <p className='text-lg font-semibold'>Room for Improvement</p>
                <ul className='list-disc ml-5'>
                    <li>Invest in upskilling programs or mentorship initiatives to empower high school graduates and enhance their retention.</li>
                    <li>Maintain a focus on attracting and retaining talent with bachelor's degrees while exploring opportunities to nurture high-potential employees from other educational backgrounds.</li>
                    <li>Conduct exit interviews or focus groups within R&D to understand the factors driving attrition and develop targeted retention strategies specific to this department.</li>
                    <li>Tailor development programs and leadership opportunities to cater to the needs and aspirations of the dominant 25-34 age group, with a particular focus on empowering female employees.</li>
                    <li>Analyze the factors contributing to high turnover in life sciences and implement targeted retention strategies. Benchmark HR practices against other departments to identify potential best practices that can be adopted across the organization.</li>
                    <li>Conduct gender-specific focus groups within the 34-44 and 45-55 age ranges to understand their unique challenges and preferences, informing strategies to address their specific needs and concerns.</li>
                    <li>Leverage insights from the sales team's high satisfaction to foster a similar environment across other departments.</li>
                    <li>Conduct surveys or focus groups within HR to pinpoint areas for improvement and implement strategies to cultivate a more positive and engaging work environment for HR personnel.</li>
                </ul>
            </div> */}
        </div>
</div>
  )
}

export default ABSA