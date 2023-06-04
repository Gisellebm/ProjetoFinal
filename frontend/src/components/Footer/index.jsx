import { Container, Logo } from "./styles";
import polygonIcon from "../../assets/polygonIcon1.svg";

export function Footer() {
    return (
        <Container>
            <footer>
                <Logo>
                    <img src={polygonIcon}  alt="Imagem de um polígono cinza" />
                    <h1>food explorer</h1>
                </Logo>
                <p>© 2023 - Todos os direitos reservados.</p>
            </footer>
        </Container>
    );
}