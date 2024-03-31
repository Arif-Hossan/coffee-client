import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const coffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(coffee);
    }
    return (
        <div>
            <div className='bg-[#f4f3f0] p-24'>
            <h2 className='text-3xl font-extrabold text-center'>Add a coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row  name and quantity*/}
                <div className='md:flex mb-4'>
                    <div className="form-control md:w-1/2" >
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
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
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Coffee Taste" className="input input-bordered w-full" />
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
                            <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add coffee" className="btn btn-block" />
            </form>
            </div>
        </div>
    );
};

export default AddCoffee;