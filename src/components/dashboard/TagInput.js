"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the icon

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="container mx-auto px-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-flex items-center bg-primary text-white rounded-full px-3 py-1 mr-2 my-2"
        >
          {tag}
          <FaTimes
            className="ml-2 cursor-pointer"
            onClick={() => removeTag(index)}
          />
        </span>
      ))}
      <input
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder="Add a tag..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
      />
    </div>
  );
};

export default TagInput;
