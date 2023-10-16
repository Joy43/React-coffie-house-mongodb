import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffie = () => {
  const coffee=useLoaderData();

  const {  name, quantity, supplier, taste, category, details, photo } = coffee;


  const handleUpdateCoffie = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
    console.log(updatedCoffee);

    // Send data to the server------------
    fetch(`http://localhost:5000/coffee/${_Id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(updatedCoffee ),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCound>0){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'coffie update sucessful',
            showConfirmButton: false,
            timer: 1500
          });

        }
      })
      .catch((error) => {
         console.error('Error:', error);
        
      });
  };

// ------------------
    return (
      <div>
      <h1 className="text-center text-xl mb-4 font-[Rancho] ">Update Existing Coffee Details</h1>
     <div>
  <p className="text-center mb-4">It is a long established fact that a reader will be distraceted by the readable 
  content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
</div>

{/* main div */}
    <div className="bg-[#E9498C] max-w-4xl p-4  ">
{/* from card */}
    <form onSubmit={handleUpdateCoffie} className="w-full  max-w-4x ">

{/*------------ 1st name & quantity--------------------- */}
<div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
     Coffie Name
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 
    border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
     focus:bg-white" id="grid-first-name" defaultValue={name} name="name" type="text" placeholder="Name"/>
    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
  </div>
{/*-------------------------------  */}
  <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
     Quantity
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
     border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
      focus:border-gray-500" defaultValue={quantity} id="grid-last-name" name="quantity" type="text" placeholder="Quantity"/>
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
     focus:bg-white" id="grid-first-name"defaultValue={supplier} name="supplier" type="text" placeholder="Supplier"/>
    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
  </div>
{/* -------------------------- */}
  <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
    Taste
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
     border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
      focus:border-gray-500" name="taste" defaultValue={taste} id="grid-last-name" type="text" placeholder="Taste"/>
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
     focus:bg-white" id="grid-first-name" defaultValue={category} name="category" type="text" placeholder="Category"/>
    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
  </div>
{/* -------------------------- */}
  <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
    Details
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
     border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
      focus:border-gray-500" id="grid-last-name" defaultValue={details} type="text" name="details" placeholder="Details"/>
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
      focus:border-gray-500" id="grid-password" defaultValue={photo}  type="text" name="photo" placeholder="Photo URL"/>
    
  </div>

</div>
{/*---------- button ----------------*/}
<button className="btn btn-wide font-[Rancho]">Update Coffie Deatils</button>


</form>



    </div>




    </div>
    );
};

export default UpdateCoffie;