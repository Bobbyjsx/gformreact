import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Styles } from "./Header";

const Theme = ({ theme = { name: "purple" }, setStyle, inputs }: Styles) => {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    const handleColor = (color: string) => {
        setStyle({ name: color });
    };
    return (
        <div>
            <div className="flex">
                <button
                    type="button"
                    onClick={openModal}
                    className=""
                >
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Choose a theme" fill={`${theme.name}`} className="bi bi-palette w-7 pt-5 cursor-pointer" viewBox="0 0 16 16" name="blue">
                        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                    </svg>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex  items-center justify-end p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className=" max-w-md transform overflow-hidden rounded-2xl bg-white/40 backdrop-blur-sm p-6 text-left align-top shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        <h1 className="font-bold text-3xl border-b-2 border-b-gray-200 relative z-50" >Theme</h1>
                                        <p className="pl-2">Select a style of your choosing</p>
                                    </Dialog.Title>
                                    <div className="mt-2">

                                        <div className="flex flex-row flex-wrap gap-2 w-56 m-auto pt-2 justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="flex flex-row" viewBox="0 0 16 16" name="blue" onClick={() => handleColor("blue")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red " className="flex flex-row" viewBox="0 0 16 16" name="red" onClick={() => handleColor("red")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="flex flex-row" viewBox="0 0 16 16" name="green" onClick={() => handleColor("green")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="flex flex-row" viewBox="0 0 16 16" name="yellow" onClick={() => handleColor("yellow")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="flex flex-row" viewBox="0 0 16 16" name="orange" onClick={() => handleColor("orange")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="purple" className="flex flex-row" viewBox="0 0 16 16" name="purple" onClick={() => handleColor("purple")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="pink" className="flex flex-row" viewBox="0 0 16 16" name="pink" onClick={() => handleColor("pink")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="brown" className="flex flex-row" viewBox="0 0 16 16" name="brown" onClick={() => handleColor("brown")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="flex flex-row" viewBox="0 0 16 16" name="gray" onClick={() => handleColor("gray")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="flex flex-row" viewBox="0 0 16 16" name="black" onClick={() => handleColor("black")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orchid" className="flex flex-row" viewBox="0 0 16 16" name="orchid" onClick={() => handleColor("orchid")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="teal" className="flex flex-row" viewBox="0 0 16 16" name="teal" onClick={() => handleColor("teal")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="midnightblue" className="flex flex-row" viewBox="0 0 16 16" name="midnightblue" onClick={() => handleColor("midnightblue")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="olivedrab" className="flex flex-row" viewBox="0 0 16 16" name="olivedrab" onClick={() => handleColor("olivedrab")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="navy" className="flex flex-row" viewBox="0 0 16 16" name="navy" onClick={() => handleColor("navy")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="chocolate" className="flex flex-row" viewBox="0 0 16 16" name="chocolate" onClick={() => handleColor("chocolate")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" className="flex flex-row" viewBox="0 0 16 16" name="goldenrod" onClick={() => handleColor("goldenrod")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="flex flex-row" viewBox="0 0 16 16" name="blue" onClick={() => handleColor("blue")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aqua" className="flex flex-row" viewBox="0 0 16 16" name="aqua" onClick={() => handleColor("aqua")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lime" className="flex flex-row" viewBox="0 0 16 16" name="lime" onClick={() => handleColor("lime")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="khaki" className="flex flex-row" viewBox="0 0 16 16" name="khaki" onClick={() => handleColor("khaki")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="ivory" className="flex flex-row" viewBox="0 0 16 16" name="ivory" onClick={() => handleColor("ivory")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="indigo" className="flex flex-row" viewBox="0 0 16 16" name="indigo" onClick={() => handleColor("indigo")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="flex flex-row" viewBox="0 0 16 16" name="gold" onClick={() => handleColor("gold")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="crimson" className="flex flex-row" viewBox="0 0 16 16" name="crimson" onClick={() => handleColor("crimson")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="aquamarine" className="flex flex-row" viewBox="0 0 16 16" name="aquamarine" onClick={() => handleColor("aruamarine")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Chartreuse" className="flex flex-row" viewBox="0 0 16 16" name="Chartreuse" onClick={() => handleColor("chartreuse")}>
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Theme;
