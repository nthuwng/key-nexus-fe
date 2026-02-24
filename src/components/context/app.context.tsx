import { createContext, useContext, useEffect, useState } from "react";
import { getProfileAPI } from "@/service/user";

interface IAppContext {
  isAuthenticated: boolean;
  setIsAuthenticated: (v: boolean) => void;
  user: IUser | null;
  setUser: (v: IUser | null) => void;
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
}

const CurrentAppContext = createContext<IAppContext | null>(null);
type TProps = {
  children: React.ReactNode;
};


export const AppProvider = (props: TProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const res = await getProfileAPI();
        const currentUser = res.data.user;

        setUser(currentUser);
        setIsAuthenticated(true);
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccount();
  }, []);

  return (
    <CurrentAppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </CurrentAppContext.Provider>
  );
};

export const useCurrentApp = () => {
  const CurrentUsercontext = useContext(CurrentAppContext);
  if (!CurrentUsercontext) {
    throw new Error("CurrentAppContext must be used within AppProvider");
  }
  return CurrentUsercontext;
};
