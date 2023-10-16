
import Swal from 'sweetalert2'
const AddCoffie = () => {

  const handleAddCoffie = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, quantity, supplier, taste, category, details, photo };

    // Send data to the server
    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Corrected content-type
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });

        }
      })
      .catch((error) => {
         console.error('Error:', error);
        
      });
  };



    return (

    <div>

<div>
        <h1 className="text-center text-xl mb-4 font-[Rancho] ">Update Existing Coffee Details</h1>
       <div>
    <p className="text-center mb-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
</div>

{/* main div */}
      <div className="bg-[#E9498C] max-w-4xl p-4  ">
 {/* from card */}
      <form onSubmit={handleAddCoffie} className="w-full  max-w-4x ">

{/*------------ 1st name & quantity--------------------- */}
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
     
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
       Coffie Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
       focus:bg-white" id="grid-first-name" name="name" type="text" placeholder="Name"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
{/*-------------------------------  */}
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
       Quantity
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500" id="grid-last-name" name="quantity" type="text" placeholder="Quantity"/>
    </div>
  </div>

{/* ----------2nd --------- */}
<div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
     
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Supplier
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
       focus:bg-white" id="grid-first-name" name="supplier" type="text" placeholder="Supplier"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
{/* -------------------------- */}
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Taste
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500" name="taste" id="grid-last-name" type="text" placeholder="Taste"/>
    </div>
  </div>
{/* -----------------  3rd*/}

<div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
     
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Category
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
       focus:bg-white" id="grid-first-name" name="category" type="text" placeholder="Category"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
{/* -------------------------- */}
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Details
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500" id="grid-last-name" type="text" name="details" placeholder="Details"/>
    </div>
  </div>
{/*------------------ photo------ */}


  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      Photo
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500" id="grid-password"  type="text" name="photo" placeholder="Photo URL"/>
      
    </div>

  </div>
{/*---------- button ----------------*/}
<button className="btn btn-wide font-[Rancho]">Update Coffie Deatils</button>

  
</form>



      </div>




      </div>


{/* <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"  />
    </div>
  </div> */}
    </div>

      
      
    );
};

export default AddCoffie;