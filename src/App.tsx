import "./app.scss";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Users } from "./components/Users/User";
import { FormUser } from "./components/FormUser/FormUser";
import { Container } from "./components/Container/Container";

import { useShowUsers } from "./hooks/useShowUsers";

const App: React.FC = () => {
  const { showButton, setPage, employees, loading, setLoading, toggleUser } =
    useShowUsers();

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Hero />
      <Container>
        <Users
          showButton={showButton}
          setPage={setPage}
          employees={employees}
          loading={loading}
        />
        <FormUser
          toggleUser={toggleUser}
          setPage={setPage}
          setLoading={setLoading}
        />
      </Container>
      {loading && <div className="loading"></div>}
    </>
  );
};

export default App;
