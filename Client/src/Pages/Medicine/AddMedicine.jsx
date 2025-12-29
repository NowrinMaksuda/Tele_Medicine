import { useState } from 'react';

const AddMedicine = () => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3000/medicines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // ekhane simple header-based admin check
          role: 'admin',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || 'Failed to add medicine!');
        return;
      }

      alert('✅ Medicine added successfully!');
      setForm({
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
        image: '',
      });
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          ➕ Add New Medicine
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Medicine Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />

          <input
            name="category"
            placeholder="Category (Tablet / Syrup)"
            value={form.category}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <input
            name="price"
            type="number"
            placeholder="Price (৳)"
            value={form.price}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />

          <input
            name="stock"
            type="number"
            placeholder="Stock Quantity"
            value={form.stock}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <textarea
            name="description"
            placeholder="Short Description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            className="textarea textarea-bordered w-full"
          />

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Medicine'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
