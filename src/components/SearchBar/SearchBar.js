import React from 'react'
import { CiSearch } from "react-icons/ci"

export const SearchBar = () => {
  return (<>


      <div class="relative text-gray-600 m-7 ">
              <p type="submit" class="absolute r-2 mt-3 ml-5">
              <CiSearch/>
              </p>
          <input type="search" name="search" placeholder="Search"
              class="ring-1 pl-11 ring-gray-300 w-[700px] h-9 px-5 pr-10 rounded-full text-sm focus:outline-none  focus:ring-blue-500 focus:ring-2"/>
      </div>

  </>
    
  )
}
