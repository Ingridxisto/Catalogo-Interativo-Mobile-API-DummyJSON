
import { Stack } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "@/src/store";

// Este componente lida com a lógica de navegação
function AppRouter() {
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);

  return (
    <Stack>
      {loggedIn ? (
        // Se estiver logado, renderiza as tabs
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        // Se não estiver logado, renderiza a tela de login
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
      )}
      
      {/* Esta tela é acessível a partir das tabs */}
      <Stack.Screen 
        name="(stacks)/details-product" 
        options={{ 
          headerShown: true, 
          title: '' 
        }} 
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}