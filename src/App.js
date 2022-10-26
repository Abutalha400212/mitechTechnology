import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./layout/routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <RouterProvider router={router}>
      <Toaster position="top-center" reverseOrder={false} />
    </RouterProvider>
  );
}

export default App;
