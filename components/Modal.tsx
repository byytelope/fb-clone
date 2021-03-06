import {
  Dispatch,
  SetStateAction,
  Fragment,
  MutableRefObject,
  ReactNode,
  MouseEventHandler,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";
import Divider from "./Divider";
import IconButton from "./IconButton";
import FormButton from "./FormButton";

export default function Modal({
  isOpen,
  onClose,
  initialFocusRef,
  children,
  title,
  description,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialFocusRef?: MutableRefObject<any>;
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        onClose={onClose}
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={initialFocusRef}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-80" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-lg space-y-4">
              <div className="flex flex-row justify-between">
                <div className="space-y-2">
                  <Dialog.Title
                    as="span"
                    className="text-3xl font-bold tracking-wide text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <p className="text-sm text-textSecondary">{description}</p>
                </div>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                  variant="primary"
                >
                  <BsXLg />
                </IconButton>
              </div>
              <Divider />
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
