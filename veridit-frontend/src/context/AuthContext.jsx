import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser =
      localStorage.getItem("veridit-user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  function login(email) {

    const fakeUser = {
      name: "Navarro",
      email,
    };

    setUser(fakeUser);

    localStorage.setItem(
      "veridit-user",
      JSON.stringify(fakeUser)
    );
  }

  function logout() {

    setUser(null);

    localStorage.removeItem(
      "veridit-user"
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}