import React from 'react'

const Projects = () => {
  return (
    <div>
        <section id='projects' className='py-16 bg-gray-100 px-4'>
    <h3 className="text-3xl font-semibold text-center mb-10">Projects</h3>
    {/* name,description,image responsive grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 bg-white rounded-lg shadow">
        <img src="https://repository-images.githubusercontent.com/668679012/d9c018e7-4b26-4261-928d-04a8868973a1" alt="Project 1" className="w-full h-32 object-cover rounded-t-lg"/>
        <h4 className="text-xl font-semibold mt-2">Project 1</h4>
        <p className="text-gray-600">Description of the project.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <img src="https://pages.github.com/images/slideshow/yeoman.png" alt="Project 2" className="w-full h-32 object-cover rounded-t-lg"/>
        <h4 className="text-xl font-semibold mt-2">Project 2</h4>
        <p className="text-gray-600">Description of the project.</p>
      </div>      <div className="p-4 bg-white rounded-lg shadow">
        <img src="https://repository-images.githubusercontent.com/850329665/1e1a661d-22d0-4561-b61c-1e54e8f2ae8a" alt="Project 2" className="w-full h-32 object-cover rounded-t-lg"/>
        <h4 className="text-xl font-semibold mt-2">Project 2</h4>
        <p className="text-gray-600">Description of the project.</p>
      </div>
      </div>
  </section>
    </div>
  )
}

export default Projects
