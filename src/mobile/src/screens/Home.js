import { useState, useEffect } from "react";
import { BottomNavigation } from "react-native-paper";

import Turmas from "../screens/Turmas";
import Usuarios from "../screens/Usuarios";
import Configuracoes from "../screens/Configuracoes";
import { useUser } from "../context/UserContex";

const Home = () => {
  const [index, setIndex] = useState(0);
  const { role } = useUser();

  const initialRoutes = [
    { key: "turmas", title: "Turmas", focusedIcon: "home" },
    { key: "usuarios", title: "Usuarios", focusedIcon: "account" },
  ];

  const [routes, setRoutes] = useState(initialRoutes);

  useEffect(() => {
    if (role === "3" && !routes.some(route => route.key === "configuracoes")) {
      setRoutes(prevRoutes => [
        ...prevRoutes,
        { key: "configuracoes", title: "Configuracoes", focusedIcon: "cog" },
      ]);
    }
  }, [role, routes]);

  const renderScene = BottomNavigation.SceneMap({
    turmas: Turmas,
    usuarios: Usuarios,
    configuracoes: Configuracoes,
  });

  return (
    <BottomNavigation
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: `#004AAD` }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
