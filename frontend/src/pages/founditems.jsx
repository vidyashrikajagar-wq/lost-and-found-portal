import React, { useState, useEffect } from "react";
import "./founditems.css";

function FoundItems() {

  const [formData, setFormData] = useState({
    item_name: "",
    category: "",
    location: "",
    found_date: "",
    description: "",
    image: "",
    contact_email: "",
    contact_phone: "",
  });

  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    fetchFoundItems();
  }, []);

  const fetchFoundItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/found");
      const data = await response.json();
      setFoundItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/api/found", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      alert(data.message);

      if (response.ok) {

        setFormData({
          item_name: "",
          category: "",
          location: "",
          found_date: "",
          description: "",
          image: "",
          contact_email: "",
          contact_phone: "",
        });

        fetchFoundItems();
      }

    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="found-container">

      <div className="found-form">

        <h1>🎉 Report Found Item</h1>
        <p>Help someone by reporting a found item.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="item_name"
            placeholder="Item Name"
            value={formData.item_name}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>ID Card</option>
            <option>Mobile Phone</option>
            <option>Laptop</option>
            <option>Wallet</option>
            <option>Bag</option>
            <option>Books</option>
            <option>Keys</option>
            <option>Watch</option>
            <option>Others</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Found Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="found_date"
            value={formData.found_date}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            rows="4"
            placeholder="Describe the item"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL (Optional)"
            value={formData.image}
            onChange={handleChange}
          />

          <input
            type="email"
            name="contact_email"
            placeholder="Contact Email"
            value={formData.contact_email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="contact_phone"
            placeholder="Contact Number"
            value={formData.contact_phone}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit Report
          </button>

        </form>

      </div>

      <div className="found-list">

        <h2>📦 Reported Found Items</h2>

        {foundItems.length === 0 ? (
          <p>No found items reported yet.</p>
        ) : (

          <div className="items-container">

            {foundItems.map((item) => (

              <div className="item-card" key={item.id}>

                <h3>{item.item_name}</h3>

                <p><strong>Category:</strong> {item.category}</p>

                <p><strong>Location:</strong> {item.location}</p>

                <p><strong>Date:</strong> {item.found_date?.split("T")[0]}</p>

                <p><strong>Description:</strong> {item.description}</p>

                <p><strong>Email:</strong> {item.contact_email}</p>

                <p><strong>Phone:</strong> {item.contact_phone}</p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default FoundItems;
