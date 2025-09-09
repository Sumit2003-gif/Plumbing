import React, { useState } from 'react';

const RequestServiceForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
    localStorage.setItem('serviceRequest', JSON.stringify(formData));
    alert('Your request has been saved locally!');
    // Optionally clear the form
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      serviceType: '',
      message: ''
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-8  justify-around px-[10%] bg-gray-100">
      {/* Left: Form */}
      <form
        onSubmit={handleSubmit}
        className="md:col-span-2 space-y-4  w-3/4"
      >
        <h2 className="text-3xl font-bold">
          Request <span className="text-blue-500">Service</span>
        </h2>
        <p className="text-gray-600">Come and visit our quarters or simply send us an email anytime you want. We are open to all suggestions from our audience.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-400 p-2" required />
          </div>
          <div>
            <label className="text-sm font-medium">Lastname</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-400 p-2" required />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Address</label>
          <input name="address" value={formData.address} onChange={handleChange} className="w-full border border-gray-400 p-2" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-400 border p-2" required />
          </div>
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-400 p-2" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Preferable Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-400 p-2"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Preferable Time</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-400 p-2"
              required
            >
              <option value="">—Please choose an option—</option>
              <option>Morning (8 AM - 12 PM)</option>
              <option>Afternoon (12 PM - 4 PM)</option>
              <option>Evening (4 PM - 8 PM)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Type of Service</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
            required
          >
            <option value="">—Please choose an option—</option>
            <option>HVAC Maintenance</option>
            <option>Pipe Repair</option>
            <option>Water Heater Installation</option>
            <option>Emergency Service</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border-gray-400 border p-2"
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 cursor-pointer text-white py-2 px-6 rounded hover:bg-blue-600">
          Submit Request
        </button>
      </form>

      {/* Right: Contact Info */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">
          Our <span className="text-blue-500">Support</span>
        </h2>
        <p className="text-gray-700 font-medium">
          Commercial plumbing & boiler services of any kind.
        </p>
        <p className="text-gray-600">
          Collection services work best for those who’ll be in one location for most of the day, maybe you work from home, or have consignments that need to be collected from the office.
        </p>
        <address className="not-italic text-gray-700 space-y-2">
          <p>310 West 14th North Street, Suite 21<br />New York, NY 10010</p>
          <p>Phone: +88 (0) 101 0000 000</p>
          <p>Fax: +88 (0) 202 0000 001</p>
          <p>Email: info@bold-themes.com</p>
          <p>Support: support@bold-themes.com</p>
        </address>
      </div>
    </div>
  );
};

export default RequestServiceForm;
