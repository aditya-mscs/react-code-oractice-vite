import './styles/App.scss'
import AppRouter from './routes/AppRouter'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
// The QueryClientProvider component is used to provide the query client to the React application.
// This allows any component within the application to access the query client and use React Query's features.
// The queryClient instance is created using the QueryClient constructor, which initializes the query client with default settings.


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App
