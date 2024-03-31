import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo};
        // console.log(newCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.modifiedCount> 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'Success',
                    confirmButtonText: 'Done'
                  })
            }
            form.reset();

        })
    }
    return (
        
        <div>
            <div className='bg-[#f4f3f0] p-24'>
            <h2 className='text-3xl font-extrabold text-center'>Update coffee {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row  name and quantity*/}
                <div className='md:flex mb-4'>
                    <div className="form-control md:w-1/2" >
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" defaultValue={quantity} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row supplier and taste*/}
                <div className='md:flex mb-4'>
                    <div className="form-control md:w-1/2" >
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" defaultValue={supplier} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Coffee Taste" defaultValue={taste} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row category and details */}
                <div className='md:flex mb-4'>
                    <div className="form-control md:w-1/2" >
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category Name" defaultValue={category} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className='md:flex mb-4'>
                    <div className="form-control w-full" >
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo Url" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update coffee" className="btn btn-block" />
            </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;