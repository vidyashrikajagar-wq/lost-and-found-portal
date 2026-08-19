import React, { useState, useEffect } from "react";
import "./lostitems.css";

function LostItems() {
  const [formData, setFormData] = useState({
    item_name: "",
    category: "",
    location: "",
    lost_date: "",
    description: "",
    image: "",
    contact_email: "",
    contact_phone: "",
  });

  const [lostItems, setLostItems] = useState([]);

  // Fetch all lost items when page loads
  useEffect(() => {
    fetchLostItems();
  }, []);

  const fetchLostItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/lost");
      const data = await response.json();
      setLostItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/lost", {
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
          lost_date: "",
          description: "",
          image: "",
          contact_email: "",
          contact_phone: "",
        });

        fetchLostItems();
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="lost-container">

      {/* Report Form */}
      <div className="lost-form">

        <h1>📢 Report Lost Item</h1>
        <p>Fill in the details below.</p>

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
            placeholder="Lost Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="lost_date"
            value={formData.lost_date}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            rows="4"
            placeholder="Describe your item"
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

      {/* Display Lost Items */}
      <div className="lost-list">

        <h2>📋 Reported Lost Items</h2>

        {lostItems.length === 0 ? (
          <p>No lost items reported yet</p>
        ) : (
          <div className="items-container">

            {lostItems.map((item) => (

              <div className="item-card" key={item.id}>

                <h3>{item.item_name}</h3>

                <p><strong>Category:</strong> {item.category}</p>

                <p><strong>Location:</strong> {item.location}</p>

                <p><strong>Date:</strong> {item.lost_date?.split("T")[0]}</p>

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

export default LostItems;
