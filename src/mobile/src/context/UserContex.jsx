import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
        role,
        setRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, name, setName, role, setRole } = context;
  return { signed, setSigned, name, setName, role, setRole };
}
