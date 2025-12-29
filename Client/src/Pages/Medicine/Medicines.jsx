import { useEffect, useState } from 'react';
import MedicineCard from './MedicineCard';

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/medicines/search?search=${encodeURIComponent(
            search
          )}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setMedicines(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, [search]);

  const handleOrder = async medicine => {
    try {
      const res = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // TODO: ekhane logged-in user id use koro
          userId: 'USER_ID_123',
          medicineId: medicine._id,
          quantity: 1,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || 'Order failed');
        return;
      }

      alert('Order placed!');
    } catch (err) {
      console.error(err);
      alert('Order failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 flex items-center gap-2">
          <span>💊</span>
          <span>Medicine Store</span>
        </h1>

        <input
          type="text"
          placeholder="Search medicine..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="input input-bordered w-full mb-6"
        />

        {loading ? (
          <div className="flex justify-center py-10">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {medicines.map(medicine => (
              <MedicineCard
                key={medicine._id}
                medicine={medicine}
                onOrder={handleOrder}
              />
            ))}

            {medicines.length === 0 && (
              <p className="text-center col-span-full text-base-content/60">
                No medicines found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Medicines;
