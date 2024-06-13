import { useEffect } from "react";
import { MdClose } from "react-icons/md";

export function ModalBody(props: { children: React.ReactNode }) {
  return <div>{props.children}</div>;
}

export function ModalHeader(props: { title: string; onClose?: () => void }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-primary-on-container">
          {props.title}
        </h1>
      </div>
      <div>
        {props.onClose && (
          <button
            onClick={props.onClose}
            className="transition-all text-primary-on-container bg-secondary rounded-full p-2 hover:bg-secondary/50"
          >
            <MdClose className="text-xl md:text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
}

export function ModalContent(props: { children: React.ReactNode }) {
  return (
    <div className="bg-primary-container shadow-md p-4 rounded-md border border-secondary max-w-xl">
      {props.children}
    </div>
  );
}

export function Modal(props: { children: React.ReactNode; isOpen: boolean }) {
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [props.isOpen]);

  return (
    props.isOpen && (
      <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-primary-container/85 backdrop-blur p-2">
        {props.children}
      </div>
    )
  );
}
