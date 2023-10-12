import React from 'react'
import { Navigation } from './Navigation'

const Home = () => {
  return (
    <>
    <Navigation />
    <main className="h-screen w-screen flex flex-col py-6 bg-gray-100">
  <div className="container mx-auto">
    <div className="p-4">
      <h1 className="text-4xl font-bold">Welcome to My Todo Displayer</h1>
      <p className="mt-2 text-lg">Displays todos fetched from JSONPlaceholder</p>
    </div>

    <div className="p-4 mt-4">
      <h2 className="text-3xl font-semibold">Key Features</h2>
      <ul className="list-none mt-2 text-lg">
        <li className="bg-white p-4 rounded-lg shadow-md mb-4 transition hover:-translate-y-3 hover:bg-gray-200 hover:shadow-2xl text-xl delay-100">
          View All the todos fetched.
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md mb-4 transition hover:-translate-y-3 hover:bg-gray-200 hover:shadow-2xl text-xl delay-100">
          Press on tasks to display all todos.
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md mb-4 transition hover:-translate-y-3 hover:bg-gray-200 hover:shadow-2xl text-xl delay-100">
          Add a valid todo id in the search box to filter the todos.
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md mb-4 transition hover:-translate-y-3 hover:bg-gray-200 hover:shadow-2xl text-xl delay-100">
          Search by entering search id in the search box and pressing search.
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md mb-4 transition hover:-translate-y-3 hover:bg-gray-200 hover:shadow-2xl text-xl delay-100">
          Uses react-router-dom to handle the dynamic routing.
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md mb-4 transition hover:-translate-y-3 hover:bg-gray-200 hover:shadow-2xl text-xl delay-100">
          Uses Tailwind CSS to style the elements.
        </li>
      </ul>
    </div>
  </div>
</main>

    </>
  )
}

export default Home
