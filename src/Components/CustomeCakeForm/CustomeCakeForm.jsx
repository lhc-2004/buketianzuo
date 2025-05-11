import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./customeCakeForm.css";
import customeCakeData from "../../customeCakeData.json";

function CustomeCakeForm() {
  const [selectedFile, setSelectedFile] = useState("");
  const [date, setDate] = useState(null);
  const [when, setWhen] = useState("");
  const [size, setSize] = useState("");
  const [method, setMethod] = useState("");
  const [filling, setFilling] = useState([]);
  const [candal, setCandal] = useState([]);
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : "No file selected");
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleWhenChange = (event) => {
    setWhen(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const handleFillingChange = (event) => {
    const value = event.target.value;
    setFilling((prev) =>
      event.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleCandalChange = (event) => {
    const value = event.target.value;
    setCandal((prev) =>
      event.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!selectedFile) newErrors.selectedFile = "Please upload a cake design file.";
    if (!date) newErrors.date = "Please select a date on the calendar.";
    if (!when.trim()) newErrors.when = "Please specify when you need the cake.";
    if (!method) newErrors.method = "Please select a delivery method.";
    if (!size) newErrors.size = "Please select a cake size.";
    if (filling.length === 0) newErrors.filling = "Please select at least one filling.";
    if (candal.length === 0) newErrors.candal = "Please select at least one candle.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmSubmit = () => {
    setIsModalOpen(false);
    alert("Your custom cake order has been submitted successfully!");
  };

  const today = new Date();
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
  const minDate = today;

  return (
    <div className="custome-cake-page">
      <h3 className="title">BUKE CUSTOM CAKE</h3>

      <div className="file-selector">
        <label htmlFor="cakeFile" className="file-label">
          Upload your cake design:
        </label>
        {errors.selectedFile && <p className="error-message">{errors.selectedFile}</p>}
        <label className="custom-file-input">
          <span>Select File</span>
          <input
            type="file"
            id="cakeFile"
            name="cakeFile"
            onChange={handleFileChange}
          />
        </label>
        <div className="file-name">{selectedFile || "No file selected"}</div>
      </div>

      <div className="form-sections">
        <div className="time">
          <h4 className="subtitle">TIME</h4>
          <div className="calendar-container">
            {errors.date && <p className="error-message">{errors.date}</p>}
            <Calendar
              value={date}
              onChange={handleDateChange}
              showDoubleView={false}
              next2Label={null}
              prev2Label={null}
              minDate={minDate}
              maxDate={maxDate}
              tileDisabled={({ date }) => date < today}
              className="calendar"
            />
          </div>
          <div className="when-input">
            <label htmlFor="when" className="when-label">When:</label>
            {errors.when && <p className="error-message">{errors.when}</p>}
            <input
              type="text"
              id="when"
              name="when"
              value={when}
              onChange={handleWhenChange}
              className="when-box"
            />
          </div>
          <div className="delivery-method">
            <label className="method-label">Pickup or Delivery:</label>
            {errors.method && <p className="error-message">{errors.method}</p>}
            <div className="method-options">
              <label>
                <input
                  type="radio"
                  name="method"
                  value="pickup"
                  onChange={handleMethodChange}
                  className="method-radio"
                />
                Pickup
              </label>
              <label>
                <input
                  type="radio"
                  name="method"
                  value="delivery"
                  onChange={handleMethodChange}
                  className="method-radio"
                />
                Delivery
              </label>
            </div>
          </div>
        </div>

        <div className="size">
          <h4 className="subtitle">SIZE</h4>
          {errors.size && <p className="error-message">{errors.size}</p>}
          {Object.entries(
            customeCakeData.sizes.reduce((groups, size) => {
              if (!groups[size.type]) groups[size.type] = [];
              groups[size.type].push(size);
              return groups;
            }, {})
          ).map(([type, sizes]) => (
            <div key={type} className="layer">
              <h5 className="subsub-title">{type}</h5>
              <div className="size-options">
                {sizes.map((option) => (
                  <label key={option.value}>
                    <input
                      type="radio"
                      className="size-radio"
                      name="size"
                      value={option.value}
                      onChange={handleSizeChange}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="filling">
          <h4 className="subtitle">FILLING</h4>
          {errors.filling && <p className="error-message">{errors.filling}</p>}
          <div className="filling-options">
            {customeCakeData.fillings.map((option) => (
              <label key={option.value}>
                <input
                  type="checkbox"
                  className="filling-checkbox"
                  name="filling"
                  value={option.value}
                  onChange={handleFillingChange}
                />
                {option.label}
              </label>
            ))}
          </div>
          <p className="filling-note">*Note: 六寸自带一种夹心, 8寸自带两种, 多加一种夹心+$3</p>
        </div>

        <div className="candal">
          <h4 className="subtitle">CANDLE</h4>
          {errors.candal && <p className="error-message">{errors.candal}</p>}
          <div className="candal-options">
            {customeCakeData.candles.map((option) => (
              <label key={option.value}>
                <input
                  type="checkbox"
                  className="candal-checkbox"
                  name="candal"
                  value={option.value}
                  onChange={handleCandalChange}
                />
                {option.label}
              </label>
            ))}
          </div>
          <p className="candal-note">*Note: 一个蛋糕配一只蜡烛 多加$4/支</p>
        </div>
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>

      {isModalOpen && (
  <div
    className="modal-overlay"
    onClick={(e) => {
      if (e.target.className === "modal-overlay") {
        handleCloseModal();
      }
    }}
  >
    <div className="modal-content">
      {/* Logo Section */}
      <div className="modal-header">
        <img
          src="./FancyBUKELogo.png"
          alt="Logo"
          className="modal-logo"
        />
        <button className="close-button" onClick={handleCloseModal}>
          &times;
        </button>
      </div>
      <h4 className="modal-title">Order Confirmation</h4>
      <div className="modal-body">
        <p><strong>Design File:</strong> {selectedFile}</p>
        <p><strong>Date:</strong> {date?.toLocaleDateString()}</p>
        <p><strong>When:</strong> {when}</p>
        <p><strong>Method:</strong> {method}</p>
        <p><strong>Size:</strong> {size}</p>
        <p><strong>Fillings:</strong> {filling.join(", ")}</p>
        <p><strong>Candles:</strong> {candal.join(", ")}</p>
      </div>
      <div className="modal-actions">
        <button className="confirm-button" onClick={handleConfirmSubmit}>
          Confirm Order
        </button>
      </div>
    </div>
  </div>
)}



    </div>
  );
}

export default CustomeCakeForm;
