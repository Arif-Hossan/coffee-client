import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee ,coffees, setCoffees}) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDeleteCoffee = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex w-full p-5 justify-between">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical">
                        <button className="btn mb-1">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn mb-1">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteCoffee(_id)} className="btn bg-orange-500">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;