import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function MyResume() {
  return (
    <section id='myResume' className='relative flex flex-col h-auto justify-between'>
      {/* Heading */}
      <div className='flex justify-center items-center mt-24 mb-16 lg:mb-0'>
        <h1 className='text-center text-4xl font-bold'>Eugene Kim</h1>
      </div>

      <div className='flex px-6 sm:mx-12 justify-between mb-12'>
        <div className='flex gap-2 justify-center items-center'>
          <a href='https://www.linkedin.com/in/eugenetedkim/' target='_blank'>
            <FaLinkedin size={30} />
          </a>
          <a href='https://github.com/eugenetedkim' target='_blank'>
            <FaGithub size={30} />
          </a>
        </div>
        <a href='/resumeEugeneKim.pdf' target='_blank' rel='noopener noreferrer' download>
          <button className='border rounded-sm px-4'>Download</button>
        </a>
      </div>

      <div className='flex flex-col gap-4 px-6 sm:mx-12'>
        {/* Experience */}
        <div>
          <p className='text-2xl font-bold mb-2'>Experience</p>

          {/* Experience 1 */}
          <div className='flex flex-col gap-6'>

            <div className=''>
              <div className='flex flex-row justify-between'>
                <p className='text-lg leading-none font-semibold'>Software Engineer</p>
                <p className='text-sm leading-none text-right'>Oct 2020 - Present</p>
              </div>

              <div className='flex flex-row justify-between'>
                <p className='text-base leading-none font-medium'>Fulgent Genetics</p>
                <p className='text-sm leading-none text-right'>El Monte, CA</p>
              </div>

              <div className='mt-1'>
                <ul className='list-disc list-outside ms-6'>
                  <li>
                    Helped design and build company's enterprise COVID-19 and vaccine app for a large government client with over 100,000 employees, enabling them to efficiently manage the health and safety of their workforce.
                  </li>
                  <li>
                    Designed and augmented company's transaction-based system by creating new transactions, data structures, and functionalities to streamline and improve existing workflows.
                  </li>
                  <li>
                    Automated intricate lab procedures with daemons, resulting in improved efficiency, accuracy, reduced manual labor, and lower risk of human error.
                  </li>
                  <li>
                    Developed solutions by collaborating with project management, lab scientists, bioinformaticians and software engineers to build new microservices, pages, apis, database tables, and automated daemons.
                  </li>
                  <li>
                    Utilized a variety of technologies such as Vue.js, Angular.js, RabbitMQ, MongoDB, Express.js, Oracle database, PM2, AWS services such as EC2, S3, Aurora, EBS, ALB, and more.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className=''>
              <div className='flex flex-row justify-between'>
                <p className='text-lg leading-none font-semibold'>Natural Language Processing, Cloud Engineering, & Database Programmer Student Assistant</p>
                <p className='text-sm leading-none text-right'>Jan 2020 - Jun 2020</p>
              </div>

              <div className='flex flex-row justify-between'>
                <p className='text-base leading-none font-medium'>Digital Transformation Dept - California State University, San Bernardino</p>
                <p className='text-sm leading-none text-right'>San Bernardino, CA</p>
              </div>

              <div className='mt-1'>
                <ul className='list-disc list-outside ms-6'>
                  <li>
                    Developed natural language processing chatbots for university's website which reduced customer service costs and provided 24/7 support to students, faculty, and staff.
                  </li>
                  <li>
                    Improved speech recognition confidence through heavy testing, debugging, documentation, and flowcharts.
                  </li>
                  <li>
                    Collaborated closely with Programmer Analyst and team in the design and implementation process.
                  </li>
                  <li>
                    Implemented chatbots using HTML, CSS, JavaScript, Google Dialogflow API, and Node.js.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div className=''>
              <div className='flex flex-row justify-between'>
                <p className='text-lg leading-none font-semibold'>Project Manager/Software Engineer</p>
                <p className='text-sm leading-none text-right'>Mar 2019 - Jun 2020</p>
              </div>

              <div className='flex flex-row justify-between'>
                <p className='text-base leading-none font-medium'>Software Engineering Course - California State University, San Bernardino</p>
                <p className='text-sm leading-none text-right'>San Bernardino, CA</p>
              </div>

              <div className='mt-1'>
                <ul className='list-disc list-outside ms-6'>
                  <li>
                    Led team of 6 as Product Manager in a software engineering course that delivered mobile apps to real companies.
                  </li>
                  <li>
                    Used SCRUM to rapidly prototype and launch a mobile GPS app for students and faculty to the Google Play store.
                  </li>
                  <li>
                    Implemented the ArcGIS Runtime SDK, heavily debugged, and delivered a search bar, navigation drawer, grid buttons, spinner, compass, and GPS using Android Studio and Java.
                  </li>
                  <li>
                    Delegated roles, monitored responsibilities, and collaborated with team using Trello and Bitbucket.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Education */}
        <div>
          <p className='text-2xl font-bold mb-2'>Education</p>

          <div className='flex flex-col gap-4'>
            <div className=''>
              <div className='flex flex-row justify-between'>
                <p className='text-lg leading-none font-semibold'>Bachelor of Science in Computer Science</p>
                <p className='text-sm leading-none text-right'>Sep 2017 - Jun 2020</p>
              </div>

              <div className='flex flex-row justify-between'>
                <p className='text-base leading-none font-medium'>California State University, San Bernardino</p>
                <p className='text-sm leading-none text-right'>San Bernardino, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <p className='text-2xl font-bold mb-2'>Skills</p>

          <p>
          JavaScript, TypeScript, C++, Java, Python, SQL, Vue.js, React.js, Next.js, Angular.js, Vuex, Redux, HTML, CSS, Node.js, PM2, Axios, Express.js, Amazon Aurora, Oracle database, Oracle SQL Developer, MySQL Workbench, MongoDB, RabbitMQ, Amazon EC2, Linux, Git, Bitbucket, Jira, Visual Studio Code, Android Studio

          </p>

        </div>

      </div>
    </section>
  )
}