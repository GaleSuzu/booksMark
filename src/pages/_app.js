import "@/styles/globals.css";
import MainLayout from "../layout/index";

export default function App({ Component, pageProps }) {
  //ho wrappato Component con i suoi children all'interno di MainLayout che richiama tutta l'app con i children (vedi folder Layout)
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
