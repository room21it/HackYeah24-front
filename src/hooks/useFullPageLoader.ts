import { useContext } from "react";
import { LoaderContext } from "~/components/FullPageLoader";

const useFullPageLoader = () => useContext(LoaderContext);

export default useFullPageLoader;
