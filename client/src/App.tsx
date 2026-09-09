/* Signal / Surface: keep the application shell quiet, editorial, and structurally clear. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <LoadingScreen />
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster position="bottom-right" />
            <Home />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
