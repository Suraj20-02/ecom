// import { Navigate, useNavigate } from "react-router-dom";
// import me from "./assets/pics/me.jpg";

// const Form = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submitted ");
//     navigate("/home");
//   };
//   return (
//     <>
//       <div class="flex min-h-screen items-center flex-col justify-center px-6 py-12 lg:px-8">
//         <div class="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             class="mx-auto rounded-full h-16 w-auto"
//             src={me}
//             alt="Your Company"
//           />
//           <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             class="space-y-6"
//             action="#"
//             method="POST"
//             onSubmit={handleSubmit}
//           >
//             <div>
//               <label
//                 for="email"
//                 class="block text-sm font-medium leading-6 text-white-900"
//               >
//                 Email address
//               </label>
//               <div class="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autocomplete="email"
//                   required
//                   class="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div class="flex items-center justify-between">
//                 <label
//                   for="password"
//                   class="block text-sm font-medium leading-6 text-white-900"
//                 >
//                   Password
//                 </label>
//                 <div class="text-sm">
//                   <a
//                     href="#"
//                     class="font-semibold text-indigo-600 hover:text-indigo-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div class="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autocomplete="current-password"
//                   required
//                   class="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p class="mt-10 text-center text-sm text-white-500">
//             Not a member?
//             <a
//               href="#"
//               class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
//             >
//               Start a 14 day free trial
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Form;

import { useNavigate } from "react-router-dom";
import me from "./assets/pics/me.png";

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted ");
    navigate("/home");
  };

  return (
    <>
      <div class="flex items-center justify-center min-h-screen bg-gray-50">
        <div class="w-full max-w-md space-y-8">
          <div>
            <img
              class="mx-auto rounded-full h-16 w-auto"
              src={me}
              alt="Your Company"
            />
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <form
            class="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                class="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-600">
            Not a member?{" "}
            <a
              href="#"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;

// import { useNavigate } from "react-router-dom";
// import me from "./assets/pics/me.png";

// const Form = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submitted ");
//     navigate("/home");
//   };

//   return (
//     <>
//       <div class="flex items-center justify-between min-h-screen ">
//         <div class="w-full max-w-md space-y-8 bg-slate-300 p-8 rounded-lg shadow-lg">
//           <div class="text-center">
//             <img
//               class="mx-auto rounded-full h-16 w-auto"
//               src={me}
//               alt="Your Company"
//             />
//             <h2 class="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
//               Sign in to your account
//             </h2>
//           </div>

//           <form
//             class="mt-8 space-y-6"
//             action="#"
//             method="POST"
//             onSubmit={handleSubmit}
//           >
//             <div>
//               <label
//                 for="email"
//                 class="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div class="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autocomplete="email"
//                   required
//                   class="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <div class="flex items-center justify-between">
//                 <label
//                   for="password"
//                   class="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <div class="text-sm">
//                   <a
//                     href="#"
//                     class="font-semibold text-indigo-600 hover:text-indigo-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div class="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autocomplete="current-password"
//                   required
//                   class="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 class="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p class="mt-10 text-center text-sm text-gray-600">
//             Not a member?{" "}
//             <a
//               href="#"
//               class="font-semibold text-indigo-600 hover:text-indigo-500"
//             >
//               Start a 14 day free trial
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;
