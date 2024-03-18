import React, { useEffect, useRef } from "react";

interface Props {
  open: boolean;
  setOpen: (e: boolean) => void;
  children: React.ReactNode;
  modalClass?: string;
}

const Modal = ({ open, setOpen, children, modalClass }: Props) => {
  const modalBox = useRef<HTMLDivElement>(null);
  // close modal when clicked outside of modal box
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalBox.current && !modalBox.current.contains(event.target)) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalBox, setOpen]);

  return (
    <div
      className={`h-screen bg-black-700/60 w-full flex justify-end fixed z-20 transition-opacity ease-in-out duration-300 top-0 right-0 overflow-x-hidden
            overflow-y-scroll hide-scroll-bar translate ${
              open ? "opacity-100 visible " : "opacity-0 invisible "
            }`}
    >
      <div className="relative w-full my-2 mx-auto h-full lg:h-auto md:h-auto">
        <div
          className={`translate duration-500 h-full transition-all py-4 flex justify-center items-center ${
            open ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }
          `}
        >
          {/* body  */}
          <div
            ref={modalBox}
            className={`w-[500px] h-[500px] bg-white rounded-md ${modalClass}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
