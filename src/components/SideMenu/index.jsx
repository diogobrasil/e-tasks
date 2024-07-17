import { CheckCircle, House, Folder, PlusSquare, Note, SignOut, X } from "@phosphor-icons/react";

import { Container, Footer, Nav, Title, Header, Button } from "./styles";

export function SideMenu() {
  return (
    <Container>
      <Header>
        <Title><CheckCircle /> e-Tasks</Title>

        <Button>
          <X/>
        </Button>
      </Header>

      <Nav>
        <a href="#" data-menu-active="true"><House /> Home</a>
        <a href="#"><PlusSquare /> Nova tarefa</a>
        <a href="#"><Folder /> Projetos</a>
        <a href="#"><Note /> Relatórios</a>
      </Nav>

      <Footer>
        <img src="https://github.com/diogobrasil.png" alt="Foto do usuário" />
        <div>
          <strong>Diogo Brasil Da Silva</strong>
          <small>diogo@email.com</small>
        </div>

        <Button type="button">
          <SignOut />
        </Button>
      </Footer>
    </Container>
  );
}
