import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {  Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { Link } from "react-router-dom";

const NavCategory = () => {
  return (
    <div className="nav-category">
      <Menu>
        <div className="category-group d-flex p-3">
          <img
            src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"
            alt=""
          />
          <MenuButton as={Button} className="btn btn-light">
            <Text fontWeight={700}>Category</Text>
          </MenuButton>
        </div>
        <MenuList
          backgroundColor="#ffffff"
          p="30px"
          boxShadow="0px 0px 10px grey"
          borderRadius="10px"
        >
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="50px"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/85c38154-50b0-d61b-cf39-c4a3ff5dd4f7/original/Chicken_(1).png"
              alt=""
              mr="12px"
            />
            <Link to ="category/chicken"><span style={{padding:"5x 10px"}}>Chicken</span></Link>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              borderRadius="50px"
              boxSize="2rem"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/02337ccd-8109-c890-c9e9-226563158761/original/FIsh.png?format=webp"
              alt="Simon the pensive"
              mr="12px"
            />
             <Link to ="category/chicken"><span style={{padding:"5x 10px"}}>Mutton</span></Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavCategory;
