import React from 'react';

const MedicineCard = ({ medicine, onOrder }) => {
  const outOfStock = !medicine.stock || medicine.stock <= 0;

  return (
    <div className="card bg-base-100 shadow-md h-full">
      {medicine.image && (
        <figure className="px-4 pt-4">
          <img
            src={medicine.image}
            alt={medicine.name}
            className="rounded-xl h-40 w-full object-cover"
          />
        </figure>
      )}

      <div className="card-body">
        <div className="flex items-start justify-between gap-2">
          <h3 className="card-title text-primary">{medicine.name}</h3>
          {medicine.category && (
            <div className="badge badge-outline">{medicine.category}</div>
          )}
        </div>

        {medicine.description && (
          <p className="text-sm text-base-content/70 mt-1 line-clamp-3">
            {medicine.description}
          </p>
        )}

        <div className="mt-3 space-y-1">
          <p className="font-semibold">Price: ৳{medicine.price}</p>
          <p className={outOfStock ? 'text-error font-medium' : ''}>
            Stock: {outOfStock ? 'Out of stock' : medicine.stock}
          </p>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-primary btn-sm"
            disabled={outOfStock}
            onClick={() => onOrder(medicine)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
