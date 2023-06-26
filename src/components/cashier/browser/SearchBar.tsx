import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import {
  Button,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import Navigation from "../../Home/Navigation";

interface Props {
  onSubmit: (searchInput: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (value: string) => {
    setInput(value);
    onSubmit(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <Form className="mySearch">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-sm-2"
        onChange={(e) => handleChange(e.target.value)}
        value={input}
        onSubmit={handleSubmit}
      />
    </Form>
  );
};

export default SearchBar;
