import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgUploadKey = '8ef9ce20f333800ab7085b22ba4b5827';

    const onSubmit = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgUploadKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const newProduct = {
                        name: data.name,
                        description: data.description,
                        price: parseInt(data.price),
                        minimumQuantity: parseInt(data.minimumQuantity),
                        stock: parseInt(data.stock),
                        img: img
                    }
                    fetch('https://automotive-website-serverside-production.up.railway.app/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newProduct)
                    })
                        .then(res => res.json())
                        .then(insertedData => {
                            if (insertedData.insertedId) {
                                toast.success('Product information is added')
                                reset()
                            }
                            else {
                                toast.error('Failed to add product')
                            }
                        })
                }
            })
    }

    return (
        <div>
            <p className='my-4 mx-8 md:text-lg'>Add new product's details in company database through filling this table.</p>
            <div className='mx-4 md:mx-12 w-full max-w-xs'>
                <form className='grid grid-cols-1 gap-2' onSubmit={handleSubmit(onSubmit)}>
                    <label className='font-semibold'>Product Name</label>
                    <input
                        className="input input-bordered input-primary rounded-none "
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                            required: {
                                value: true
                            }
                        })} />

                    <label className='font-semibold'>Description</label>
                    <textarea className="input input-bordered rounded-none h-40"
                        type="text"
                        placeholder='Description'
                        {...register("description", {
                            required: {
                                value: true
                            }
                        })} />

                    <label className='font-semibold'>Price</label>
                    <input className="input input-bordered rounded-none"
                        type="number"
                        placeholder="Price"
                        {...register("price", {
                            required: {
                                value: true
                            }
                        })} />

                    <label className='font-semibold'>Minimum Order Quantity</label>
                    <input className="input input-bordered rounded-none"
                        type="number"
                        placeholder="Minimum Quantity"
                        {...register("minimumQuantity", {
                            required: {
                                value: true
                            }
                        })} />

                    <label className='font-semibold'>Total Stock</label>
                    <input className="input input-bordered rounded-none"
                        type="number"
                        placeholder="Stock"
                        {...register("stock", {
                            required: {
                                value: true
                            }
                        })} />

                    <label className='font-semibold'>Upload product image</label>
                    <input
                        className="input"
                        type="file"
                        {...register("img", {
                            required: {
                                value: true
                            }
                        })}
                    />


                    <input type="submit" className='btn btn-primary mt-2 border-2 rounded-none' value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;