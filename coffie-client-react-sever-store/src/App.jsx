
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/Pages/CoffeeCard';
import { useState } from 'react';

function App() {
const loadedcoffees=useLoaderData();
const [coffees,setCoffee]=useState(loadedcoffees)


  return (
   
   
    <div className='m-20 '>
        <h1 className='text-6xl my-6'>Coffie  store :{coffees.length} </h1>
     <div className='grid gap-4'>
     {
        coffees.map(coffeecard=><CoffeeCard
           key={coffeecard._id} 
      coffeecard={coffeecard} 
       coffees={coffees}
       setCoffee={setCoffee}
       >

       </CoffeeCard>)
      }
     </div>
    </div>
    
  )
}

export default App
