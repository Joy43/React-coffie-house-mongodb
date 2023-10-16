
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const CoffeeCard = ({coffeecard,coffees,setCoffee}) => {
  const  {_id, name, quantity, supplier, taste, category, details, photo}=coffeecard;
    
    const handleDelete=_id=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
            fetch(`http://localhost:5000/coffee/${_id}`,{
              method: 'DELETE'
            })
           
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your coffie has been deleted.',
                        'success'
                      )

                      const reaming =coffees.filter(cof=>cof._id!==_id);
                      setCoffee(reaming);
                }
            })
            }
          })
    }
    return (
        <div className="card card-side   bg-[#58C7F3] w-fit shadow-xl">
        <figure><img className="object-cover h-48 w-96" src={photo}/></figure>
        <div className=" flex justify-between w-fit pr-4 ">
        <div className="p-2">
        <h className="card-title ">{name}</h>
        br
          <p className='text-lg'>{quantity}</p>
          <br />
          <p className='text-lg'>{supplier}</p>
          <br />
          <p className='text-lg'>{taste}</p>
        </div>
          <div className="card-actions justify-end">
             {/*  */}
        <div className="btn-group gap-3 btn-group-vertical ">
  <button className="btn ">View</button>
  {/* edit */}
<Link to={`updateCoffie/${_id}`}>
<button className="btn">Edit</button>
</Link>
{/* delete------ */}
  <button 
  onClick={() => handleDelete(_id)}
  className="btn">X</button>
</div>
          </div>
        </div>

      
      </div>

    );
};

export default CoffeeCard;