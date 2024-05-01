"use client";
import { useState } from "react";

const LoginPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const overlayBg =
    "bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500";

  const handleToggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-300 to-pink-300">
      <div className="h-4/5 w-4/5 bg-white relative overflow-hidden rounded-lg">
        <div
          id="signin"
          className={`bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-10 ${
            isAnimated ? "translate-x-full opacity-0 " : "z-30"
          }`}
        >
          {/* Render your SigninForm component here */}
          <SigninForm />
        </div>
        <div
          id="signup"
          className={`absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
            isAnimated
              ? "translate-x-full opacity-100 z-10 animate-show"
              : "opacity-0 z-10"
          }`}
        >
          {/* Render your SignupForm component here */}
          <SignupForm />
        </div>
        <div
          id="overlay-container"
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition transition-transform duration-700 ease-in-out z-100 ${
            isAnimated ? "-translate-x-full" : ""
          }`}
        >
          <div
            id="overlay"
            className={`${overlayBg} relative -left-full h-full w-[200%] transform transition transition-transform duration-700 ease-in-out ${
              isAnimated ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            <div
              id="overlay-left"
              className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform  transition transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-0" : "-translate-x-[20%]"
              }`}
            >
              {/* LeftOverlayContent component with centered content */}
              <LeftOverlayContent
                handleToggleAnimation={handleToggleAnimation}
              />
            </div>
            <div
              id="overlay-right"
              className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition transition-transform duration-700 ease-in-out ${
                isAnimated ? "translate-x-[20%]" : "translate-x-0"
              }`}
            >
              {/* RightOverlayContent component */}
              <RightOverlayContent
                handleToggleAnimation={handleToggleAnimation}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LeftOverlayContent = ({ handleToggleAnimation }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">
        Ya tienes una cuenta ?
      </h1>
      <h5 className="text-xl text-white">
        Inicia sesión con tu correo y contraseña
      </h5>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent hover:bg-button rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in "
          onClick={handleToggleAnimation}
        >
          Inicia sesión
        </button>
      </div>
    </div>
  );
};

const RightOverlayContent = ({ handleToggleAnimation }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">
        No tienes una cuenta ?
      </h1>
      <h5 className="text-xl text-white">Regístrate con tan solo un click</h5>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent hover:bg-button rounded-full text-center text-white font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
          onClick={handleToggleAnimation}
        >
          Regístrate
        </button>
      </div>
    </div>
  );
};

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      
    } catch (error) {
      
    }
  };
  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-indigo-600">
                Iniciar sesión
              </h1>

              <form className="mt-12" action="" method="POST">
                <div className="mt-10 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Correo electrónico
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Contraseña"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Contraseña
                  </label>
                </div>

                <input
                  type="submit"
                  value="Iniciar sesión"
                  className="mt-10 px-8 py-4 uppercase rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignupForm = () => {
  return (
    <div className=" selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-indigo-600">
                Create account
              </h1>

              <form className="mt-12" action="" method="POST">
                <div className="relative">
                  <input
                    id="nombres"
                    name="nombres"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Nombres"
                  />
                  <label
                    htmlFor="nombres"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Nombres
                  </label>
                </div>
                <div className="mt-5 relative">
                  <input
                    id="apellidos"
                    name="apellidos"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Apellidos"
                  />
                  <label
                    htmlFor="apellidos"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Apellidos
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Correo
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    contraseña
                  </label>
                </div>

                <input
                  type="submit"
                  value="Sign up"
                  className="mt-10 px-8 py-4 uppercase rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
