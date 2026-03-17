"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavDropdown({ title, items , mobile , onClick}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative  "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    
    >
      <button className="text-[1.35rem] font-semibold capitalize hover:text-blue-600 transition">
        {title}
      </button>

      {open && (
        <div className={`absolute top-full ${mobile ? "left-25" : ' no-scrollbar left-0'} overflow-y-scroll  max-h-[80vh] bg-white shadow-xl rounded-lg p-3 z-50 min-w-[10rem]`}>
           <Link
              onClick={onClick}
             
              href={title}
              className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md z-50"
            >
                All
            </Link>
          {items.map((item, index) => (
            <Link
              onClick={onClick}
              key={index}
              href={item.href}
              className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md z-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
